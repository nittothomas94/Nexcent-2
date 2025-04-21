import { FaUsers, FaRegBuilding, FaPeopleCarry } from 'react-icons/fa';
import Counts from './Counts';

const Achievements = () => {
  const stats = [
    { label: 'Members', value: 2245341 },
    { label: 'Clubs', value: 46328 },
    { label: 'Event Bookings', value: 828867 },
    { label: 'Payments', value: 1926436 },
  ];

  return (
    <div className="bg-[#F5F7FA] flex md:gap-16 py-12 px-5 md:px-[164px] md:py-[64px] text-center">
      <div className="md:w-[540px] flex items-start md:pl-15 flex-col">
        <h3 className="text-sm text-gray-500 font-semibold mb-2 md:text-2xl">
          Helping a local
        </h3>
        <h3 className="text-[#4CAF4F] text-sm font-bold mb-2 md:text-2xl md:tracking-[5px]">
          business reinvent itself
        </h3>
        <p className="text-gray-600 mb-8 text-sm">
          We reached here with our hard work and dedication
        </p>
      </div>
      <Counts />
    </div>
  );
};

export default Achievements;
