import { FaUsers, FaRegBuilding, FaPeopleCarry } from 'react-icons/fa';

const Achievements = () => {
  return (
    <div className="bg-[#F5F7FA] py-12 px-4 md:px-24 text-center">
      <h3 className="text-[#4CAF4F] text-sm font-semibold mb-2">
        Helping a local business reinvent itself
      </h3>
      <p className="text-gray-600 mb-8 text-sm">
        We reached here with our hard work and dedication
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <FaUsers className="text-[#4CAF4F] text-3xl mx-auto mb-2" />
          <h4 className="text-lg font-bold text-gray-900">2,245,341</h4>
          <p className="text-sm text-gray-600">Members</p>
        </div>
        <div>
          <FaRegBuilding className="text-[#4CAF4F] text-3xl mx-auto mb-2" />
          <h4 className="text-lg font-bold text-gray-900">46,328</h4>
          <p className="text-sm text-gray-600">Clubs</p>
        </div>
        <div>
          <FaPeopleCarry className="text-[#4CAF4F] text-3xl mx-auto mb-2" />
          <h4 className="text-lg font-bold text-gray-900">828,867</h4>
          <p className="text-sm text-gray-600">Event Bookings</p>
        </div>
        <div>
          <FaUsers className="text-[#4CAF4F] text-3xl mx-auto mb-2" />
          <h4 className="text-lg font-bold text-gray-900">1,926,436</h4>
          <p className="text-sm text-gray-600">Payments</p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
