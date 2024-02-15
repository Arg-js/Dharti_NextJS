import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Drawer as ShadcnDrawer,
  DrawerContent,
  DrawerTrigger,
} from '@/components/ui/drawer';
import NavbarItems from './NavbarItems';

export function Drawer() {
  return (
    <ShadcnDrawer>
      <DrawerTrigger asChild>
        <Button variant='outline'>
          <div>
            {new Array(3).fill(null).map((_, index) => (
              <hr key={index} className='mb-1 w-5 border border-gray-300' />
            ))}
          </div>
        </Button>
      </DrawerTrigger>
      <DrawerContent className='bg-primary_background_200'>
        <NavbarItems />
      </DrawerContent>
    </ShadcnDrawer>
  );
}
