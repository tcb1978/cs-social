import type { FC } from 'react';
import Navigation from '../../components/Navigation';
import { NavigationLabel } from '@/configs/navigation';
import { getAuthenticatedUser } from '@/services/users/getAuthenticatedUser';
import AuthenticatedUserCard from '@/components/users/AuthenticatedUserCard';

const Page: FC = async (): Promise<JSX.Element> => {

  const authenticatedUser = await getAuthenticatedUser();

  return (
    <div className='flex flex-col items-center justify-between'>
      <main className="flex flex-col items-center justify-between pt-24">
        <h1 className="text-6xl font-bold">{NavigationLabel.Dashboard}</h1>
        {authenticatedUser ? (
          <AuthenticatedUserCard authenticatedUser={authenticatedUser} />
        ) : (
          <p>
            Please login to continue
          </p>
        )}
      </main>
      <Navigation />
    </div>
  );
};

export default Page;