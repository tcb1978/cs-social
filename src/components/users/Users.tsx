import type { FC } from 'react';
import { User } from '../../services/users/getUsers';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/vendor/shadcn/BreadCrumb';
import UsersList from '@/components/users/UsersList';
import { NavigationHref, NavigationLabel } from '@/configs/navigation';

interface UsersProps {
  users: User[];
}

const Users: FC<UsersProps> = async ({
  users,
}): Promise<JSX.Element> => {

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
        </BreadcrumbList>
      </Breadcrumb>
      <main className="flex min-h-screen flex-col items-center gap-4 p-24">
        <h1 className="text-6xl font-bold">{NavigationLabel.Users}</h1>
        <section className='w-full flex justify-center gap-4 flex-wrap'>
          <UsersList users={users} />
        </section>
      </main>
    </>
  );
};

export default Users;