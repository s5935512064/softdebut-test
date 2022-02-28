import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import banner from "../assets/DT_banner_TH_9.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import FCarousel from "../components/FCarousel";
import SCarousel from "../components/SCarousel";

const MainContainer = styled.div`
  width: 100vw;

  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
`;

const Main = () => {
  return (
    <MainContainer>
      <img src={banner} />
      <Nav />
      <div className="px-16 py-4">
        <div className="flex flex-row justify-between">
          <div className="flex justify-start">
            <input
              type="text"
              id="email-adress-icon"
              className="block p-2 pl-10  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ค้นหา"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button>สมัครสมาชิก</button>
            <button>เข้าสู่ระบบ</button>
            <button>
              ตระกร้าสินค้า
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
          </div>
        </div>
      </div>
      <FCarousel />
      <SCarousel />

      <Footer />
    </MainContainer>
  );
};

export default Main;
