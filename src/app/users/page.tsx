import type { FC } from 'react';
import { User } from '../../services/users/getUsers';
import { getUsers } from '@/services/users/getUsers';
import { NavigationLabel } from '@/configs/navigation';
import Users from '@/components/users/Users';
import NothingFound from '@/components/NothingFound';

const Page: FC = async (): Promise<JSX.Element> => {
  const users: User[] = await getUsers();

  if (!users) {
    return (
      <NothingFound
        label={NavigationLabel.Users}
        messageing='No users found'
      />
    );
  }

  return (
    <Users users={users} />
  );
};

export default Page;