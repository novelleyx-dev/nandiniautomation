import fs from 'fs';
import path from 'path';

const contentDirectory = path.join(process.cwd(), 'content');

export interface CMSMethodology {
  step: string;
  desc: string;
}

export interface CMSFAQ {
  q: string;
  a: string;
}

export interface CMSService {
  slug: string;
  title: string;
  overview: string;
  industries?: string[];
  brands?: string[];
  methodology?: CMSMethodology[];
  benefits?: string;
  faqs?: CMSFAQ[];
}

export function getEntries(type: string): CMSService[] {
  const directory = path.join(contentDirectory, type);
  
  if (!fs.existsSync(directory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(directory);
  const entries = fileNames
    .filter(fileName => fileName.endsWith('.json'))
    .map(fileName => {
      const slug = fileName.replace(/\.json$/, '');
      const fullPath = path.join(directory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const data = JSON.parse(fileContents);
      
      return {
        slug,
        ...data
      };
    });
    
  return entries as CMSService[];
}

export function getEntryBySlug(type: string, slug: string): CMSService | null {
  const fullPath = path.join(contentDirectory, type, `${slug}.json`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const data = JSON.parse(fileContents);
  
  return {
    slug,
    ...data
  } as CMSService;
}
