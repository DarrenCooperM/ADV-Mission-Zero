import Navbar from "../home/Navbar.js";
import HomeHeader from "../home/HomeHeaderSection";
import HomeContent from "../home/HomeContentSection";
import HomeFooter from "../home/HomeFooter";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeHeader />
      <HomeContent />
      <HomeFooter />
    </>
  );
}
