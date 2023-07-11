import { Sql } from 'postgres';

export const artists = [
  {
    id: 1,
    name: 'Artificial Intelligence',
    url: 'https://soundcloud.com/artificialintelligence',
  },
  { id: 2, name: 'Alix Perez', url: 'https://soundcloud.com/alixperez' },
  { id: 3, name: 'Camo & Krooked', url: 'https://soundcloud.com/camokrooked' },
  { id: 4, name: 'IMANU', url: 'https://soundcloud.com/imanumusic' },
  { id: 5, name: 'Machinedrum', url: 'https://soundcloud.com/MACHINEDRUM' },
  { id: 6, name: 'Mefjus', url: 'https://soundcloud.com/mefjus' },
  { id: 7, name: 'Noisia', url: 'https://soundcloud.com/noisia' },
  { id: 8, name: 'Satl', url: 'https://soundcloud.com/satl' },
  { id: 9, name: 'Technimatic', url: 'https://soundcloud.com/technimatic' },
];

export async function up(sql: Sql) {
  for (const artist of artists) {
    await sql`
    INSERT INTO artists
      (name, url)
    VALUES
      (${artist.name}, ${artist.url})
  `;
  }
}

export async function down(sql: Sql) {
  for (const artist of artists) {
    await sql`
      DELETE FROM artists WHERE id = ${artist.id}
  `;
  }
}
