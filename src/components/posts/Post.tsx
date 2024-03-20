import type { FC } from 'react';
import { Post as ThisPost } from '../../services/posts/getPosts';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/vendor/shadcn/BreadCrumb';
import { NavigationHref, NavigationLabel } from '@/configs/navigation';

interface PostProps {
  posts: ThisPost[];
  firstName: string;
  lastName: string;
}

const Post: FC<PostProps> = async ({
  posts,
  firstName,
  lastName,
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
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{firstName} {lastName}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <main className="flex min-h-screen flex-col items-center gap-4 p-24">
        <h1 className="text-6xl font-bold">{NavigationLabel.Posts} by {firstName} {lastName}</h1>
        <section className='w-full'>
          <ul className='flex space-x-4 flex-wrap gap-4 justify-center'>
            {posts.map((post) => {
              return (
                <li
                  key={Math.random()}
                  className='border rounded-md p-4 w-1/4'
                >
                  <blockquote>
                    <p>{post.content}</p>
                    <footer>
                      <cite>{firstName} {lastName}</cite>
                    </footer>
                  </blockquote>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
};

export default Post;