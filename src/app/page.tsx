import { Button } from '@/components/vendor/shadcn/Button';
import { NavigationHref } from '@/configs/navigation';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Link
          href={{
            pathname: `${NavigationHref.Dashboard}`,
          }}
        >
          <Button>Continue to Dashboard</Button>
        </Link>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <p>Matthew Eldredge</p>
        </div>
      </div>
    </main>
  );
}
