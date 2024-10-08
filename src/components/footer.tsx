import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0066b3] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                <a href="mailto:contato@labsmac.com">contato@labsmac.com</a>
              </p>
              <p className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                <a href="tel:+551234567890">(12) 3456-7890</a>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Parceiros</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#f0f8ff]">
                  Universidade XYZ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#f0f8ff]">
                  Instituto ABC
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#f0f8ff]">
                  Empresa 123
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Localização</h3>
            <p className="flex items-start">
              <MapPin className="mr-2 h-5 w-5 mt-1" />
              Rua do Laboratório, 123 - Bairro Científico, Cidade Inovação - UF, 12345-678
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-[#0055a3] pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} LabSMAC. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
