
export interface ContactSubmission {
  name: string;
  email: string;
  company: string;
  role: string;
  solution: string;
  description: string;
  timeline: string;
  budget: string;
  stage: string;
  metrics?: string;
  constraints?: string;
  attachments?: string;
  consent: string;
}

export function validateContactSubmission(data: any): { valid: boolean; error?: string } {
  const requiredFields = ['name', 'email', 'company', 'role', 'solution', 'description', 'timeline', 'budget', 'stage', 'consent'];
  
  for (const field of requiredFields) {
    if (!data[field]) {
      return { valid: false, error: `${field} is required.` };
    }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return { valid: false, error: 'Invalid email address.' };
  }

  return { valid: true };
}
