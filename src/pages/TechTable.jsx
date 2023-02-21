import React from 'react';
import styled from 'styled-components';
import Nav from '../components/nav';
import BreadCrumb from '../components/BreadCrumb';
import TableSidebar from '../components/TableSidebar';

const TechTable = () => {
  return (
    <TechDiversityWrapper>
            <Nav />
      <section>
        <div className='containerr'>
            <TableSidebar />   
            <BreadCrumb />
        </div>
      </section>
    </TechDiversityWrapper>
  )
}

export default TechTable



const TechDiversityWrapper = styled.div`



    

    @media (min-width: 1200px) {
      .containerr {
        display: flex;
        // justify-content: center;
        align-items: center;
      }
    }
  
`;


