const CommunityUpdatesSection = () => {
  return (
    <div className="bg-gray-50 px-4 md:px-16 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
        Caring is the new marketing
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md p-6 rounded-lg">
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
        <div className="bg-white shadow-md p-6 rounded-lg">
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
        <div className="bg-white shadow-md p-6 rounded-lg">
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
