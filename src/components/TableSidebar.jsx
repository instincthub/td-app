import React from 'react'
import styled from 'styled-components';
import SterlingImg from "./static/assets/images/sterlingLogo.png";
import Chat from "./static/assets/images/chat.png";
import Overview from "./static/assets/images/overview.png";
import Cohorts from "./static/assets/images/date_range.png";
import Courses from "./static/assets/images/cast_for_education.png";
import Projects from "./static/assets/images/projects.png";
import Earn from "./static/assets/images/Vector.png";
import  Assesment from "./static/assets/images/assesment.png";





const TableSidebar = () => {
  return (

    <TableSidebarWrapper>
      <div className='sterling-logo'>
          <img src={SterlingImg} alt="sterling-logo" />
        </div>
        <div class="icon-container">
          <img src={Overview} className='img-style' />
            <a href='#'>          
                <span className='sidebar-item'>Overview</span>
            </a>
        </div>

        <div class="icon-container">
          <img src={Courses} className='img-style' />
            <a href='#'>          
                <span className='sidebar-item'>Courses</span>
            </a>
        </div>

        <div class="icon-container">
          <img src={Assesment} className='img-style' />
            <a href='#'>          
                <span className='sidebar-item'>Assesment</span>
            </a>
        </div>

        <div class="icon-container">
          <img src={Projects} className='img-style' />
            <a href='#'>          
                <span className='sidebar-item'>Projects</span>
            </a>
        </div>

        <div class="icon-container">
          <img src={Chat} className='img-style' />
            <a href='#'>          
                <span className='sidebar-item'>Chats</span>
            </a>
        </div>

        <div class="icon-container">
          <img src={Cohorts} className='img-style' />
            <a href='#'>          
                <span className='sidebar-item'>Cohorts</span>
            </a>
        </div>

        <div class="icon-container">
          <img src={Earn} className='img-style' />
            <a href='#'>          
                <span className='sidebar-item'>Earn</span>
            </a>
        </div>

    
        

    </TableSidebarWrapper>
  )
}

export default TableSidebar

const TableSidebarWrapper = styled.section`
    background-color: #f2f2f2;
    padding: 24px;
    background: #FFFFFF;
    border-radius: 5px;
    margin: 0px 23px;
    padding: 0px 0px 20px 40px;      
    min-width: 285px;
    height: 1024px;
    border-right: 1px solid #ddd;
    border-bottom: 2px solid #ddd;
        

  .sterling-logo {
    width: 115px;
    height: 95px;
    margin-left: 31px;
    margin-bottom: 20px;
  }

  .sidebar-container {
    justify-content: space-evenly;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 6px;
  }

  .icon-container {
    display: flex;
    align-items: center;
    margin: 20px 0;
  }
  
  .img-style {
    font-size: 24px;
    margin-right: 10px;
    width: 24px;
  }
  
  .icon-container span {
    font-size: 16px;
  }
`;




// import React from 'react';
// import styled from 'styled-components';

// // import SterlingImg from './images/sterling.png';
// // import OverviewImg from './images/overview.png';
// // import CoursesImg from './images/courses.png';
// // import AssessmentImg from './images/assessment.png';
// // import ProjectsImg from './images/projects.png';
// // import ChatImg from './images/chat.png';
// // import CohortsImg from './images/cohorts.png';
// // import EarnImg from './images/earn.png';


// import SterlingImg from "./static/assets/images/sterlingLogo.png";
// import Chat from "./static/assets/images/chat.png";
// import Overview from "./static/assets/images/overview.png";
// import Cohorts from "./static/assets/images/date_range.png";
// import Courses from "./static/assets/images/cast_for_education.png";
// import Projects from "./static/assets/images/projects.png";
// import Earn from "./static/assets/images/Vector.png";
// import  Assessment from "./static/assets/images/assesment.png";

// const sidebarItems = [  { title: 'Overview', icon: Overview },  { title: 'Courses', icon: Courses },  { title: 'Assessments', icon: Assessment },  { title: 'Projects', icon: Projects },  { title: 'Chats', icon: Chat },  { title: 'Cohorts', icon: Cohorts },  { title: 'Earn', icon: Earn },];

// const TableSidebar = () => {
//   return (
//     <TableSidebarWrapper>
//       <div className='sterling-logo'>
//         <img src={SterlingImg} alt="sterling-logo" />
//       </div>
//       <div className='sidebar-item'>
//         <ul>
//           {sidebarItems.map((item, index) => (
//             <SidebarItem key={index} title={item.title} icon={item.icon} />
//             ))}
//         </ul>
//       </div>
//     </TableSidebarWrapper>
//   );
// };

// const SidebarItem = ({ title, icon }) => {
//   return (
//     <li>
//       <div className='sidebar-container'>
//         <div className="icon-container">
//           <img src={icon} alt={title} />
//         </div>
//         <div>
//           <a href='#'>
//             <span className='sidebar-title'>{title}</span>
//           </a>
//         </div>
//       </div>
//     </li>
//   );
// };

// export default TableSidebar


// const TableSidebarWrapper = styled.section`
//   .sterling-logo {
//     width: 107px;
//     height: 95px;
//     margin-left: 19px;
//   }

//   .sidebar-container {
//     justify-content: space-evenly;
//     display: flex;
//     align-items: center;
//     padding: 0px;
//     gap: 6px;
//     width: 100px;
//   }

//   .icon-container {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 32px;
//     height: 32px;
//     border-radius: 50%;
//   }

//   .sidebar-title {
//     font-size: 16px;
//     font-weight: bold;
//     text-align: center;
//   }

//   .sidebar-item {
//     margin: 20px;
//     padding: 20px;
//   }
// `;
