import { notFound } from 'next/navigation';
import { getUserByUsername } from '../../../database/users';

type Props = {
  params: { username: string };
};

export default async function ProfileUsernamePage({ params }: Props) {
  const user = await getUserByUsername(params.username);

  if (!user) {
    notFound();
  }

  return (
    <>
      <div>ID number: {user.id}</div>
      <div>Username: {user.username}</div>
    </>
  );
}
