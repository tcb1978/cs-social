'use client';

import { User } from '../../services/users/getUsers';
import type { FC } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../vendor/shadcn/Card';
import { Avatar, AvatarFallback, AvatarImage } from '../vendor/shadcn/Avatar';
import Link from 'next/link';
import { NavigationHref, NavigationLabel } from '@/configs/navigation';
import { Button } from '../vendor/shadcn/Button';


interface UserCardProps {
  user: User;
}

const UserCard: FC<UserCardProps> = ({
  user
}) => {
  return (
    <Card className='w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4'>
      <CardHeader className='flex gap-4 flex-row items-center'>
        <Avatar>
          <AvatarImage src='' alt='@shadcn' />
          {/* without a valid src, the fallback will be used */}
          <AvatarFallback className='text-white bg-pink-500'>
            {user.name.first[0] && user.name.last[0] ? (
              <span>
                {user.name.first[0]}{user.name.last[0]}
              </span>
            ) : null}
          </AvatarFallback>
        </Avatar>
        <CardTitle>
          {user.name.first ? (
            <p>{user.name.first}</p>
          ) : null}
          {user.name.last ? (
            <p>{user.name.last}</p>
          ) : null}
        </CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col gap-1'>
        {user.username ? (
          <p>Username: {user.username}</p>
        ) : null}
        {user.email ? (
          <p>Email: {user.email}</p>
        ) : null}
      </CardContent>
      <CardFooter>
        <Link
          href={{
            pathname: `${NavigationHref.Posts}/${user.id}`,
            query: {
              firstName: user.name.first,
              lastName: user.name.last,
              pageNumber: 1,
            }
          }}
        >
          <Button>{NavigationLabel.Posts}</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default UserCard;