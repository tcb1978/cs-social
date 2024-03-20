import type { FC } from 'react';
import NothingFound from '@/components/NothingFound';
import Post from '@/components/posts/Post';
import { NavigationLabel } from '@/configs/navigation';
import { getPosts } from '@/services/posts/getPosts';

type QueryProps = {
  params: {
    postId: string;
  },
  searchParams?: {
    firstName?: string;
    lastName?: string;
    userName?: string;
    pageNumber?: string;
  };
};

const Page: FC<QueryProps> = async ({
  params: {
    postId,
  },
  searchParams
}) => {
  const firstName = searchParams?.firstName || '';
  const lastName = searchParams?.lastName || '';
  const posts = await getPosts(postId);

  if (!posts) {
    return (
      <NothingFound
        label={NavigationLabel.Posts}
        messageing='No post found'
      />
    );
  }
  return (
    <Post posts={posts} firstName={firstName} lastName={lastName} />
  );
};

export default Page;