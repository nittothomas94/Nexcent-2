const CustomersSection = () => {
  return (
    <div className="bg-[#F5F7FA] px-4 md:px-16">
      {/* Tesla image */}
      <div className="flex flex-col md:flex-row gap-[78px] md:py-[20px] md:px-[144px]">
        <img
          src="/images/tesla.png"
          alt="Tesla Logo"
          className="size-[326px]"
        />
        <div className="flex flex-col justify-between md:h-[324px] pb-2">
          <p className="text-[#717171] mb-4 md:w-[748px]">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <p className="text-green-400 font-semibold">Tim Smith</p>
          <p className="text-sm text-gray-500 mb-4">
            British Dragon Boat Racing Association
          </p>

          <div className="flex flex-col md:flex-row gap-[32px] items-center">
            {/* Icons (Dummy images for now) */}
            <div className="flex gap-4 items-center mb-4">
              <img
                src="/icons/figma-logo.png"
                className="size-[48px]"
                alt="Brand 1"
              />
              <img
                src="/icons/spacios-jet.png"
                className="size-[48px]"
                alt="Brand 2"
              />
              <img
                src="/icons/two-boxes.png"
                className="size-[48px]"
                alt="Brand 3"
              />
              <img
                src="/icons/logo-ipsum.png"
                className="size-[48px]"
                alt="Brand 4"
              />
              <img
                src="/icons/jilabi.png"
                className="size-[48px]"
                alt="Brand 5"
              />
              <img
                src="/icons/spring.png"
                className="size-[48px]"
                alt="Brand 5"
              />
            </div>

            <p className="text-green-600 font-semibold cursor-pointer md:pb-4">
              Meet all customers →
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersSection;
