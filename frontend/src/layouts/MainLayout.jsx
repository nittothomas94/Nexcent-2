// # includes Navbar + Footer + children
// # page-level wrappers

//
import Navbar from '../components/user-components/Navbar';
import Footer from '../components/user-components/Footer';
import HeroSection from '../components/user-components/HeroSection';
import ClientsSection from '../components/user-components/ClientsSection';
import CommunitySection from '../components/user-components/CommunitySection';
import BodySection from '../components/user-components/BodySection';
//
const MainLayout = () => {
  return (
    <>
      <Navbar />

      {/* Home Sction */}
      <div className="flex flex-col gap-[40px]">
        <HeroSection />
        <ClientsSection />
        <CommunitySection />
        <BodySection />
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
