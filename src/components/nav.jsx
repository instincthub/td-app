import React, { useState } from "react";
import styled from "styled-components";
// import SearchField from "./forms/SearchField";
// import MenuDropdown from "./src/components/MenuDropdown";
import MenuDropdown from "./MenuDropdown";


const Nav = (props) => {
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
              src="https://instincthub.com/static/media/instincthub.87d965bf287cdcdc5874.png"
              alt=""
              className="logo"
            />
            {/* Hello */}
            {/* <SearchField id="media" /> */}
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
export default Nav;


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
  top: -10px;
  
}

@media (min-width: 364px) {
  .mt-5px{
    display: none;
  }

  .ff_part img {
    width: 174px;
    height: 24px;
  }
  .container_padding nav {
    display: flex;
    justify-content: space-between;
    // align-items: center;
    // position: relative;
  }
  
}


  .mt-5px {
    margin-top: 6px;
    cursor: pointer;
  }
  nav {
    display: flex;
    justify-content: space-between;
    // align-items: center;
    // position: relative;
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
    &:hover {
      box-shadow: var(--shadow);
    }
  }
`;