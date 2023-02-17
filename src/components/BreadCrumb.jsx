import React from 'react'
import styled from 'styled-components';
import TablePagination from './TablePagination';
// import SearchField from './forms/SearchField';



const BreadCrumb = () => {
  return (
    <BreadCrumbWrapper>
          <div className='header'>
              <div className='tech-diversity-text'>
                <h5>Tech Diversity Accreditation</h5>
              </div>
              <div className='search-field'>
              
                <input type="text" id="filter" placeholder="Search applicant name" class="search-icon"/>
                {/* <SearchField /> */}
              </div>
          </div>

        <div className='card-flex'>
            <div className='card-container'>
                <div class="container-contents">
                    <h3>Enrollment</h3>
                    <p>Current Students</p>
                    <p className='number'>400,000</p>
                    <p><span  className='stats'>+18</span> in the last 28 days.</p>
                </div>           
            </div>


            <div className='card-container'>
              <div class="container-contents">
                <h3>Assesment</h3>
                <p>Students who met expectations</p>
                <span className='number'> 800 </span>
                <p><span className='stats'>+18</span> in the last 28 days.</p>
              </div>
                
            </div>


            <div className='card-container'>
                <div class="container-contents">
                    <h3>Schools</h3>
                    <p>Universities of applicants</p>
                    <span className='number'>10,000</span>
                    <p><span className='stats'>+400</span> in the last 28 days.</p>
                </div>
            </div>
        </div>
        <TablePagination />
    </BreadCrumbWrapper>
  )
}

export default BreadCrumb

const BreadCrumbWrapper = styled.section`
    width: 1118px;

    .card-flex {
        display: flex;
    }

    .card-container {      
        margin: 25px 24px;
        min-width: 324px;
    }

    .container-contents p {
      font-size: 14px;
    } 

    .container-contents {
        min-width: 358px;
        margin-left: -25px;
        background-color: #f2f2f2;
        border: 1px solid #ddd;
        padding: 24px;
        background: #FFFFFF;
        box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.05), 0px 2px 8px rgba(0, 0, 0, 0.05);
        border-radius: 5px;
      }

      .container h2 {
        font-size: 24px;
        color: #333;
        text-align: center;
      }


     h3 { 
        width: 206.9px;
        height: 17px;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        color: #00838F;
        margin-bottom: 30px;
    }

    .number {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 600;
        font-size: 30px;
        color: #000000;
    }

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

    .stats {
      color: #00838F;
    }
    
      .search-field input{
        width: 458px;
        font-style: var(--Montserat);
        padding: 15px;
        border: 1px solid #d0d0d0;
        border-radius: 5px;
        height: 40px;
        font-size: 16px;
        outline: 0;
        margin-right: 16px;
      }

      .tech-diversity-text h5{
        font-weight: 700;
        font-size: 25px;
        color: #000000;
      }
`;
