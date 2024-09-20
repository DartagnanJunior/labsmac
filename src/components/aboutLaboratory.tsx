import React from 'react';

const AboutLaboratory: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-[#BFDBFE]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-[#1E3A8A]">Sobre o Laboratório</h2>
        <p className="text-lg mb-4 text-[#1F2937]">
          Nosso laboratório é dedicado à pesquisa de ponta em diversas áreas científicas. Com uma equipe multidisciplinar de pesquisadores
          altamente qualificados, estamos comprometidos em impulsionar o avanço do conhecimento e desenvolver soluções inovadoras para os
          desafios globais.
        </p>
        <p className="text-lg text-[#1F2937]">
          Equipado com tecnologia de última geração, nosso laboratório oferece um ambiente propício para descobertas revolucionárias.
          Colaboramos com instituições de renome mundial e estamos sempre em busca de parcerias que possam ampliar o alcance e o impacto de
          nossas pesquisas.
        </p>
      </div>
    </section>
  );
};

export default AboutLaboratory;
