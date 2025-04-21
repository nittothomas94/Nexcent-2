import { FaUsers, FaBuilding, FaHandsHelping } from 'react-icons/fa';

const cards = [
  {
    icon: <FaUsers className="text-[#195e39] text-2xl" />,
    title: 'Membership Organisations',
    description:
      'Our membership management software provides full automation of membership renewals and payments',
  },
  {
    icon: <FaBuilding className="text-[#195e39] text-2xl" />,
    title: 'National Associations',
    description:
      'Our membership management software provides full automation of membership renewals and payments',
  },
  {
    icon: <FaHandsHelping className="text-[#195e39] text-2xl" />,
    title: 'Clubs And Groups',
    description:
      'Our membership management software provides full automation of membership renewals and payments',
  },
];

const Frame4Section = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 pb-16 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm text-center w-70 hover:shadow-md transition hover:bg-green-500  hover:text-white cursor-pointer"
          >
            <div className="bg-[#ebf3ed] w-12 h-12 flex items-center justify-center rounded-md mx-auto mb-5">
              {card.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2 ">{card.title}</h3>
            <p className="text-sm leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frame4Section;
