// import { cookies } from 'next/headers';
// import { NextRequest, NextResponse } from 'next/server';
// import { z } from 'zod';
// import { getValidSessionByToken } from '../../../database/sessions';

// export type Track = {
//   data: {
//     id: number;
//     title: string;
//     artist: string;
//     preview: string;
//   }[];
// };

// export type Error = {
//   error: string;
// };

// type MusicResponseBodyGet = { music: Track[] } | Error;
// type MusicResponseBodyPost = { track: Track } | Error;

// const trackSchema = z.object({
//   title: z.string(),
//   artist: z.string(),
//   preview: z.string().optional(),
// });

// export async function GET(
//   request: NextRequest,
// ): Promise<NextResponse<MusicResponseBodyGet>> {
//   const { searchParams } = new URL(request.url);

//   // 1. get the token from the cookie
//   const sessionTokenCookie = cookies().get('sessionToken');

//   // 2. check if the token has a valid session
//   const session =
//     sessionTokenCookie &&
//     (await getValidSessionByToken(sessionTokenCookie.value));

//   console.log('This comes from the API', session);

//   if (!session) {
//     return NextResponse.json(
//       {
//         error: 'session token is not valid',
//       },
//       { status: 401 },
//     );
//   }

//   const limit = Number(searchParams.get('limit'));
//   const offset = Number(searchParams.get('offset'));

//   if (!limit || !offset) {
//     return NextResponse.json(
//       {
//         error: 'Limit and Offset need to be passed as params',
//       },
//       { status: 400 },
//     );
//   }

//   // query the database to get all the animals only if a valid session token is passed
//   const music = await getMusicWithLimitAndOffsetBySessionToken(
//     limit,
//     offset,
//     sessionTokenCookie.value,
//   );

//   return NextResponse.json({ music: music });
// }

// export async function POST(
//   request: NextRequest,
// ): Promise<NextResponse<MusicResponseBodyPost>> {
//   const body = await request.json();

//   // zod please verify the body matches my schema
//   const result = trackSchema.safeParse(body);

//   if (!result.success) {
//     // zod send you details about the error
//     // console.log(result.error);
//     return NextResponse.json(
//       {
//         error: 'The data is incomplete',
//       },
//       { status: 400 },
//     );
//   }
//   // query the database to get all the animals
//   const track = await createTrack(
//     result.data.title,
//     result.data.artist,
//     result.data.preview,
//   );

//   if (!track) {
//     // zod send you details about the error
//     // console.log(result.error);
//     return NextResponse.json(
//       {
//         error: 'Error creating the new animal',
//       },
//       { status: 500 },
//     );
//   }

//   return NextResponse.json({
//     track: track,
//   });
// }
