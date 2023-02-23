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
    
    .stats {
      color: #00838F;
    }
  
          
    .tech-diversity-text h5{
      font-weight: 700;
      height: 34px;
      max-width: 326px;
      color: #000000;
      font-size: 25px;
      color: #000000;
      white-space: nowrap;
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

    @media (min-width: 1024px) {
        padding: 0px 0px 20px 40px;
        margin-top: 20px;      
        height: 1024px;

        .card-flex {
           width: 1183px;

        }

        .card-container {      
          margin: 0px 80px 0px 0px;  

        }

        .containe {
          width: 1183px;
          margin-top: 100px;
        }
        .container-contents {
          width: 543px;
          height: 161px;
          margin: 10px 0px;
          padding: 6px 18px;
        }

        .search-field input {
          display: none;
        }

        .card-flex {
          overflow: visible !important;
    
        }

        
      .container-contents p {
          font-size: 14px;
        } 
  
      .container-contents {
          max-width: 356px;
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
      .header {
        margin-top: 0px;
      }
    }

   
    @media (min-width: 1440px) {
      padding: 0px;
    }


    @media (min-width: 768px) {
      .header {
        width: 700px;
        margin-top: 100px;
      }
      .search-field input {
        display: none;
        width: 743px;
      }
      .card-container {
        width: 356px;
      }
    }


    @media (min-width: 425px) {
      .card-flex {
        overflow: auto;
      }

      .card-container {
        width: 289px;
        padding: 10px 0;
      }
      .search-field input {
        height: 42px;
      }

    }




    
@media (max-width: 393px) {
  .header {
    margin-top: 100px;
  }
}

@media (max-width: 414px) {
  .header {
    margin-top: 100px;
  }
}
@media (max-width: 540px) {
  .header {
    margin-top: 100px;
  }
  .container-contents {
    width: 248px;
  }
}

@media (max-width: 992px) {
  .container-contents {
    width: 291px;
    padding: 7px 25px;
  }
}

@media (min-width: 1200px) {
  .tech-diversity-text {
    margin-top: -48px;
  }
}



@media (max-width: 345px) {
  .header h5 {
    font-size: 17px;
  }
}


    @media (min-width: 275px) {
      .card-flex {
       overflow: auto;
      }
      .card-flex {
        overflow: auto;
        scrollbar-width: none; /* hide scrollbar in Firefox */
        -ms-overflow-style: none; /* hide scrollbar in Edge and IE */
      }
      
      .card-flex::-webkit-scrollbar {
        display: none; /* hide scrollbar in Chrome and Safari */
      }
      .card-container {
        width: 289px;
        padding: 15px 0;
      }
      .search-field input {
        height: 38px;
      }
    }

    @media (max-width: 275px) {
      .card-flex {
        overflow: auto;
      }
    }
`;
      
      

  
