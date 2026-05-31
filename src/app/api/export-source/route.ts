import PDFDocument from 'pdfkit';
import { NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const { screenshot, currentUrl } = await req.json();

    // 1. Create a PDF Document
    const doc = new PDFDocument({ autoFirstPage: true, margin: 50 });
    
    // We will collect the PDF stream into chunks
    const chunks: any[] = [];
    doc.on('data', (chunk) => chunks.push(chunk));
    
    // Create a promise to resolve when the doc finishes writing
    const pdfPromise = new Promise<Buffer>((resolve, reject) => {
      doc.on('end', () => {
        resolve(Buffer.concat(chunks));
      });
      doc.on('error', (err) => {
        reject(err);
      });
    });

    // --- PAGE 1: TITLE & SCREENSHOT ---
    doc.fillColor('#0f172a').fontSize(24).font('Helvetica-Bold').text('NANDINI ENTERPRISES', { align: 'center' });
    doc.fillColor('#2563eb').fontSize(14).font('Helvetica-Bold').text('Automated Source Export & Site Audit', { align: 'center' });
    doc.moveDown(1);
    
    doc.fillColor('#334155').fontSize(10).font('Helvetica');
    doc.text(`Export Timestamp: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })} (IST)`);
    doc.text(`Target URL/Page: ${currentUrl || 'Unknown'}`);
    doc.text(`Classification: HIGHLY CONFIDENTIAL - INTERNAL USE ONLY`);
    doc.moveDown(2);

    // Embed Screenshot
    if (screenshot) {
      try {
        // screenshot is base64 string, potentially with "data:image/png;base64," header
        const base64Data = screenshot.replace(/^data:image\/\w+;base64,/, "");
        const imgBuffer = Buffer.from(base64Data, 'base64');
        
        doc.fillColor('#0f172a').fontSize(12).font('Helvetica-Bold').text('CURRENT PAGE VISUAL SCREENSHOT', { underline: true });
        doc.moveDown(1);
        doc.image(imgBuffer, {
          fit: [500, 350],
          align: 'center',
          valign: 'center'
        });
      } catch (imgErr) {
        console.error('Failed to embed screenshot in PDF:', imgErr);
        doc.fillColor('#dc2626').text('Failed to capture and embed screenshot.');
      }
    } else {
      doc.text('No visual screenshot provided.');
    }

    // --- PAGE 2: DIRECTORY TREE STRUCTURE ---
    doc.addPage();
    doc.fillColor('#0f172a').fontSize(16).font('Helvetica-Bold').text('PROJECT ARCHITECTURE & SITEMAP', { underline: true });
    doc.moveDown(1);

    const rootDir = process.cwd();
    const tree = generateDirectoryTree(rootDir);
    
    doc.fillColor('#1e293b').fontSize(8).font('Courier').text(tree);

    // --- PAGES 3+: SOURCE CODE FILES ---
    const sourceFiles = getSourceFiles(rootDir);
    
    for (const filePath of sourceFiles) {
      const relativePath = path.relative(rootDir, filePath).replace(/\\/g, '/');
      let content = '';
      try {
        content = fs.readFileSync(filePath, 'utf8');
      } catch (readErr) {
        console.error(`Failed to read file: ${filePath}`, readErr);
        continue;
      }

      doc.addPage();
      
      // Header for the file
      doc.fillColor('#0f172a').fontSize(12).font('Helvetica-Bold').text(`FILE: ${relativePath}`);
      doc.fillColor('#64748b').fontSize(8).font('Helvetica').text(`Path: ${filePath} | Size: ${content.length} bytes`);
      doc.moveDown(1);
      
      // Horizontal Rule
      doc.strokeColor('#cbd5e1').lineWidth(1).moveTo(50, doc.y).lineTo(550, doc.y).stroke();
      doc.moveDown(1);
      
      // Code content
      doc.fillColor('#1e293b').fontSize(7.5).font('Courier').text(content, {
        width: 500,
        align: 'left',
        lineGap: 2
      });
    }

    // End Document
    doc.end();

    const pdfBuffer = await pdfPromise;

    return new Response(new Uint8Array(pdfBuffer), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Nandini_Source_Export.pdf"',
      },
    });

  } catch (err: any) {
    console.error('Error generating source PDF:', err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

function getSourceFiles(rootDir: string): string[] {
  const filesList: string[] = [];
  
  // 1. Gather config files from root directory
  const rootConfigs = [
    'package.json',
    'tsconfig.json',
    'next.config.mjs',
    'postcss.config.mjs',
    'eslint.config.mjs'
  ];
  for (const cfg of rootConfigs) {
    const p = path.join(rootDir, cfg);
    if (fs.existsSync(p) && fs.statSync(p).isFile()) {
      filesList.push(p);
    }
  }

  // 2. Recursively gather files under src/
  const srcDir = path.join(rootDir, 'src');
  if (fs.existsSync(srcDir)) {
    recurse(srcDir);
  }

  function recurse(dir: string) {
    const list = fs.readdirSync(dir);
    for (const item of list) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        if (item !== 'node_modules' && !item.startsWith('.')) {
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
  }

  return filesList;
}

function generateDirectoryTree(rootDir: string): string {
  let output = 'project-root/\n';
  
  function recurse(dir: string, prefix = '') {
    const list = fs.readdirSync(dir);
    
    // Sort directories first, then files
    const sorted = list.map(item => {
      const p = path.join(dir, item);
      let isDir = false;
      try {
        isDir = fs.statSync(p).isDirectory();
      } catch (e) {}
      return { name: item, isDir, path: p };
    }).sort((a, b) => {
      if (a.isDir && !b.isDir) return -1;
      if (!a.isDir && b.isDir) return 1;
      return a.name.localeCompare(b.name);
    });

    // Filter out unwanted items
    const filtered = sorted.filter(item => {
      if (item.name === 'node_modules' || item.name === '.next' || item.name === '.git') return false;
      if (item.name.startsWith('.')) return false;
      if (item.name === 'package-lock.json') return false;
      return true;
    });

    filtered.forEach((item, index) => {
      const isLast = index === filtered.length - 1;
      const marker = isLast ? '└── ' : '├── ';
      
      output += `${prefix}${marker}${item.name}${item.isDir ? '/' : ''}\n`;
      
      if (item.isDir) {
        recurse(item.path, prefix + (isLast ? '    ' : '│   '));
      }
    });
  }

  try {
    recurse(rootDir);
  } catch (e) {
    output += `Error reading tree: ${e}\n`;
  }
  return output;
}
