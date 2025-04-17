const CustomersSection = () => {
  return (
    <div className="bg-white px-4 md:px-16 py-12">
      {/* Tesla image */}
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src="/images/tesla.png"
          alt="Tesla Logo"
          className="w-32 h-32 object-contain"
        />
        <div>
          <p className="text-gray-700 mb-4">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ut. Lorem ipsum dolor
            sit amet. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Maecenas sit amet lacinia arcu, non dictum justo. Donec
            consectetur tortor non porta ultrices. Aliquam erat volutpat. Etiam
            tristique leo sed metus sollicitudin, sed varius risus interdum.
          </p>
          <p className="text-gray-800 font-semibold">Tim Smith</p>
          <p className="text-sm text-gray-500 mb-4">
            British Dragon Boat Racing Association
          </p>

          {/* Icons (Dummy images for now) */}
          <div className="flex gap-4 items-center mb-4">
            <img src="/icons/brand1.png" className="w-6" alt="Brand 1" />
            <img src="/icons/brand2.png" className="w-6" alt="Brand 2" />
            <img src="/icons/brand3.png" className="w-6" alt="Brand 3" />
            <img src="/icons/brand4.png" className="w-6" alt="Brand 4" />
            <img src="/icons/brand5.png" className="w-6" alt="Brand 5" />
          </div>

          <p className="text-green-600 font-semibold cursor-pointer">
            Meet all customers →
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomersSection;
