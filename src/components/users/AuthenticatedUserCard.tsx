import type { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../vendor/shadcn/Card';
import { Avatar, AvatarFallback, AvatarImage } from '../vendor/shadcn/Avatar';
import { User } from '@/services/users/getUsers';

interface AuthenticatedUserCardProps {
  authenticatedUser: User;
}

const AuthenticatedUserCard: FC<AuthenticatedUserCardProps> = ({
  authenticatedUser,
}) => {
  return (
    <Card className='w-auto mt-4 flex flex-col items-center justify-center md:flex-row md:items-start p-4'>
      <CardHeader className='flex gap-4 flex-row items-center'>
        <Avatar>
          <AvatarImage
            src={authenticatedUser.avatarURL}
            alt={authenticatedUser.username}
          />
          <AvatarFallback className='text-white bg-pink-500'>
            {authenticatedUser.name.first[0]}{authenticatedUser.name.last[0]}
          </AvatarFallback>
        </Avatar>
        <CardTitle>
          Welcome {authenticatedUser.name.first} {authenticatedUser.name.last}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {authenticatedUser.username ? (
          <p>Username: {authenticatedUser.username}</p>
        ) : (
          null
        )}
        {authenticatedUser.email ? (
          <p>Email: <a className='hover:text-pink-500' href={`mailto:${authenticatedUser.email}`}>{authenticatedUser.email}</a></p>
        ) : (
          null
        )}
        {authenticatedUser.bio ? (
          <p>Bio: {authenticatedUser.bio}</p>
        ) : (
          null
        )}
        {authenticatedUser.website ? (
          <p>Website: <a className='hover:text-pink-500' href={authenticatedUser.website} target="_blank">{authenticatedUser.website}</a></p>
        ) : (
          null
        )}
        {authenticatedUser.company ? (
          <p>Company: {authenticatedUser.company}</p>
        ) : (
          null
        )}
        {authenticatedUser.location ? (
          <address className='text-sm'>
            {authenticatedUser.location?.street}<br />
            {authenticatedUser.location?.suite}, {authenticatedUser.location?.city} {''}
            {authenticatedUser.location?.zipcode}<br />
          </address>
        ) : (
          null
        )}
      </CardContent>
    </Card>
  );
};

export default AuthenticatedUserCard;