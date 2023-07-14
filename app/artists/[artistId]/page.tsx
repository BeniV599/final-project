import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getArtistById } from '../../../database/artists';
import SoundCloud from '../../../public/SoundCloud.png';

type Props = {
  params: {
    artistId: string;
  };
};

export default async function Artist(props: Props) {
  const dnbArtist = await getArtistById(Number(props.params.artistId));

  if (!dnbArtist) {
    notFound();
  }

  return (
    <main>
      <h1>{dnbArtist.name}</h1>
      <div className="container">
        <Image
          className="profile"
          src={`/images/${dnbArtist.name}.jpg`}
          width={420}
          height={420}
          alt={dnbArtist.name}
        />
        <div className="description">
          {dnbArtist.description}
          <div className="link">
            Their SoundCloud page:
            <a href={dnbArtist.soundcloud}>
              <Image
                className="linkLogo"
                src={SoundCloud}
                width={69}
                height={69}
                alt="SoundCloud logo"
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
