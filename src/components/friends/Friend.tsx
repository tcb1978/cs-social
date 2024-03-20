import type { FC } from 'react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/vendor/shadcn/BreadCrumb';
import { NavigationHref, NavigationLabel } from '@/configs/navigation';
import UserCard from '@/components/users/UserCard';
import { Friend as ThisFriend } from '../../services/friends/getFriends';

interface FriendProps {
  friend: ThisFriend;
}

const Friend: FC<FriendProps> = async ({
  friend,
}): Promise<JSX.Element> => {

  const { name: { first, last } } = friend;

  return (
    <>
      <Breadcrumb className='p-4'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={`${NavigationHref.Dashboard}`}>
              {NavigationLabel.Dashboard}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`${NavigationHref.Friends}`}>
              {NavigationLabel.Friends}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{first} {last}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <main className="flex min-h-screen flex-col items-center gap-4 p-24">
        <h1 className="text-6xl font-bold">{first} {last}</h1>
        <section className='w-full flex justify-center gap-4 flex-wrap'>
          {friend ? (
            <UserCard user={friend} />
          ) : null}
        </section>
      </main>
    </>
  );
};

export default Friend;