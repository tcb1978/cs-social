import fs from 'fs';
import path from 'path';

const friendsFilePath = path.join(process.cwd(), 'public', 'data', 'friends.json');

export function getFriends(): Promise<Friend[]> {
  try {
    const friendsData = fs.readFileSync(friendsFilePath, 'utf-8');

    return JSON.parse(friendsData);

  } catch (error) {
    console.error('There was an error while reading the friends data:', error);
    throw error;
  }
}

export interface Friend {
    id: number;
    username: string;
    name: {
      first: string;
      last: string;
    };
    email: string;
    avatarURL: string;
}