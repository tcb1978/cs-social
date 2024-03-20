import { Friend } from '../../services/friends/getFriends';
import type { FC } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/vendor/shadcn/BreadCrumb';
import { NavigationHref, NavigationLabel } from '@/configs/navigation';
import { Button } from '@/components/vendor/shadcn/Button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/vendor/shadcn/Card';

import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/vendor/shadcn/Avatar';

interface FriendProps {
  friends: Friend[];
}

const Friends: FC<FriendProps> = ({
  friends,
}): JSX.Element => {

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
        </BreadcrumbList>
      </Breadcrumb>
      <main className="flex min-h-screen flex-col items-center gap-4 p-24">
        <h1 className="text-6xl font-bold">{NavigationLabel.Friends}</h1>
        <section className='w-full flex justify-center gap-4'>
          <ul className='flex flex-col md:flex-wrap md:flex-row gap-4 justify-center'>
            {friends.map((friend) => (
              <li key={friend.id} className='sm:w-full md:w-1/4'>
                <Card>
                  <CardHeader className='flex gap-4 flex-row items-center'>
                    <Avatar>
                      <AvatarImage src='' alt='@shadcn' />
                      <AvatarFallback className='text-white bg-pink-500'>
                        {friend.name.first[0]}{friend.name.last[0]}
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle>{friend.name.first} {friend.name.last}</CardTitle>
                  </CardHeader>
                  <CardContent className='flex flex-col gap-1'>
                    <p>Username: {friend.username}</p>
                    <p>Email: {friend.email}</p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href={{
                        pathname: `${NavigationHref.Friends}/${friend.id}`,
                        query: {
                          firstName: friend.name.first,
                          lastName: friend.name.last,
                          userName: friend.username,
                        }
                      }}
                    >
                      <Button>View</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
};

export default Friends;