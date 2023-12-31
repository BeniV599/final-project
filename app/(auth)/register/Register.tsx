'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { RegisterResponseBodyPost } from '../../api/(auth)/register/route';
import styles from './Register.module.scss';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  async function register() {
    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });

    const data: RegisterResponseBodyPost = await response.json();

    if ('error' in data) {
      setError(data.error);
      return;
    }

    console.log(data.user);
    router.push(`/`);
    // we may have in the future revalidatePath()
    router.refresh();
  }

  return (
    <form className="registerPage" onSubmit={(event) => event.preventDefault()}>
      <label>
        New username
        <br />
        <input
          className="input"
          value={username}
          onChange={(event) => setUsername(event.currentTarget.value)}
        />
      </label>
      <br />
      <label>
        New password
        <br />
        <input
          className="input"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
        />
      </label>
      <br />
      <button className={styles.button} onClick={async () => await register()}>
        Sign Up!
      </button>
      {error !== '' && <div className={styles.error}>{error}</div>}
    </form>
  );
}
