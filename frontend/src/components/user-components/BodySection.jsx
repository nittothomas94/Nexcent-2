import UnlockSection from './UnlockSection';
import Achievements from './Achievements';
import CalendarSection from './CalendarSection';
import CustomersSection from './CustomersSection';
import CommunityUpdatesSection from './CommunityUpdatesSection';

const BodySection = () => {
  return (
    <section className="bg-white flex flex-col gap-[48px]">
      <UnlockSection />
      <Achievements />
      <CalendarSection />
      <CustomersSection />
      <CommunityUpdatesSection />
    </section>
  );
};

export default BodySection;
