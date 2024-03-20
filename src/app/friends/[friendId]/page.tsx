import type { FC } from 'react';
import { getFriends } from '@/services/friends/getFriends';
import { NavigationLabel } from '@/configs/navigation';
import Friend from '@/components/friends/Friend';
import NothingFound from '@/components/NothingFound';

type QueryProps = {
  params: {
    friendId: string;
  },
};

const Page: FC<QueryProps> = async ({
  params: {
    friendId,
  },
}): Promise<JSX.Element> => {
  const friends = await getFriends();
  const friend = friends.find((friend) => Number(friend.id) === Number(friendId));

  if (!friend) {
    return (
      <NothingFound
        label={NavigationLabel.Friends}
        messageing='No friend found'
      />
    );
  }

  return (
    <Friend friend={friend} />
  );
};

export default Page;