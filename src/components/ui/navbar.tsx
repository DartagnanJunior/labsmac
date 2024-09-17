import labsmacLogo from '@/assets/labsmacLogo.svg';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useMediaQuery } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { useEffect, useRef } from 'react';

export function Navbar() {
  const firstInputRef = useRef<HTMLInputElement>(null);
  const isDesktop = useMediaQuery('(min-width:720px)');
  useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, []);

  return isDesktop ? (
    <div className="border-b bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a
          href="/"
          className="mr-4">
          <img
            src={labsmacLogo}
            alt="LabSMaC Logo"
            className="h-12"
          />
        </a>

        <div className="md:flex space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className={cn('navigation-menu-link')}>
                  Inicio
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/sobre"
                  className={cn('navigation-menu-link')}>
                  Sobre nós
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/servicos"
                  className={cn('navigation-menu-link')}>
                  Serviços
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
    </div>
  ) : (
    <div className="border-b bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a
          href="/"
          className="mr-4">
          <img
            src={labsmacLogo}
            alt="LabSMaC Logo"
            className="h-12"
          />
        </a>

        <Sheet>
          <SheetTrigger asChild>
            <Menu />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="sm:max-w-ms">
            <ul className="space-y-4">
              <li>
                <a
                  href="/"
                  className="text-blue-500 hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/indice"
                  className="text-blue-500 hover:underline">
                  Índice
                </a>
              </li>
              <li>
                <a
                  href="/sobre"
                  className="text-blue-500 hover:underline">
                  Sobre nós
                </a>
              </li>
              <li>
                <a
                  href="/contato"
                  className="text-blue-500 hover:underline">
                  Contato
                </a>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
