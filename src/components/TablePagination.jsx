
// import React, { useState } from "react";
import styled from "styled-components";
import Tab from "./Tabs";




const ActivityTableFrame = styled.section`  
    width: 1118px;
    height: 809px;
    background-color: #f2f2f2;
    border: 1px solid #ddd;
    padding: 24px;
    background: #FFFFFF;
    box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.05), 0px 2px 8px rgba(0, 0, 0, 0.05);
    border-radius: 5px;



    table th, tfoot td {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: center;
      background-colour: gray;
      color: #686868;
    }

`;



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
                          <table>
                            <thead>
                              <tr>
                                <th>Applicant</th>
                                <th>Cohort</th>
                                <th>Scchool</th>
                                <th>Course Choice</th>
                                <th>Start date</th>
                                <th>Duration</th>
                              </tr>
                            </thead>
                            <tbody></tbody>
                          </table>
                        </div>
                    </ActivityTableFrame>
                  </div>
                </div>
          </section>
        </>
      );
    


    };

export default TablePagination;

