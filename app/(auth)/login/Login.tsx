'use client';

import { Route } from 'next';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { getSafeReturnToPath } from '../../../util/validation';
import { LoginResponseBodyPost } from '../../api/(auth)/login/route';
import styles from './Login.module.scss';

type Props = { returnTo?: string | string[] };

export default function Login(props: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  async function login() {
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });

    const data: LoginResponseBodyPost = await response.json();

    if ('error' in data) {
      setError(data.error);
      console.log(data.error);
      return;
    }

    router.push(getSafeReturnToPath(props.returnTo) || (`/` as Route));
    // we may have in the future revalidatePath()
    router.refresh();
  }

  return (
    <form className="loginPage" onSubmit={(event) => event.preventDefault()}>
      <label>
        <input
          className="input"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.currentTarget.value)}
        />
      </label>
      <br />
      <label>
        <input
          className="input"
          placeholder="Password"
          value={password}
          type="password"
          onChange={(event) => setPassword(event.currentTarget.value)}
        />
      </label>
      <br />
      <button className={styles.button} onClick={async () => await login()}>
        Log In
      </button>
      {error !== '' && <div className={styles.error}>{error}</div>}
    </form>
  );
}
