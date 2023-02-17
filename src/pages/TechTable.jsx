import React from 'react';
import styled from 'styled-components';
import BreadCrumb from '../components/BreadCrumb';
import TableSidebar from '../components/TableSidebar';

const TechTable = () => {
  return (
    <TechDiversityWrapper>

      <section>
      <div className='container'>
          <div className='sidebar'>
            <TableSidebar />   
          </div>
          <div className='mainbar'>
              <BreadCrumb />
            </div>
        </div>
      </section>
    </TechDiversityWrapper>
  )
}

export default TechTable



const TechDiversityWrapper = styled.div`
  overflow: auto
  margin-top: 20px;

 
 

  .container {
    display: flex;
    justify-content: space-between;
    margin: 30px;
  }

  .sidebar {
    display: flex;
    margin: 0px 20px;
    padding: 0px 0px 20px 40px;
    width: 557px;
    
  }
  .mainbar {
    min-width: 1188px;
  }



`;


