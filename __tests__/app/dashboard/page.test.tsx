import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from '../../../src/app/dashboard/page';
import { getAuthenticatedUser } from '@/services/users/getAuthenticatedUser';

jest.mock('@/services/users/getAuthenticatedUser');

describe('Page Component', () => {
  it('should render the AuthenticatedUserCard component when an authenticated user is present', async () => {
    (getAuthenticatedUser as unknown as jest.Mock<Promise<any>>).mockResolvedValue({
      username: 'testUser',
      name: { first: 'Test', last: 'User' },
    });

    render(<Page />);

    const authenticatedUserCard = await screen.findByText(/Welcome Test User/i);
    expect(authenticatedUserCard).toBeInTheDocument();
  });

  it('should render a login prompt when no authenticated user is present', async () => {
    (getAuthenticatedUser as jest.Mock<Promise<any>>).mockResolvedValue(null);

    render(<Page />);

    const loginPrompt = await screen.findByText(/Please login to continue/i);
    expect(loginPrompt).toBeInTheDocument();
  });

  it('should render the Navigation component', () => {
    (getAuthenticatedUser as jest.Mock<Promise<any>>).mockResolvedValue(null);

    render(<Page />);

    const navigationComponent = screen.getByText(/Landing/i);
    expect(navigationComponent).toBeInTheDocument();
  });
});
