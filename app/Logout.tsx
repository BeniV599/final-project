'use client';

import { useRouter } from 'next/navigation';
import { logout } from './(auth)/logout/actions';
import styles from './Logout.module.scss';

export function Logout() {
  const router = useRouter();
  return (
    <form>
      <button
        className={styles.button}
        formAction={async () => {
          await logout();
          router.refresh();
        }}
      >
        Log Out
      </button>
    </form>
  );
}
