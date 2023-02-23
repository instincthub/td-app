import React from 'react';
import styled from 'styled-components';
import BreadCrumb from '../components/BreadCrumb';
import TableSidebar from '../components/TableSidebar';
import SecondaryNavbar from '../components/SecondaryNavbar';

const TechTable = () => {
  return (
    <TechDiversityWrapper>
            <SecondaryNavbar />
      <section>
        <div className='body-container'>
          <div className='sidebar'>
            <TableSidebar />   
          </div>
          <div className='breadcrumb-and-table'>
            <BreadCrumb />
          </div>
        </div>
      </section>
    </TechDiversityWrapper>
  )
}

export default TechTable



const TechDiversityWrapper = styled.div`



    

    @media (min-width: 1200px) {
      .body-container {
        margin: 0px 0px 0px auto;
        display: flex;
        align-items: center;
      }
      .sidebar {
        margin: 20px 0px;
      }
      .breadcrumb-and-table {
        margin: 20px 0px;

      }
    }
`;


