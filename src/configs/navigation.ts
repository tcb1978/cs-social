export enum NavigationLabel {
  Landing = "Landing",
  Dashboard = "Dashboard",
  Users = "Users",
  User = "User",
  Friends = "Friends",
  Friend = "Friend",
  Posts = "Posts",
}

export enum NavigationHref {
  Landing = "/",
  Dashboard = "/dashboard",
  Users = "/users",
  Friends = "/friends",
  Posts = "/posts",
}

export const navigationConfig = {
  navigation: [
    {
      id: 1,
      label: NavigationLabel.Users,
      href: NavigationHref.Users,
    },
    {
      id: 2,
      label: NavigationLabel.Friends,
      href: NavigationHref.Friends,
    },
    {
      id: 3,
      label: NavigationLabel.Posts,
      href: NavigationHref.Posts,
    },
  ],
};
