import fs from 'fs';
import path from 'path';

const postsFilePath = path.join(process.cwd(), 'public', 'data', 'posts.json');

export function getPosts(postId?: string): Promise<Post[]> {
  try {
    const postsData = fs.readFileSync(postsFilePath, 'utf-8'); // because! single threaded application, this is synchronous
    const posts = JSON.parse(postsData);

    if (!posts) {
      throw new Error("No posts found");
    }

    if (postId) {
      return posts.filter((post: Post) => Number(post.userId) === Number(postId));
    }

    return posts;

  } catch (error) {
    console.error("There was an error while reading the posts data:", error);
    throw error;
  }
}

export interface Post {
  [x: string]: string;
  page: string;
}
