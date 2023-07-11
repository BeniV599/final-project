import { cache } from 'react';
import { Artist } from '../migrations/1687527033-createTableArtists';
import { sql } from './connect';

export const getArtists = cache(async () => {
  const artists = await sql<Artist[]>`
    SELECT * FROM artists
    `;
  return [...artists];
});

export const getArtistById = cache(async (id: number) => {
  const [artist] = await sql<Artist[]>`
    SELECT
      *
    FROM
      artists
    WHERE
      id = ${id}
  `;
  return artist;
});

export const createArtist = cache(async (name: string, url: string) => {
  const [artist] = await sql<Artist[]>`
      INSERT INTO artists
        (name, url)
      VALUES
        (${name},${url})
      RETURNING *
    `;

  return artist;
});

export const updateArtistById = cache(
  async (id: number, name: string, url: string) => {
    const [artist] = await sql<Artist[]>`
      UPDATE artists
      SET
        name = ${name},
        url = ${url},
      WHERE
        id = ${id}
        RETURNING *
    `;

    return artist;
  },
);

export const deleteArtistById = cache(async (id: number) => {
  const [artist] = await sql<Artist[]>`
    DELETE FROM
      artists
    WHERE
      id = ${id}
    RETURNING *
  `;
  return artist;
});
