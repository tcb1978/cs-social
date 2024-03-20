import { User } from '../../services/users/getUsers';
import type { FC, ReactElement } from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../vendor/shadcn/Card';
import { Avatar, AvatarFallback, AvatarImage } from '../vendor/shadcn/Avatar';
import Link from 'next/link';
import { Button } from '../vendor/shadcn/Button';
import { NavigationHref } from '@/configs/navigation';

interface UsersListProps {
  users: User[];
}

const UsersList: FC<UsersListProps> = ({
  users
}): ReactElement => {

  return (
    <ul className='flex flex-wrap gap-4 justify-center'>
      {users.map((user) => (
        <li key={user.id} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4'>
          <Card>
            <CardHeader className='flex gap-4 flex-row items-center'>
              <Avatar>
                <AvatarImage src='' alt='@shadcn' />
                <AvatarFallback className='text-white bg-pink-500'>
                  {user.name.first[0]}{user.name.last[0]}
                </AvatarFallback>
              </Avatar>
              <CardTitle>{user.name.first} {user.name.last}</CardTitle>
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
                  pathname: `${NavigationHref.Users}/${user.id}`,
                  query: {
                    firstName: user.name.first,
                    lastName: user.name.last,
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
  );
};

export default UsersList;