import Image from 'next/image';
import Link from 'next/link';
import { getArtists } from '../../database/artists';

console.log(getArtists);

export const fetchArtists = {
  title: 'Drum and Bass Artists',
  description:
    'Check out some of my favorite DnB producers from all around the world!',
};

export default async function Artists() {
  const artists = await getArtists();

  return (
    <main>
      <h1>My favorite D&B producers</h1>
      <div className="artistContainer">
        {artists.map((artist) => {
          return (
            <div className="artistImages" key={`artist-div-${artist.id}`}>
              <Link href={`/artists/${artist.id}`}>
                <Image
                  className="artistName"
                  src={`/images/${artist.name}.jpg`}
                  width={300}
                  height={300}
                  alt={artist.name}
                />
              </Link>
              <h2>{artist.name}</h2>
            </div>
          );
        })}
      </div>
    </main>
  );
}
