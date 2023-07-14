<h1 align="center">My Personal Artists Dedication Website</h1>


## Preparation & Plan to Prioritize Features for Final Project

My final project would be a dedicating few of my favorite music producers showcase site, as an aim to shout out artists who influenced me and many others from around the world and the whole music genre throughout the years.

### Features:

- The homepage features links to each section and options for signing up and logging in.
 - User authentication 
 - User authorization (API only allows the owner of items to modify or delete them)
- Logged-in users are allowed to view and access the Artists page of few of my favorite music producers; whereas logged-out users cannot view or access said page without registration.

### Planning:

- Wireframing and prototyping using [Figma](https://www.figma.com/file/BoZFQhr77DZUiJXXN56pRH/My-Personal-Artists-Dedication-Webpage?type=design&mode=design&t=aeJNBureDcpTdrDB-0)
- Database schema design using [drawSQL](https://drawsql.app/teams/databased-1/diagrams/final-project)

## Technologies

<img height="25" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="javascript logo"/> <img height="25" src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" alt="next js logo"/> <img height="25" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="react logo"/> <br /> <img height="25" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript logo"/> <img height="25" src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white" alt="sass logo"/> <img height="25" src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="postgres logo"/>

## Screenshots

#### Final look

#### Prototyping

#### Database schema

## Setting up the project

1. Clone the repository
   ```
   git clone https://github.com/BeniV599/final-project.git
   cd next-ecommerce-store
   ```
2. Install dependencies using 
   ```
   pnpm install
   ````
4. Setup postgres database
5. Create a file called .env in the project root directory and paste the following, changing to your own username, password and database:
   ```
   PGHOST=localhost
   PGUSERNAME=<your username>
   PGPASSWORD=<your password>
   PGDATABASE=<your database>
   ```
5. Connect to postgres database and run either:
   - `psql -U <user name> <database name>` on windows and macOS
   - `sudo -u <user name> psql -U <user name> <database name>` on Linux

6. Run application
   ```
   pnpm dev
   ```
   Open http://localhost:3000 on browser.

## Deploying on Vercel

This project is deployed using vercel, in order to do so:

1. Create an account on [vercel](https://vercel.com/dashboard)
2. Create a postgres storage in vercel and select frankfurt
3. Create a project in vercel and import your version of this repository
4. Overwrite the install command (found in project general setting) with `pnpm install && pnpm migrate up`
5. Connect storage with project in Project > Storage > Connect
