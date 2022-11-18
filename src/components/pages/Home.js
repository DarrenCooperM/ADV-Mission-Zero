import Navbar from "../home/Navbar.js";
import HomeHeader from "../home/HomeHeaderSection";
import HomeContent from "../home/HomeContentSection";
import HomeFooter from "../home/HomeFooter";
import ModalContent from "../home/HomeModalContent";
import { useState } from "react";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      {openModal && <ModalContent closeModal={setOpenModal} />}
      <Navbar setOpenModal={setOpenModal} />
      <HomeHeader />
      <HomeContent />
      <HomeFooter />
    </>
  );
}
