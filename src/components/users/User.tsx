import type { FC } from 'react';
import { User as ThisUser } from '../../services/users/getUsers';
import UserCard from '@/components/users/UserCard';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/vendor/shadcn/BreadCrumb';
import { NavigationHref, NavigationLabel } from '@/configs/navigation';

interface UserProps {
  user: ThisUser;
}

const User: FC<UserProps> = async ({
  user,
}) => {

  const { name: { first, last } } = user;

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
            <BreadcrumbLink href={`${NavigationHref.Users}`}>
              {NavigationLabel.Users}
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
        <section className='w-full'>
          {user ? (
            <UserCard user={user} />
          ) : null}
        </section>
      </main>
    </>
  );
};

export default User;