import { Post, getPosts } from '@/services/posts/getPosts';
import { getUsers } from '@/services/users/getUsers';
import Posts from '@/components/posts/Posts';
import type { FC } from 'react';
import { User } from '../../services/users/getUsers';
import { NavigationLabel } from '@/configs/navigation';
import NothingFound from '@/components/NothingFound';

const Page: FC = async (): Promise<JSX.Element> => {
  const posts: Post[] = await getPosts();
  const users: User[] = await getUsers();

  if (!posts || posts.length === 0) {
    return (
      <NothingFound
        label={NavigationLabel.Posts}
        messageing='No posts found'
      />
    );
  }

  return (
    <Posts posts={posts} users={users} />
  );
};

export default Page;