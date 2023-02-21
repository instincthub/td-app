// import React from "react";
// import { Link } from "react-router-dom";
// import { navSlide } from "./static/assets/js/nav";
// // import logo from "https://instincthub.com/static/instincthub-logo-.svg";


// const Navbar = () => {

//   return (
//     <>
//       <header>
//         <nav className="container staff_nav blog_nav">
//           <div className="burger" onClick={navSlide}>
//             <div className="line1"></div>
//             <div className="line2"></div>
//             <div className="line3"></div>
//           </div>
//           <Link to="/" className="link_logo">
//           <img
//             src={require("./static/assets/svgs/instincthub_logo.svg").default}
//             alt="instincthub Logo"
//           />
//           </Link>
//           <ul className="navlinks vet blog_links">
//             {/* <li>
//               <div className="wrap_course">
//                 <span href="https://skills.instioncthub.com" className="dropdown">Library</span>
//                 <div className="mini_menu slide-bottom">
//                   <a href="https://skills.instioncthub.com" className="track">
//                     Course Details
//                   </a>
//                   <a href="">My Courses</a>
//                 </div>
//               </div>
//             </li> */}
//             {/* <li>
//               <a href="">Pricing</a>
//             </li> */}
//             <li>
//               <a href="https://skills.instincthub.com/course/tracks/units/1/" target="blank" itemProp="url">Course Details</a>
//             </li>
//             <li>
//               <Link to="/community/signup">Become a Mentor</Link>
//             </li>
//             <li>
//               <Link to="/community/signup/campus-lead/">Become a Campus Lead</Link>
//             </li>
//             <li>
//               <a href="/#benefits">Benefits</a>
//             </li>
//             <li>
//               <a href="/#faq">FAQs</a>
//             </li>
            
//             {/* <li>
//               <a href="https://instioncthub.com/blog" target="blank">Blog</a>
//             </li> */}

//             <Link to="/register">
//               <button className="important-btn default-btn"><span>Register</span></button>
//             </Link>
//           </ul>
//         </nav>
//       </header>
//     </>
//   );
// };

// export default Navbar;





import React, { useState } from "react";
import styled from "styled-components";
// import SearchField from "./forms/SearchField";
// import MenuDropdown from "./src/components/MenuDropdown";
import MenuDropdown from "./MenuDropdown";


const Navbar = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleSettings = () => {
    setIsVisible(!isVisible);
  };
  return (
    <Header>
      <section className="container_padding">
        <nav>
          <div className="ff_part">
            <div className="mt-5px">
              <span
                className="material-symbols-outlined expansion"
                onClick={(e) => {
                  props.onClick(e);
                }}
              >
                {" "}
                apps{" "}
              </span>
            </div>
            <img
              src="https://instincthub.com/static/media/instincthub.87d965bf287cdcdc5874.png"
              alt=""
              className="logo"
            />
            {/* Hello */}
            {/* <SearchField id="media" /> */}
          </div>
          <div className="create_settings">
            <button className="add_box">LIBRARY</button>
            <div className="mt-5px">
              <span onClick={handleSettings} class="material-symbols-outlined">
                {" "}
                settings{" "}
              </span>
            </div>
          </div>
          {isVisible && <MenuDropdown />}
        </nav>
      </section>
    </Header>
  );
};
export default Navbar;


const Header = styled.header`
  .mt-5px {
    margin-top: 6px;
    cursor: pointer;
  }
  nav {
    display: flex;
    align-items: center;
    position: relative;
  }
  .container_padding {
    padding: 0 40px;
    @media (max-width: 768px) {
      padding: 0 20px;
    }
  }
  @media (max-width: 888px) {
    .create_settings {
      .add_box {
        display: none;
      }
    }
  }
  @media (max-width: 650px) {
    #media {
      display: none;
    }
  }
  .ff_part {
    display: flex;
    margin-right: auto;
  }
  .expansion {
    margin-right: 25px;
    width: 24px;
    height: 24px;
    cursor: pointer;
    transition: 0.3s;
    transform: scale(1);
    &: {
      transform: scale(1.1);
    }
  }
  .create_settings {
    display: flex;
  }
  .material-symbols-outlined,
  .material-symbols-outlined {
    color: var(--Gunmetal);
    font-size: 30px;
  }
  .create_settings img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  .create_settings button {
    color: var(--Gunmetal);
    border: var(--borderDefault);
    border-radius: 0;
    padding-left: 45px !important;
    margin-right: 30px;
    &:hover {
      box-shadow: var(--shadow);
    }
  }
`;