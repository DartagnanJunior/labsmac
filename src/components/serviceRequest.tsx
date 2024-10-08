const ServiceRequest = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#0066b3]">Solicite Nossos Serviços</h2>
        <form className="max-w-2xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Nome"
            className="w-full px-4 py-2 rounded-md border border-[#0066b3] focus:outline-none focus:ring-2 focus:ring-[#0066b3]"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="w-full px-4 py-2 rounded-md border border-[#0066b3] focus:outline-none focus:ring-2 focus:ring-[#0066b3]"
          />
          <textarea
            placeholder="Descreva o serviço que você precisa"
            rows={4}
            className="w-full px-4 py-2 rounded-md border border-[#0066b3] focus:outline-none focus:ring-2 focus:ring-[#0066b3]"></textarea>
          <button
            type="submit"
            className="w-full bg-[#0066b3] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#0055a3] transition-colors">
            Enviar Solicitação
          </button>
        </form>
      </div>
    </section>
  );
};

export default ServiceRequest;
