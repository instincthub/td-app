import React from "react";
import styled from "styled-components";
import BreadCrumb from "../components/BreadCrumb";
import TableSidebar from "../components/TableSidebar";
import SecondaryNavbar from "../components/SecondaryNavbar";

const TechTable = () => {
  return (
    <TechDiversityWrapper>
      <SecondaryNavbar />

      <div className="body-container">
        <div className="sidebar">
          <TableSidebar />
        </div>
        <div className="breadcrumb-and-table">
          <BreadCrumb />
        </div>
      </div>
    </TechDiversityWrapper>
  );
};

export default TechTable;

const TechDiversityWrapper = styled.div`
  @media (min-width: 1200px) {
    .body-container {
      display: flex;
      justify-content: space-between;
      margin-top: 80px;
    }
    .sidebar {
      width: 25%;
      max-width: 300px;
      position: fixed;
    }
    .breadcrumb-and-table {
      width: 75%;
      position: absolute;
      right: 0;
    }
    .containe {
      margin-top: 0 !important;
    }
  }
`;
