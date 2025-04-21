const CommunityUpdatesSection = () => {
  return (
    <div className="px-4 md:px-16 py-12 flex flex-col gap-[16px] items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center gap-[8px] md:w-[1110px] md:h:[124px]">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          Caring is the new marketing
        </h2>
        <p className="text-gray-400 w-[628px] text-center">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md p-6 md:size-[368px] rounded-lg">
          <img
            src="/images/lap-using-by-girl.png"
            alt="Post 1"
            className="rounded-md mb-4 w-full object-cover h-48"
          />
          <p className="text-gray-800 font-semibold mb-2">
            Creating Streamlined Safeguarding Processes with OneRen
          </p>
          <p className="text-green-500 text-sm font-semibold cursor-pointer">
            Readmore →
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md p-6 rounded-lg md:size-[368px]">
          <img
            src="/images/lapOnTable.png"
            alt="Post 2"
            className="rounded-md mb-4 w-full object-cover h-48"
          />
          <p className="text-gray-800 font-semibold mb-2">
            What are your safeguarding responsibilities and how can you manage
            them?
          </p>
          <p className="text-green-500 text-sm font-semibold cursor-pointer">
            Readmore →
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md p-6 rounded-lg md:size-[368px]">
          <img
            src="/images/learingLap.png"
            alt="Post 3"
            className="rounded-md mb-4 w-full object-cover h-48"
          />
          <p className="text-gray-800 font-semibold mb-2">
            Revamping the Membership Model with Triathlon Australia
          </p>
          <p className="text-green-500 text-sm font-semibold cursor-pointer">
            Readmore →
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommunityUpdatesSection;
