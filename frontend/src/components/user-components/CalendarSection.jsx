const CalendarSection = () => {
  return (
    <div className="w-full bg-white px-4 md:px-48 flex flex-col md:flex-row items-center gap-10">
      {/* Left image */}
      <img
        src="/images/pana.png"
        alt="Calendar Illustration"
        className="w-[421.53px] max-w-md md:h-[433px]"
      />

      {/* Right content */}
      <div className="max-w-xl md:w-[661px] ">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          How to design your site footer like we did
        </h2>
        <p className="text-gray-600 mb-6">
          Donec at ipsum luctus, iaculis risus a, ultricies elit. Nam tempor,
          neque nec tincidunt molestie, risus massa malesuada ex, a sollicitudin
          est elit ut magna. Donec eu lobortis nisi. In hac habitasse platea
          dictumst. Vivamus luctus lacus at porta tempor. In sed turpis risus.
          In a enim varius, semper est vitae, blandit nisl. In tincidunt nunc
          nec volutpat convallis.
        </p>
        <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default CalendarSection;
