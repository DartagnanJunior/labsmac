import labsmacLogo from '@/assets/labsmacLogo.svg';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

export function Navbar() {
  return (
    <div className="border-b bg-white shadow-sm">
      <div className="container mx-auto flex items-center h-16 px-4">
        <a
          href="/"
          className="mr-4">
          <img
            src={labsmacLogo}
            alt="LabSMaC Logo"
            className="h-12"
          />{' '}
        </a>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className={cn('navigation-menu-link')}>
                Página Inicial
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/sobre"
                className={cn('navigation-menu-link')}>
                Sobre
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/contato"
                className={cn('navigation-menu-link')}>
                Contato
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
