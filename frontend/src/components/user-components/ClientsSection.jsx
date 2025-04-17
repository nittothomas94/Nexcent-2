const clients = [
  '/client-logo-1.svg',
  '/client-logo-2.svg',
  '/client-logo-3.svg',
  '/client-logo-4.svg',
  '/client-logo-5.svg',
  '/client-logo-6.svg',
]; // Replace with your actual logo paths

const ClientsSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-20 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
        Our Clients
      </h2>
      <p className="text-gray-500 mt-2">
        We have been working with some Fortune 500+ clients
      </p>

      <div className="flex flex-wrap justify-center gap-10 mt-12">
        {clients.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Client ${index + 1}`}
            className="h-8 grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
