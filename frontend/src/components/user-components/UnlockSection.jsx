const UnlockSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:gap-30 px-4 md:px-[144px]">
      <img
        src="/images/login.jpg"
        alt="Unlock"
        className="w-[300px] md:w-[400px] md:h-[433px]"
      />
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
          The unseen of spending three years at Pixelgrade
        </h2>
        <p className="text-gray-600 mb-6 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis.
        </p>
        <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default UnlockSection;
