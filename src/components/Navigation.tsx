import type { FC } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from './vendor/shadcn/NavigationMenu';
import { Button } from './vendor/shadcn/Button';
import { navigationConfig } from '../configs/navigation';

const Navigation: FC = ({ }) => {

  const { navigation } = navigationConfig;

  return (
    <NavigationMenu className='pt-4'>
      <NavigationMenuList>
        {navigation.map((item: {
          id: number,
          label: string,
          href: string;
        }) => (
          <NavigationMenuItem key={item.id}>
            <NavigationMenuLink href={item.href}>
              <Button>{item.label}</Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;