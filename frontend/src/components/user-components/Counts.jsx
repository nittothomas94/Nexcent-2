import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaUsers, FaRegBuilding, FaPeopleCarry } from 'react-icons/fa';

const Counts = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const stats = [
    {
      icon: <FaUsers className="text-[#4CAF4F] text-3xl mx-auto mb-2" />,
      end: 2245341,
      label: 'Members',
    },
    {
      icon: <FaRegBuilding className="text-[#4CAF4F] text-3xl mx-auto mb-2" />,
      end: 46328,
      label: 'Clubs',
    },
    {
      icon: <FaPeopleCarry className="text-[#4CAF4F] text-3xl mx-auto mb-2" />,
      end: 828867,
      label: 'Event Bookings',
    },
    {
      icon: <FaUsers className="text-[#4CAF4F] text-3xl mx-auto mb-2" />,
      end: 1926436,
      label: 'Payments',
    },
  ];

  return (
    <div ref={ref} className="grid grid-cols-2 gap-6 text-center">
      {stats.map((stat, index) => (
        <div key={index} className="w-[255px] h-[60px] flex gap-[16px]">
          <i className="size-[48px]">{stat.icon}</i>
          <div className="">
            <h4 className="text-lg font-bold text-gray-900">
              {inView ? <CountUp end={stat.end} duration={4} /> : 0}
            </h4>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Counts;
