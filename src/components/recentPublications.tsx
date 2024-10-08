import Image from 'next/image';
import Link from 'next/link';

const RecentPublications = () => {
  return (
    <section className="bg-[#f0f8ff] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#0066b3]">Publicações Recentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt={`Publicação ${item}`}
                width={400}
                height={200}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-[#0066b3]">Título da Publicação {item}</h3>
                <p className="text-gray-600 mb-4">
                  Breve descrição da publicação sobre materiais cerâmicos. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <Link
                  href="#"
                  className="text-[#0066b3] font-semibold hover:text-[#0055a3] transition-colors">
                  Leia mais
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPublications;
