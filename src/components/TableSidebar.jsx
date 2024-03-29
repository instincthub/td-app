import React from "react";
import styled from "styled-components";
import SterlingImg from "./static/assets/images/sterlingLogo.png";
import Chat from "./static/assets/images/chat.png";
import Overview from "./static/assets/images/overview.png";
import Cohorts from "./static/assets/images/date_range.png";
import Courses from "./static/assets/images/cast_for_education.png";
import Projects from "./static/assets/images/projects.png";
import Earn from "./static/assets/images/Vector.png";
import Assesment from "./static/assets/images/assesment.png";

const TableSidebar = () => {
  return (
    <TableSidebarWrapper>
      <div className="sterling-logo">
        <img src={SterlingImg} alt="sterling-logo" />
      </div>
      <div class="icon-container active">
        <img src={Overview} className="img-style" />
        <a href="#">
          <span className="sidebar-item ">Overview</span>
        </a>
      </div>

      <div class="icon-container">
        <img src={Courses} className="img-style" />
        <a href="#">
          <span className="sidebar-item">Courses</span>
        </a>
      </div>

      <div class="icon-container">
        <img src={Assesment} className="img-style" />
        <a href="#">
          <span className="sidebar-item">Assesment</span>
        </a>
      </div>

      <div class="icon-container">
        <img src={Projects} className="img-style" />
        <a href="#">
          <span className="sidebar-item">Projects</span>
        </a>
      </div>

      <div class="icon-container">
        <img src={Chat} className="img-style" />
        <a href="#">
          <span className="sidebar-item">Chats</span>
        </a>
      </div>

      <div class="icon-container">
        <img src={Cohorts} className="img-style" />
        <a href="#">
          <span className="sidebar-item">Cohorts</span>
        </a>
      </div>

      <div class="icon-container">
        <img src={Earn} className="img-style" />
        <a href="#">
          <span className="sidebar-item">Earn</span>
        </a>
      </div>
    </TableSidebarWrapper>
  );
};

export default TableSidebar;

const TableSidebarWrapper = styled.section`
  background-color: #f2f2f2;
  background: #ffffff;
  height: 100vh;
  padding-top: 50px;
  border-right: 1px solid #ddd;
  border-bottom: 2px solid #ddd;
  .sterling-logo {
    position: relative;
    width: 107px;
    height: 95px;
    left: 84px;
    top: 0px;
  }

  .active {
    color: gray;
    border-left: 10px solid gray;
    border-radius: 1px;
    transition: 0.5s ease;
    background-color: #f2f2f2;
  }

  @media (max-width: 1200px) {
    max-width: 300px;
    height: 100vh;
    position: absolute;
    width: 100%;
    padding-top: 100px;
    transform: translateX(-300px);
    top: 20px;
    transition: 0.4s;
  }

  .sidebar-container {
    justify-content: space-evenly;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 6px;
  }

  .icon-container {
    display: flex;
    align-items: center;
    margin: 20px 15px 0px 10px;
  }

  .img-style {
    font-size: 24px;
    width: 24px;
    margin: 7px 20px;
  }

  .icon-container span {
    font-size: 18px;
    font-weight: 500;
  }
`;
