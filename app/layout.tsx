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
    default: 'BCV Final Project',
    template: '%s | Final Project',
  },
  description: 'Generated by create next app',
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
        <header className="link">
          <div>
            <Link href="/">Home</Link>
            <Link href="/music">Music</Link>
          </div>
          <div>
            {user ? (
              <>
                <div>{user.username}</div>
                <Logout />
              </>
            ) : (
              <>
                <Link href="/register">Sign Up!</Link>
                <Link href="/login">Log In</Link>
              </>
            )}
          </div>
        </header>
        {children}
        <footer>@ 2023 BCV Final Project</footer>
      </body>
    </html>
  );
}