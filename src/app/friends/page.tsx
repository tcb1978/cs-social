import type { FC } from 'react';
import { getFriends } from '@/services/friends/getFriends';
import Friends from '@/components/friends/Friends';
import { NavigationLabel } from '@/configs/navigation';
import NothingFound from '@/components/NothingFound';

const Page: FC = async (): Promise<JSX.Element> => {
  const friends = await getFriends();

  if (!friends) {
    return (
      <NothingFound
        label={NavigationLabel.Friends}
        messageing='No friends found'
      />
    );
  }

  return (
    <Friends friends={friends} />
  );
};

export default Page;