import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLine,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Btn from "../assets/bt.png";

const Bar = styled.div`
  background-color: #0072bc;
`;

const Title = styled.div`
  color: #0072bc;
  text-decoration: underline;
  text-underline-offset: 8px;
  margin-bottom: 1rem;
`;

const Footer = () => {
  return (
    <div className="z-30 w-full bottom-0 left-0">
      <div className="grid grid-row-3">
        <Bar className="p-4 px-10 text-white grid grid-cols-2 justify-between items-center">
          <p>ข้อมูลข่าวสาร</p>

          <div className="flex justify-end space-x-4">
            <input
              type="text"
              id="email-adress-icon"
              className="justify-end block p-2 pl-10  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
            <button>ค้นหา</button>
          </div>
        </Bar>
        <div className="p-4 grid grid-cols-3 bg-white">
          <div className="text-gray-500 p-4 text-md md:text-sm">
            <Title className="font-bold">ช่วยเหลือ</Title>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <ul>
                  <li className="list-none">วิธีการสั่งซื้อสินค้า</li>
                  <li className="list-none">วิธีการชำระเงิน</li>
                  <li className="list-none">วิธีการจัดส่งสินค้า</li>
                  <li className="list-none">สถานะคำสั่งซื้อ</li>
                  <li className="list-none">การเปลี่ยนและคืนสินค้า</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="list-none">บัญชีของฉัน</li>
                  <li className="list-none">ข้อมูลตารางไซส์</li>
                  <li className="list-none">นโยบายความเป็นส่วนตัว</li>
                  <li className="list-none">ข้อกำหนดและเงื่อนไข</li>
                  <li className="list-none">คำถามที่พบบ่อย</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-gray-500 p-4 text-center">
            <Title className="font-bold">เกี่ยวกับเรา</Title>
            <ul>
              <li className="list-none text-left">สาขาของ AIIZ ที่ใกล้คุณ</li>
              <li className="list-none text-left">ติดต่อเรา</li>
            </ul>
            <div className="h-1/2 flex text-center justify-center space-x-2 text-5xl items-end md:text-3xl">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faLine} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
          <div className="flex justify-end p-4 items-center">
            <img className="h-16 w-16" src={Btn} alt="" />
          </div>
        </div>
        <Bar className="text-white text-center p-4 text-sm">
          บริษัท รีโน (ประเทศไทย) จำกัด สำนักงานใหญ่ 23/65-68, 23/33-35,
          23/30-31, 23/36-39 ซ.ศูนย์วิจัย-พระราม9 <br></br>
          ถ.พระราม9 แขวงบางกะปิ เขตห้วยขวาง กรุงเทพมหานคร. 10320
        </Bar>
      </div>
    </div>
  );
};

export default Footer;
