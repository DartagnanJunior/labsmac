import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="border-b bg-[#1E3A8A] text-white">
      <div className="flex h-16 items-center px-4 md:px-8">
        <a
          href="/"
          className="flex items-center space-x-2">
          <span className="text-lg font-bold">LabsMac</span>
        </a>
        <div className="ml-auto flex items-center space-x-4">
          <div className="hidden md:flex md:items-center md:gap-8 md:text-sm">
            <a
              href="/"
              className="transition-colors hover:text-[#BFDBFE]">
              Home
            </a>
            <a
              href="/research"
              className="transition-colors hover:text-[#BFDBFE]">
              Pesquisas
            </a>
            <a
              href="/team"
              className="transition-colors hover:text-[#BFDBFE]">
              Equipe
            </a>
            <a
              href="/contact"
              className="transition-colors hover:text-[#BFDBFE]">
              Contato
            </a>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-[#3B82F6] focus:ring-2 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[250px] bg-[#1E3A8A] text-white">
              <nav className="flex flex-col gap-4 mt-6">
                <a
                  href="/"
                  className="block px-2 py-1 text-lg hover:text-[#BFDBFE]">
                  Home
                </a>
                <a
                  href="/research"
                  className="block px-2 py-1 text-lg hover:text-[#BFDBFE]">
                  Pesquisas
                </a>
                <a
                  href="/team"
                  className="block px-2 py-1 text-lg hover:text-[#BFDBFE]">
                  Equipe
                </a>
                <a
                  href="/contact"
                  className="block px-2 py-1 text-lg hover:text-[#BFDBFE]">
                  Contato
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
