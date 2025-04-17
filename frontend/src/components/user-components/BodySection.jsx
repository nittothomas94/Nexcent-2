import UnlockSection from './UnlockSection';
import Achievements from './Achievements';
import CalendarSection from './CalendarSection';
import ClientsSection from './ClientsSection';
import CommunityUpdatesSection from './CommunityUpdatesSection';

const BodySection = () => {
  return (
    <section className="bg-white">
      <UnlockSection />
      <Achievements />
      <CalendarSection />
      <ClientsSection />
      <CommunityUpdatesSection />
    </section>
  );
};

export default BodySection;
