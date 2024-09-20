import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1E3A8A] text-white py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Localização</h3>
            <p>Rua da Ciência, 123 - Cidade Universitária</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Contato</h3>
            <p>contato@laboratorio.com | (11) 1234-5678</p>
            <a
              href="/contact"
              className="text-[#BFDBFE] hover:underline">
              Página de Contato
            </a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Laboratório de Pesquisa. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
