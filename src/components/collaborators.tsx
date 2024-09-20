import { collaborators } from '@/data/collaborators';
import React from 'react';

const Collaborators: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#1E3A8A]">Nossos Colaboradores</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {collaborators.map((collaborator, index) => (
            <div
              key={index}
              className="flex flex-col items-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-[#BFDBFE] shadow-lg">
                <img
                  src={collaborator.image}
                  alt={collaborator.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-center text-[#1F2937]">{collaborator.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collaborators;
