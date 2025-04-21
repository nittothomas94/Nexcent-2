import Marquee from 'react-fast-marquee';

const clients = [
  '/icons/figma-logo.png',
  '/icons/spacios-jet.png',
  '/icons/two-boxes.png',
  '/icons/logo-ipsum.png',
  '/icons/jilabi.png',
  '/icons/spring.png',
  '/icons/two-boxes.png',
];

const ClientsSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-20 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-500">
        Our Clients
      </h2>
      <p className="text-gray-500 mt-2">
        We have been working with some Fortune 500+ clients
      </p>

      {/* Marquee starts here */}
      <Marquee
        speed={50} // speed of the scroll
        pauseOnHover={true} // stop scroll when user hovers
        gradient={false} // no gradient fade at edges
        className="mt-12"
      >
        {clients.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Client ${index + 1}`}
            className="h-8 mx-6 grayscale hover:grayscale-0 transition duration-300 md:px-15"
          />
        ))}
      </Marquee>
    </section>
  );
};

export default ClientsSection;
