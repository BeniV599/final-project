import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getArtistById } from '../../../database/artists';

type Props = {
  params: {
    artistId: string;
  };
};

export default async function Artist(props: Props) {
  const dnbArtist = await getArtistById(Number(props.params.artistId));

  console.log(props);

  if (!dnbArtist) {
    notFound();
  }
  return (
    <main>
      <h1>{dnbArtist.name}</h1>
      <Image
        src={`/images/${dnbArtist.name}.jpg`}
        width={840}
        height={840}
        alt={dnbArtist.name}
      />
      <Link href={dnbArtist.soundcloud}>Soundcloud Link</Link>
      <p>{dnbArtist.description}</p>
    </main>
  );
}
