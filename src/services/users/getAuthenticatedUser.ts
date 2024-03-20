import fs from 'fs';
import path from 'path';
import { User } from './getUsers';

const authenticatedUserFilePath = path.join(process.cwd(), 'public', 'data', 'mockauthenticateduser.json');

export function getAuthenticatedUser(): Promise<User | null> {
  try {
    const userData = fs.readFileSync(authenticatedUserFilePath, 'utf-8');
    const user = JSON.parse(userData);

    return user[0];

  } catch (error) {
    console.error('There was an error while reading the authenticated user data:', error);
    throw error;
  }
}