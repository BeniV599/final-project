import Image from 'next/image';
import Link from 'next/link';
import { getArtists } from '../../database/artists';

console.log(getArtists);

export const dynamic = 'force-dynamic';

export const fetchArtists = {
  title: 'Drum and Bass Artists',
  description:
    'Check out some of my favorite DnB producers from all around the world!',
};

export default async function Artists() {
  const artists = await getArtists();
  return (
    <main>
      <h1>Welcome to my soon-to-be-not-so-blank page, y'all! ;3</h1>
      {artists.map((artist) => {
        return (
          <div key={`artist-div-${artist.id}`}>
            <h2>{artist.name}</h2>
            <Link href={`/artists/${artist.id}`}>
              <Image
                src={`/images/${artist.name}.jpg`}
                width={300}
                height={300}
                alt={artist.name}
              />
            </Link>
          </div>
        );
      })}
    </main>
  );
}
