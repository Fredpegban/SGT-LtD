import fs from 'fs';
import path from 'path';

// Fix: Use type assertion for process to access cwd() in Node.js environment where types might be restricted
const DATA_PATH = path.join((process as any).cwd(), 'data', 'submissions.json');

export async function saveSubmission(submission: any) {
  // In a real production environment, use a database.
  // This simulates local file storage as requested.
  try {
    const dir = path.dirname(DATA_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    let submissions = [];
    if (fs.existsSync(DATA_PATH)) {
      const fileContent = fs.readFileSync(DATA_PATH, 'utf-8');
      submissions = JSON.parse(fileContent);
    }

    const newSubmission = {
      ...submission,
      id: Date.now(),
      createdAt: new Date().toISOString()
    };

    submissions.push(newSubmission);
    fs.writeFileSync(DATA_PATH, JSON.stringify(submissions, null, 2));
    
    return { success: true };
  } catch (error) {
    console.error('Storage error:', error);
    return { success: false, error: 'Failed to save submission.' };
  }
}