import Navbar from "../home/Navbar.js";
import HomeHeader from "../home/HomeHeaderSection";
import HomeContent from "../home/HomeContentSection";
import HomeFooter from "../home/HomeFooter";
import ModalContent from "../home/HomeModalContent";
import Chatbot from "../home/ChatBot.js";
import { useState } from "react";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [search, setSearch] = useState("");
  return (
    <>
      {openModal && <ModalContent closeModal={setOpenModal} />}
      <Navbar setOpenModal={setOpenModal} />
      <HomeHeader setSearch={setSearch} />
      <HomeContent search={search} />
      <HomeFooter />
      <Chatbot />
    </>
  );
}
