import { NavigationHref, NavigationLabel } from '@/configs/navigation';
import Link from 'next/link';
import type { FC } from 'react';
import { Button } from './vendor/shadcn/Button';

interface NothingFoundProps {
  label: string;
  messageing: string;
}

const NothingFound: FC<NothingFoundProps> = ({
  label,
  messageing
}) => {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24">
      <h1 className="text-6xl font-bold">
        {label}
      </h1>
      <p>{messageing}</p>
      <Link
        href={{
          pathname: `${NavigationHref.Dashboard}`,
        }}
      >
        <Button>
          {NavigationLabel.Dashboard}
        </Button>
      </Link>
    </main>
  );
};

export default NothingFound;