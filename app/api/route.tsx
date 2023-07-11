import { NextResponse } from 'next/server';

export function GET(): NextResponse<{ albums: string }> {
  return NextResponse.json({ albums: '/api/albums' });
}
