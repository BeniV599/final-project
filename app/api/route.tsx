import { NextResponse } from 'next/server';

export function GET(): NextResponse<{ music: string }> {
  return NextResponse.json({ music: '/api/music' });
}
