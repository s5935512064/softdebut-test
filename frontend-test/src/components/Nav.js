import React from "react";
import logo from "../assets/logo.png";
import styled from "styled-components";

const NavBar = styled.div`
  background-color: #0072bc;
`;

const Nav = () => {
  return (
    <NavBar className="px-16 sm:px-4 py-1 text-white">
      <div className="flex flex-row justify-between items-center mx-auto ">
        <a href="/">
          <img className="mr-3 h-14" src={logo} alt="" />
        </a>

        <div className="w-full pl-16">
          <ul className="flex flex-row space-x-16 ">
            <li>หน้าหลัก</li>
            <li>ผู้หญิง</li>
            <li>ผู้ชาย</li>
            <li>ช่วยเหลือ</li>
            <li>ติดต่อ</li>
          </ul>
        </div>

        <button>ไทย</button>
      </div>
    </NavBar>
  );
};

export default Nav;
