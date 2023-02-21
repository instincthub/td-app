import React from 'react'
import styled from 'styled-components';
import TablePagination from './TablePagination';
// import SearchField from './forms/SearchField';



const BreadCrumb = () => {
  return (
    <BreadCrumbWrapper>
        <div className='containe'>

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
                    <span className='number'>400,000</span>
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
      </div>
    </BreadCrumbWrapper>
  )
}

export default BreadCrumb

const BreadCrumbWrapper = styled.section`
    margin-top: 60px;
    padding: 0px 10px;
    

    .container-contents {
      height: 161px;
      padding: 10px 25px 0px 17px
      background-color: #f2f2f2;
      border: 1px solid #ddd;
      background: #FFFFFF;
      box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.05), 0px 2px 8px rgba(0, 0, 0, 0.05);
      border-radius: 5px;
    }

    .card-container {      
      margin: 0px 6px;    
    }


    .card-flex {
        display: flex;
    }

    

    .container-contents p {
      font-size: 14px;
      font-weight: 600;
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

    @media (min-width: 900px) {
      .header {
        width: 700px;
      }
      .search-field input {
        display: none;
      }

      
    }

   


    @media (min-width: 1024px) {
        padding: 0px 0px 20px 40px;      
        height: 1024px;

        .card-flex {
           width: 1183px;

        }

        .card-container {      
          margin: 0px 6px;    
        }

        .containe {
          width: 1183px;
        }
        .container-contents {
          width: 543px;
          // width: 239px;
          height: 161px;
          margin: 10px 0px;
          padding: 6px 18px;
        }

        .search-field input {
          display: none;
        }

        
      .container-contents p {
          font-size: 14px;
        } 
  
      .container-contents {
          max-width: 356px;
          // width: 356px;
          height: 161px;
          padding: 10px 25px 0px 17px
          background-color: #f2f2f2;
          border: 1px solid #ddd;
          background: #FFFFFF;
          box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.05), 0px 2px 8px rgba(0, 0, 0, 0.05);
          border-radius: 5px;
        }
  
  
       .container-contents h3 { 
          width: 206.9px;
          height: 17px;
          font-family: 'Nunito';
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          color: #00838F;
          margin-bottom: 30px;
      }
    }

    @media (min-width: 768px) {
      .search-field input {
        width: 743px;
      }
    }



    @media (min-width: 375px) {
      overflow: hidden;
      .header {
        max-width: 400px;
        margin-top: 50px;
      }
      
      
      .stats {
        color: #00838F;
      }
      
      
      .tech-diversity-text h5{
        font-weight: 700;
        height: 34px;
        max-width: 326px;
        font-size: 22px;
        color: #000000;
      }

      .number {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 600;
        font-size: 30px;
        color: #000000;
      }

    .container-contents {
      height: 161px;
      margin: 10px 0px;
      padding: 6px 18px;
      
    }

    .container-contents h3 {
      width: 206.9px;
      height: 17px;
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      color: #00838F;
      margin-bottom: 30px;
    }

    .card-flex {
      max-width: 624px;
    }

  }
`;
