import { Sql } from 'postgres';

export type Artist = {
  id: number;
  name: string;
  url: string;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE artists (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      name varchar(50) NOT NULL,
      url varchar(100)
    )
  `;
}

export async function down(sql: Sql) {
  await sql`
    DROP TABLE artists`;
}
