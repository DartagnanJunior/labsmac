import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="bg-[#0066b3] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center">
              <Image
                src="/images/labsmacLogo.png"
                alt="Labsmac logo"
                width={150}
                height={50}
              />
            </Link>
          </div>

          <div className="ml-auto flex items-center space-x-4">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="text-white hover:bg-[#0055a3] px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link
                  href="/sobre-nos"
                  className="text-white hover:bg-[#0055a3] px-3 py-2 rounded-md text-sm font-medium">
                  Sobre Nós
                </Link>
                <Link
                  href="/colaboradores"
                  className="text-white hover:bg-[#0055a3] px-3 py-2 rounded-md text-sm font-medium">
                  Colaboradores
                </Link>
                <Link
                  href="/servicos"
                  className="text-white hover:bg-[#0055a3] px-3 py-2 rounded-md text-sm font-medium">
                  Serviços
                </Link>
                <Link
                  href="/equipamentos"
                  className="text-white hover:bg-[#0055a3] px-3 py-2 rounded-md text-sm font-medium">
                  Equipamentos
                </Link>
                <Link
                  href="/artigos"
                  className="text-white hover:bg-[#0055a3] px-3 py-2 rounded-md text-sm font-medium">
                  Artigos
                </Link>
              </div>
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
                className="w-[250px] bg-[#0055a3] text-white">
                <nav className="flex flex-col gap-4 mt-6">
                  <Link
                    href="/"
                    className="text-white hover:bg-[#0055a3] px-3 py-2 rounded-md text-sm font-medium">
                    Home
                  </Link>
                  <Link
                    href="/sobre-nos"
                    className="text-white hover:bg-[#0055a3] px-3 py-2 rounded-md text-sm font-medium">
                    Sobre Nós
                  </Link>
                  <Link
                    href="/colaboradores"
                    className="text-white hover:bg-[#0055a3] px-3 py-2 rounded-md text-sm font-medium">
                    Colaboradores
                  </Link>
                  <Link
                    href="/servicos"
                    className="text-white hover:bg-[#0055a3] px-3 py-2 rounded-md text-sm font-medium">
                    Serviços
                  </Link>
                  <Link
                    href="/equipamentos"
                    className="text-white hover:bg-[#0055a3] px-3 py-2 rounded-md text-sm font-medium">
                    Equipamentos
                  </Link>
                  <Link
                    href="/artigos"
                    className="text-white hover:bg-[#0055a3] px-3 py-2 rounded-md text-sm font-medium">
                    Artigos
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
