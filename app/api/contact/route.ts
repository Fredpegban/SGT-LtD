
import { NextResponse } from 'next/server';
import { validateContactSubmission } from '@/lib/validators';
import { saveSubmission } from '@/lib/storage';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate
    const validation = validateContactSubmission(body);
    if (!validation.valid) {
      return NextResponse.json({ ok: false, error: validation.error }, { status: 400 });
    }

    // Save
    const result = await saveSubmission(body);
    if (!result.success) {
      return NextResponse.json({ ok: false, error: result.error }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ ok: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
