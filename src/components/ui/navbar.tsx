import { useState } from 'react';
import labsmacLogo from '@/assets/labsmacLogo.svg';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
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

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="block md:hidden focus:outline-none"
              onClick={toggleMenu}
              aria-label="Menu">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </DropdownMenuTrigger>

          {isMenuOpen && (
            <div className="fixed inset-0 top-16 bg-white z-50 w-full">
              <DropdownMenuContent className="flex flex-col items-center justify-center w-full">
                <DropdownMenuItem>
                  <a
                    href="/"
                    className="block p-4 w-full text-center border-b">
                    Inicio
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a
                    href="/sobre"
                    className="block p-4 w-full text-center border-b">
                    Sobre nós
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a
                    href="/servicos"
                    className="block p-4 w-full text-center border-b">
                    Serviços
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a
                    href="/contato"
                    className="block p-4 w-full text-center">
                    Contato
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </div>
          )}
        </DropdownMenu>

        <div className="hidden md:flex space-x-6">
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
  );
}
