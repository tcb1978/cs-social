import type { FC } from 'react';
import NothingFound from '@/components/NothingFound';
import User from '@/components/users/User';
import { NavigationLabel } from '@/configs/navigation';
import { getUsers } from '@/services/users/getUsers';

type QueryProps = {
  params: {
    userId: string;
  },
};

const Page: FC<QueryProps> = async ({
  params: {
    userId,
  },
}): Promise<JSX.Element> => {
  const users = await getUsers();
  const user = users.find((user) => String(user.id) === String(userId));

  if (!user) {
    return (
      <NothingFound
        label={NavigationLabel.User}
        messageing='No user found'
      />
    );
  }

  return (
    <User user={user} />
  );
};

export default Page;