import { Post } from '../../services/posts/getPosts';
import { User } from '../../services/users/getUsers';
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
import Link from 'next/link';

interface PostsProps {
  posts: Post[];
  users: User[];
}

const Posts: FC<PostsProps> = async ({
  posts,
  users,
}) => {

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
            <BreadcrumbLink href={`${NavigationHref.Posts}`}>
              {NavigationLabel.Posts}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <main className="flex min-h-screen flex-col items-center gap-4 p-24">
        <h1 className="text-6xl font-bold">{NavigationLabel.Posts}</h1>
        <section>
          <ul className='flex flex-col gap-4'>
            {posts.map((post) => {
              const { userId, content } = post;
              const user = users.find((user) => Number(userId) === Number(user.id));

              return (
                <li key={Math.random()} className='border rounded-md p-4 flex gap-4 items-center justify-between'>
                  <blockquote>
                    <p>{content}</p>
                    <footer>
                      <cite>{user?.name.first} {user?.name.last}</cite>
                    </footer>
                  </blockquote>
                  <Link
                    href={{
                      pathname: `${NavigationHref.Posts}/${user?.id}`,
                      query: {
                        firstName: user?.name.first,
                        lastName: user?.name.last,
                        post: user?.id,
                      }
                    }}
                  >
                    <Button className='w-60'>View {user?.name.first} {user?.name.last} Posts</Button>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
};

export default Posts;