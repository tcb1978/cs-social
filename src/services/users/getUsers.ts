import fs from 'fs';
import path from 'path';
import { Friend } from '../friends/getFriends';
import { Post } from '../posts/getPosts';



const usersFilePath = path.join(process.cwd(), 'public', 'data', 'users.json');

export function getUsers(): Promise<User[]> {
  try {
    const usersData = fs.readFileSync(usersFilePath, 'utf-8');
    const data = JSON.parse(usersData);

    return data;

  } catch (error) {
    console.error('There was an error while reading the users data:', error);
    throw error;
  }
}

export interface User {
  id: number;
  username: string;
  name: {
    first: string;
    last: string;
  };
  email: string;
  avatarURL: string;
  friends?: Friend[];
  posts?: Post[];
  friendsCount?: number;
  postsCount?: number;
  createdAt?: string;
  updatedAt?: string;
  location?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  },
  bio?: string;
  website?: string;
  company?: string;
  isActive?: boolean;
  phone?: string;
}
