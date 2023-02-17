import React from 'react';
import styled from 'styled-components';
import BreadCrumb from '../components/BreadCrumb';
import TableSidebar from '../components/TableSidebar';

const TechTable = () => {
  return (
    <TechDiversityWrapper>
      <section>
        <div className='container'>
            <TableSidebar />   
            <BreadCrumb />
        </div>
      </section>
    </TechDiversityWrapper>
  )
}

export default TechTable



const TechDiversityWrapper = styled.div`
  max-width: 100%;
  overflow: auto;
  margin: 20px;
 
 

  .container {
    margin: 20px 20px;
    display: flex;
    justify-content: space-evenly;
  }
`;


