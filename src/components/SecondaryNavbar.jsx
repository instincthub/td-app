import React, { useState } from "react";
import styled from "styled-components";
import SearchField from "./SearchField";
import MenuDropdown from "./MenuDropdown";
import Images from "./Images";
import { Link } from "react-router-dom";


const SecondaryNavbar = (props) => {
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
              >apps </span>
            </div>
            <img
              src={Images.logo}
              alt=""
              className="logo"
            />

            {/* Hello */}
            <SearchField id="media" />
          </div>
          
          
          <div className="create_settings">
            <button className="add_box"> <span class="material-symbols-outlined g_icons"> add_box </span> <span className="text">LIBRARY</span></button>
            <div className="mt-5px">
              <span onClick={handleSettings} className="material-symbols-outlined">
                settings
              </span>
              
            </div>
          </div>
          {isVisible && <MenuDropdown />}
        </nav>
      </section>
    </Header>
  );
};
export default SecondaryNavbar;


const Header = styled.header`

.g_icons{
  margin-right: 10px;
  position: relative;
  top: 0px;
  color: var(--DarkCyan) !important;
}
.create_settings .text{
  display: inline-block;
  color: var(--Gunmetal);
  position: relative;
  left: -5px;
  top: 0px;
  
}


@media (min-width: 320px) {
  .ff_part img {
    margin-left: 101px;
    // margin-left: 101px;
    margin-top: 6px;
    
  }
}
@media (max-width: 393px) {
  .ff_part img {
    margin-top: 6px;
    
  }
}

@media (min-width: 414px) {
  .ff_part img {
    margin-left: 169px !important;
    margin-top: 6px;
    
  }
}

@media (min-width: 757px) {
  .ff_part img {
    width: 189px;
    height: 24px;
    margin-left: 12px !important;
    margin-top: 6px;
    
  }
}

// @media (min-width: 768px) {
@media (min-width: 758px) {
  .ff_part img {
    width: 189px;
    height: 24px;
    margin-left: 12px !important;
    margin-top: 6px;
    
  }
  .ff_part {
    display: flex !important;
    justify-content: space-between;
  }
  #media {
    width: 458px;
    height: 40px;
    margin: 0px 45px;
  }
}

@media (min-width: 1024px) {
  .ff_part {
    margin-top: 3px;
  }
  .mt-5px {
    margin-top: -4px;
  }
   
  
}
  
}













@media (max-width: 756px) {
  .create_settings {
    .mt-5px {
      display: none;
    }
  }
  .ff_part {
    display: flex !important;
    justify-content: space-between;

  }
  

  .ff_part img {
    width: 189px;
    height: 24px;
  }
  .container_padding nav {
    display: flex;
    justify-content: space-between;
  }
  
}





  .mt-5px {
    cursor: pointer;
  }
  nav {
    display: flex;
    justify-content: space-between;
  }
  .container_padding {
    padding: 0 40px;
    @media (max-width: 768px) {
      padding: 0 20px;
    }
  }


  @media (max-width: 897px) {
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

  @media (min-width: 898px) {
    .mt-5px{
      display: flex;
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
    margin: 0px;
    color: var(--Gunmetal);
    border: var(--borderDefault);
    border-radius: 0;
    padding-left: 20px !important;
    padding-right: 20px !important;
    margin-right: 30px;
    display: flex;
    &:hover {
      box-shadow: var(--shadow);
    }
  }
`;