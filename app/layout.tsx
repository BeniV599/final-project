import './globals.scss';
import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { ReactNode } from 'react';
import { getUserBySessionToken } from '../database/users';
import { Logout } from './Logout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'DnB Nation: Dedication',
    template: '%s | Home',
  },
  description:
    "Welcome to my final project! You are looking into what progress I've done, starting with linking artists' music sites",
};

type Props = {
  children: ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get('sessionToken');

  const user = !sessionToken?.value
    ? undefined
    : await getUserBySessionToken(sessionToken.value);

  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <div>
            <Link href="/">Home</Link>
            <Link href="/artists">Artists</Link>
          </div>
          <div>
            {user ? (
              <div className="logOut">
                <div className="userName">{user.username}</div>
                <Logout />
              </div>
            ) : (
              <>
                <Link className="logIn" href="/login">
                  Log In
                </Link>
                <Link className="register" href="/register">
                  Register
                </Link>
              </>
            )}
          </div>
        </header>
        {children}
        <footer>@ 2023 Dnb Nation: Dedication</footer>
      </body>
    </html>
  );
}
