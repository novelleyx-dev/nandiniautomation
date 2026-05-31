import { NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';
import { PDFDocument, rgb, StandardFonts, PageSizes } from 'pdf-lib';

export async function POST(req: NextRequest) {
  try {
    const { screenshot, currentUrl } = await req.json();

    // Create PDF document using pdf-lib (pure JS, zero native font dependencies)
    const pdfDoc = await PDFDocument.create();

    // Embed standard fonts (these are base64-encoded inside pdf-lib, no filesystem lookup)
    const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const fontMono = await pdfDoc.embedFont(StandardFonts.Courier);

    const PAGE_W = 595;  // A4 width in pts
    const PAGE_H = 842;  // A4 height in pts
    const MARGIN = 50;
    const CONTENT_W = PAGE_W - MARGIN * 2;

    // Helper to draw wrapped text and return final Y
    function drawWrappedText(
      page: ReturnType<typeof pdfDoc.addPage>,
      text: string,
      x: number,
      startY: number,
      opts: {
        font: typeof fontRegular;
        size: number;
        color?: ReturnType<typeof rgb>;
        lineHeight?: number;
        maxWidth?: number;
        bold?: boolean;
      }
    ): number {
      const {
        font,
        size,
        color = rgb(0.1, 0.1, 0.15),
        lineHeight = size * 1.4,
        maxWidth = CONTENT_W,
      } = opts;

      // Split text into lines first by newlines, then wrap each
      const rawLines = text.split('\n');
      let currentY = startY;

      for (const rawLine of rawLines) {
        // Word wrap each raw line
        const words = rawLine.split(' ');
        let currentLine = '';

        for (const word of words) {
          const testLine = currentLine ? `${currentLine} ${word}` : word;
          const testWidth = font.widthOfTextAtSize(testLine, size);

          if (testWidth > maxWidth && currentLine !== '') {
            // Draw current line
            if (currentY < MARGIN + lineHeight) {
              // Need new page
              const newPage = pdfDoc.addPage([PAGE_W, PAGE_H]);
              currentY = PAGE_H - MARGIN;
              newPage.drawText(currentLine, { x, y: currentY, font, size, color });
              currentY -= lineHeight;
            } else {
              page.drawText(currentLine, { x, y: currentY, font, size, color });
              currentY -= lineHeight;
            }
            currentLine = word;
          } else {
            currentLine = testLine;
          }
        }

        // Draw remaining
        if (currentLine) {
          if (currentY < MARGIN + lineHeight) {
            page = pdfDoc.addPage([PAGE_W, PAGE_H]);
            currentY = PAGE_H - MARGIN;
          }
          page.drawText(currentLine, { x, y: currentY, font, size, color });
          currentY -= lineHeight;
        }

        // Handle empty line (just a newline character)
        if (!rawLine && rawLines.length > 1) {
          currentY -= lineHeight * 0.5;
        }
      }

      return currentY;
    }

    // =====================================================================
    // PAGE 1: TITLE PAGE
    // =====================================================================
    const page1 = pdfDoc.addPage([PAGE_W, PAGE_H]);
    let y = PAGE_H - MARGIN - 30;

    // Title
    page1.drawText('NANDINI ENTERPRISES', {
      x: MARGIN,
      y,
      font: fontBold,
      size: 22,
      color: rgb(0.05, 0.07, 0.2),
    });
    y -= 30;

    page1.drawText('Automated Site Source Export & Audit', {
      x: MARGIN,
      y,
      font: fontBold,
      size: 14,
      color: rgb(0.08, 0.35, 0.85),
    });
    y -= 30;

    // Horizontal rule
    page1.drawLine({
      start: { x: MARGIN, y },
      end: { x: PAGE_W - MARGIN, y },
      thickness: 1,
      color: rgb(0.7, 0.75, 0.85),
    });
    y -= 20;

    page1.drawText(`Export Timestamp: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })} IST`, {
      x: MARGIN, y, font: fontRegular, size: 9, color: rgb(0.3, 0.35, 0.4),
    });
    y -= 16;

    page1.drawText(`Target URL: ${currentUrl || 'Unknown'}`, {
      x: MARGIN, y, font: fontRegular, size: 9, color: rgb(0.3, 0.35, 0.4),
    });
    y -= 16;

    page1.drawText('Classification: HIGHLY CONFIDENTIAL - INTERNAL USE ONLY', {
      x: MARGIN, y, font: fontBold, size: 9, color: rgb(0.7, 0.1, 0.1),
    });
    y -= 30;

    // Embed screenshot if available
    if (screenshot) {
      try {
        const base64Data = screenshot.replace(/^data:image\/\w+;base64,/, '');
        const imgBuffer = Buffer.from(base64Data, 'base64');

        let img;
        if (screenshot.startsWith('data:image/jpeg') || screenshot.startsWith('data:image/jpg')) {
          img = await pdfDoc.embedJpg(imgBuffer);
        } else {
          img = await pdfDoc.embedPng(imgBuffer);
        }

        const MAX_IMG_W = CONTENT_W;
        const MAX_IMG_H = 350;
        const scale = Math.min(MAX_IMG_W / img.width, MAX_IMG_H / img.height);
        const imgW = img.width * scale;
        const imgH = img.height * scale;

        page1.drawText('CURRENT PAGE VISUAL SCREENSHOT:', {
          x: MARGIN, y, font: fontBold, size: 11, color: rgb(0.05, 0.07, 0.2),
        });
        y -= 16;

        page1.drawImage(img, {
          x: MARGIN,
          y: y - imgH,
          width: imgW,
          height: imgH,
        });
        y -= imgH + 20;
      } catch (imgErr) {
        console.error('Failed to embed screenshot:', imgErr);
        page1.drawText('Screenshot embedding failed.', {
          x: MARGIN, y, font: fontRegular, size: 9, color: rgb(0.8, 0.1, 0.1),
        });
        y -= 16;
      }
    }

    // =====================================================================
    // PAGE 2: DIRECTORY TREE
    // =====================================================================
    const page2 = pdfDoc.addPage([PAGE_W, PAGE_H]);
    let y2 = PAGE_H - MARGIN - 10;

    page2.drawText('PROJECT DIRECTORY STRUCTURE & ARCHITECTURE', {
      x: MARGIN, y: y2, font: fontBold, size: 14, color: rgb(0.05, 0.07, 0.2),
    });
    y2 -= 20;

    page2.drawLine({
      start: { x: MARGIN, y: y2 },
      end: { x: PAGE_W - MARGIN, y: y2 },
      thickness: 0.5,
      color: rgb(0.75, 0.8, 0.9),
    });
    y2 -= 14;

    const rootDir = process.cwd();
    const tree = generateDirectoryTree(rootDir);
    const treeLines = tree.split('\n');

    let treePage = page2;
    let treeY = y2;
    for (const line of treeLines) {
      if (treeY < MARGIN + 12) {
        treePage = pdfDoc.addPage([PAGE_W, PAGE_H]);
        treeY = PAGE_H - MARGIN;
      }
      if (line.length > 0) {
        try {
          treePage.drawText(line.slice(0, 120), {
            x: MARGIN, y: treeY, font: fontMono, size: 7.5, color: rgb(0.1, 0.15, 0.25),
          });
        } catch (_) {}
      }
      treeY -= 10;
    }

    // =====================================================================
    // PAGES 3+: SOURCE CODE FILES
    // =====================================================================
    const sourceFiles = getSourceFiles(rootDir);

    for (const filePath of sourceFiles) {
      const relativePath = path.relative(rootDir, filePath).replace(/\\/g, '/');

      let content = '';
      try {
        content = fs.readFileSync(filePath, 'utf8');
      } catch (readErr) {
        console.error(`Cannot read: ${filePath}`, readErr);
        continue;
      }

      // Start a new page for each file
      let filePage = pdfDoc.addPage([PAGE_W, PAGE_H]);
      let fileY = PAGE_H - MARGIN;

      // File header
      filePage.drawText(`FILE: ${relativePath}`, {
        x: MARGIN, y: fileY, font: fontBold, size: 11, color: rgb(0.05, 0.07, 0.2),
      });
      fileY -= 14;

      filePage.drawText(`Size: ${content.length} bytes`, {
        x: MARGIN, y: fileY, font: fontRegular, size: 8, color: rgb(0.45, 0.5, 0.55),
      });
      fileY -= 8;

      filePage.drawLine({
        start: { x: MARGIN, y: fileY },
        end: { x: PAGE_W - MARGIN, y: fileY },
        thickness: 0.5,
        color: rgb(0.8, 0.83, 0.9),
      });
      fileY -= 12;

      // Write file content line by line
      const lines = content.split('\n');
      for (const line of lines) {
        if (fileY < MARGIN + 10) {
          filePage = pdfDoc.addPage([PAGE_W, PAGE_H]);
          fileY = PAGE_H - MARGIN;
        }

        // Clean non-printable characters and truncate overly long lines
        const cleanLine = line.replace(/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/g, '').slice(0, 200);
        if (cleanLine.length > 0) {
          try {
            filePage.drawText(cleanLine, {
              x: MARGIN,
              y: fileY,
              font: fontMono,
              size: 7,
              color: rgb(0.1, 0.12, 0.2),
              maxWidth: CONTENT_W,
            });
          } catch (_err) {
            // Skip lines with characters pdflib can't render
          }
        }
        fileY -= 9;
      }
    }

    // Serialize PDF
    const pdfBytes = await pdfDoc.save();

    return new Response(Buffer.from(pdfBytes), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Nandini_Source_Export.pdf"',
      },
    });

  } catch (err: any) {
    console.error('Error generating source PDF:', err);
    return new Response(JSON.stringify({ error: err.message, stack: err.stack }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// =====================================================================
// HELPERS
// =====================================================================
function getSourceFiles(rootDir: string): string[] {
  const filesList: string[] = [];

  const rootConfigs = [
    'package.json', 'tsconfig.json', 'next.config.mjs',
    'postcss.config.mjs', 'eslint.config.mjs',
  ];
  for (const cfg of rootConfigs) {
    const p = path.join(rootDir, cfg);
    if (fs.existsSync(p) && fs.statSync(p).isFile()) {
      filesList.push(p);
    }
  }

  const srcDir = path.join(rootDir, 'src');
  if (fs.existsSync(srcDir)) recurse(srcDir);

  function recurse(dir: string) {
    try {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          if (!['node_modules', '.next', '.git', 'fonts'].includes(item) && !item.startsWith('.')) {
            recurse(fullPath);
          }
        } else {
          const ext = path.extname(item);
          if (['.ts', '.tsx', '.css', '.js', '.mjs', '.json'].includes(ext)) {
            if (!item.endsWith('.d.ts') && item !== 'package-lock.json') {
              filesList.push(fullPath);
            }
          }
        }
      }
    } catch (e) {
      console.error(`Error scanning ${dir}:`, e);
    }
  }

  return filesList;
}

function generateDirectoryTree(rootDir: string): string {
  let output = 'project-root/\n';

  function recurse(dir: string, prefix = '') {
    try {
      const list = fs.readdirSync(dir)
        .map(item => {
          const p = path.join(dir, item);
          let isDir = false;
          try { isDir = fs.statSync(p).isDirectory(); } catch (_) {}
          return { name: item, isDir, path: p };
        })
        .sort((a, b) => {
          if (a.isDir && !b.isDir) return -1;
          if (!a.isDir && b.isDir) return 1;
          return a.name.localeCompare(b.name);
        })
        .filter(item => {
          if (['node_modules', '.next', '.git'].includes(item.name)) return false;
          if (item.name.startsWith('.')) return false;
          if (item.name === 'package-lock.json') return false;
          return true;
        });

      list.forEach((item, idx) => {
        const isLast = idx === list.length - 1;
        output += `${prefix}${isLast ? '└── ' : '├── '}${item.name}${item.isDir ? '/' : ''}\n`;
        if (item.isDir) recurse(item.path, prefix + (isLast ? '    ' : '│   '));
      });
    } catch (e) {
      output += `${prefix}[error reading dir]\n`;
    }
  }

  recurse(rootDir);
  return output;
}
