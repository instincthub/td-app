// import {React, useState, useEffect } from 'react';
// // import categoriesDefault from '../components/static/json/categoriesDefault.json'
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import { useSearchParams } from 'react-router-dom';
// import { reqOptions, fetchAPI, HOST_URL } from "../components/static/assets/js/help_func";

// function Tab(props) {

//     const [searchParams] = useSearchParams();
//     const [cohort, setCohort] = useState()
//     // const [categories, setCategories] = useState(categoriesDefault);
//     const requestOptions  = reqOptions('get', null)

//     // useEffect(()=>{
//     //     const requestOptions =  reqOptions("GET", null)
        
//     //     fetchAPI(setCohort, HOST_URL()+"/api/v1/assessment/cohort/", requestOptions, true)
//     //   },[searchParams.get("cat")])

//     useEffect(()=>{
//         if (!categories) {// Category List
//             fetchAPI(setCohort, HOST_URL()+"/api/v1/assessment/cohort/", requestOptions, true);
//         }
//     // eslint-disable-next-line
//     },[searchParams.get("cat")])


//         return (
//             <TabsSearch>
//                 <div className="tabs">
//                 <Link 
//                     className={searchParams.get("cat")==='all' || searchParams.get("cat") === null ? 'tab active' : 'tab'} to={'?cat=all'}
//                     onClick={()=> props.setTabsValues('all')}>
//                     <button>All</button>
//                 </Link>
// {/* 
//                 {categories.results.map((option, index)=>{
//                     return <div 
//                         className={index >= 1 ? 'm_none tab_none' : ''}
//                         onClick={()=> props.setTabsValues(option.id)}>
//                         <Link 
//                             to={'?cat='+option.id} 
//                             className={Number(searchParams.get("cat")) === option.id ? 'tab active' : 'tab'}
//                             key={option.id}
//                             >
//                             <button className="btn" data-id={option.id}> {option.title} </button>
//                         </Link>
//                     </div>
//                 })} */}

// {
//                   cohort.results.map((option, index)=>{
//                     return<li key={index}>{option.title}</li>
//                   })
//                 }


//                 </div>

//             </TabsSearch>
//         );
//     }


// export default Tab;

// const TabsSearch = styled.section`
//   .container {
//     margin-bottom: 20px;
//   }
//   .normal_tab {
//     background: transparent;
//   }

//   .tabs {
//     margin: 0;
//     margin-bottom: 30px;
//     @media(min-width: 768px){
//         width: 80%;
//     }
//     .tab {
//       margin: 0;
//       height: 45px;
//       align-items: center;
//       display: flex;
//       justify-content: center;
//       padding: 0;
//       min-width: 100px;
//       padding: 5px 10px;
//       text-align: center;
//       margin-right: 15px;
//       button {
//         margin: 0;
//         padding: 0 !important;
//         padding: 15px;
//       }
//     }
//     .active {
//       background: transparent;
//       border-bottom: 2px solid #00838f;
//       button {
//         color: #00838f;
//       }
//     }
//   }
//   .normal_tab.add_tape {
//     border-bottom: 2px solid yellow;
//   }
//   @media (min-width: 760px) {
//     display: flex;
//     justify-content: space-between;
//   }
//   @media(max-width: 500px){
//     .m_none{
//         display: none !important;
//     }
//   }
//   @media(max-width: 820px){
//     .tab_none{
//         display: none !important;
//     }
//   }
//   @media(max-width: 1112px){
//     .mid_none{
//         display: none !important;
//     }
//   }
// `;








import React, { useState } from 'react'
import { useNavigate , useLocation } from 'react-router-dom'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


function Tab( { cohort } ) {
  const location = useLocation()
  const history = useNavigate()
  const searchParams = new URLSearchParams(location.search)

  const [activeTab, setActiveTab] = useState(searchParams.get('tab') || 'tab1')

  const handleTabClick = (tab) => {
    setActiveTab(tab)
    searchParams.set('tab', tab)
    history.push({ search: searchParams.toString() })
  }

  return (
        <TabsSearch>
               
                  <h5 className='cohorts'>Cohorts</h5>
                 <div className="tabs">
                <Link to="#">
                     <button className={activeTab === 'tab1' ? 'active' : ''} onClick={() => handleTabClick('tab1')}>All</button>
                </Link>                
                    <Link to="#">
                     <button className={activeTab === 'tab2' ? 'active' : ''} onClick={() => handleTabClick('tab2')}>Cohort 1</button>
                    </Link>
                    <Link to="#">
                     <button className={activeTab === 'tab3' ? 'active' : ''} onClick={() => handleTabClick('tab3')}>Cohort 2</button>
                    </Link>
                    <Link to="#">
                     <button className={activeTab === 'tab4' ? 'active' : ''} onClick={() => handleTabClick('tab4')}>Cohort 3</button>
                    </Link>
                 </div>     
            
          
        </TabsSearch>
    )
}

export default Tab


const TabsSearch = styled.div`
   .cohorts {
    font-family: 'Nunito';
    font-weight: 700;
    font-size: 16px;
    color: #00838F;
  }

  .tabs {
    display: flex;
    height: 0px;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    align-items: center;
    color: #686868;
     margin: 0;
     @media(min-width: 768px){
         width: 80%;
     }
    }

    .tabs button {
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      display: flex;
      align-items: center;
      color: #686868;
    }

    .tabs .active {
      color: gray;
      border-bottom: 5px solid gray;
      border-radius: 4px 4px;
      transition: 0.5s ease;
      // background-color: #f2f2f2;
  }

  @media (max-width: 414px) {
    .tabs button {
      font-size: 10px; 
    }
  }
`;