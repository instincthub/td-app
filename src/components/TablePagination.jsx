// import React, { useState } from "react";
import styled from "styled-components";
import Tab from "./Tabs";

function TablePagination() {
  // return (
  //   <tr>
  //     <td>
  //       <div className="img-avatar">
  //         <div className="user-name">
  //           xAxAx
  //         </div>
  //       </div>
  //     </td>

  //     <td>xASxAs</td>
  //     <td className="residence-address">AsxASx</td>
  //     <td>
  //       <div className="date-time">ASxXZ</div>
  //       <div className="activity-time">xasx</div>
  //     </td>
  //     <td className="resume_data">

  //     </td>
  //   </tr>
  // );

  return (
    <>
      <section>
        <div>
          <div>
            <ActivityTableFrame>
              <div>
                <Tab />
                <div className="table-container">
                  <table>
                    <thead>
                      <tr className="table-header-item">
                        <th>Applicant</th>
                        <th>Cohort</th>
                        <th>School</th>
                        <th>Course Choice</th>
                        <th>Start date</th>
                        <th>Duration</th>
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </table>
                </div>
              </div>
            </ActivityTableFrame>
          </div>
        </div>
      </section>
    </>
  );
}

export default TablePagination;

const ActivityTableFrame = styled.section`  
    // max-width: 1112px;
    margin-top: 20px;
    // height: 889px;
    background-color: #f2f2f2;
    border: 1px solid #ddd;
    padding: 16px;
    background: #FFFFFF;
    box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.05), 0px 2px 8px rgba(0, 0, 0, 0.05);
    border-radius: 5px;

    th, tfoot td {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: center;
      background-color: #4caf50;
      color: white;
  }
  
    th, tfoot td {
      background: rgba(216, 216, 216, 0.27);
      color: #737070;
  }

  .table-container {
    overflow: auto;
    overflow: auto;
max-width: 1200px;
table{
  width: 1100px;
  margin-top: 40px;
}
    } 
  }


  
  @media (min-width: 275px) {
    .table-header-item {
      font-size: 10px;
    }
    th, tfoot td {
      font-size: 10px;
  }
  }
  @media (min-width: 1024px) {
      table-header-item {
        font-size: 12px;
        color: #737070;
        font-family: 'Nunito';
        font-weight: 600;
      }
      th, tfoot td {
        font-size: 14px;

    }
  }

  @media (min-width: 1200px) {
    // margin-left: 20px;

    th, tfoot td {
      font-size: 14px;
    }
  }
 

 

 

  

   

`;
