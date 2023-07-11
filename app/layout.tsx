import './globals.scss';
import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { ReactNode } from 'react';
// import { useDarkMode } from 'usehooks-ts';
import { getUserBySessionToken } from '../database/users';
import { Logout } from './Logout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'BCV Final Project',
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
  // const { isDarkMode, toggle, enable, disable } = useDarkMode();

  const user = !sessionToken?.value
    ? undefined
    : await getUserBySessionToken(sessionToken.value);

  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="link">
          <div>
            <Link href="/">Home</Link>
            <Link href="/artists">Artists</Link>
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
          {/* <p>Current theme: {isDarkMode ? 'dark' : 'light'}</p>
          <button onClick={toggle}>Toggle</button>
          <button onClick={enable}>Enable</button>
          <button onClick={disable}>Disable</button> */}
        </header>
        {children}
        <footer>@ 2023 BCV Final Project</footer>
      </body>
    </html>
  );
}
