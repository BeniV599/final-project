import { Sql } from 'postgres';

export type Artist = {
  id: number;
  name: string;
  soundcloud: string;
  description: string;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE artists (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      name varchar(50) NOT NULL,
      soundcloud varchar(100) NOT NULL,
      description varchar(5000)
    )
  `;
}

export async function down(sql: Sql) {
  await sql`
    DROP TABLE artists`;
}
