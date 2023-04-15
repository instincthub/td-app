import React, { useState } from "react";
import styled from "styled-components";
import BreadCrumb from "../components/accreditation/BreadCrumb";
import { fetchAPI, HOST_URL, getCookie, reqOptions } from "../components/static/assets/js/help_func";
import Navbar from "../components/Navbar";
import { cohortData, statsData, studentsData } from "../components/accreditation/AccDummyData";
// import TableSidebar from "../components/TableSidebar";
// import SecondaryNavbar from "../components/SecondaryNavbar";


const Accreditation = () => {
  const [cohort, setCohort] = useState(cohortData)
  const [cohortStats, setCohortStats] = useState(statsData)
  const [students, setStudents] = useState(studentsData)

  useState(()=>{
    const requestOptions =  reqOptions("GET", null)
    
    // fetchAPI(setCohortStats, HOST_URL()+"/api/v1/assessment/cohort_analytics/", requestOptions, true)
    // fetchAPI(setStudents, HOST_URL()+"/api/v1/assessment/cohort_students/", requestOptions, true)
    // fetchAPI(setCohort, HOST_URL()+"/api/v1/assessment/cohort/", requestOptions, true)
  })

  return (
    <TechDiversityWrapper>
      {/* <SecondaryNavbar /> */}
      <Navbar />

      <div className="body-container">
        <div className="sidebar">
          {/* <TableSidebar /> */}
        </div>
        <div className="breadcrumb-and-table container">
          <BreadCrumb cohortStats={cohortStats} students={students} setStudents={setStudents} cohort={cohort}/>
        </div>
      </div>
    </TechDiversityWrapper>
  );
};

export default Accreditation;

const TechDiversityWrapper = styled.div`
  @media (min-width: 1200px) {
    .body-container {
      display: flex;
      justify-content: space-between;
      margin-top: 80px;
    }
    .sidebar {
      /* width: 25%; */
      /* max-width: 300px; */
      position: fixed;
    }
    .breadcrumb-and-table {
      width: 100%;
    }
    .containe {
      margin-top: 0 !important;
    }
  }
`;
