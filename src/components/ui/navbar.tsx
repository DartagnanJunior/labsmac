import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import labsmacLogo from '@/assets/labsmacLogo.svg';

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4">
        <a
          href="/"
          className="flex items-center space-x-2">
          <img
            src={labsmacLogo}
            alt="LabSMaC Logo"
            className="h-12"
          />
        </a>
        <div className="ml-auto flex items-center space-x-4">
          <div className="hidden md:flex md:items-center md:gap-5 md:text-sm">
            <a
              href="/"
              className="transition-colors hover:text-foreground/80">
              Home
            </a>
            <a
              href="/products"
              className="transition-colors hover:text-foreground/80">
              Produtos
            </a>
            <a
              href="/about"
              className="transition-colors hover:text-foreground/80">
              Sobre
            </a>
            <a
              href="/contact"
              className="transition-colors hover:text-foreground/80">
              Contato
            </a>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus:ring-2 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[250px]">
              <nav className="flex flex-col gap-4 mt-6">
                <a
                  href="/"
                  className="block px-2 py-1 text-lg">
                  Home
                </a>
                <a
                  href="/products"
                  className="block px-2 py-1 text-lg">
                  Produtos
                </a>
                <a
                  href="/about"
                  className="block px-2 py-1 text-lg">
                  Sobre
                </a>
                <a
                  href="/contact"
                  className="block px-2 py-1 text-lg">
                  Contato
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
