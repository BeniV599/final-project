import { NextResponse } from 'next/server';

export function GET(): NextResponse<{ artists: string }> {
  return NextResponse.json({ artists: '/api/artists' });
}
