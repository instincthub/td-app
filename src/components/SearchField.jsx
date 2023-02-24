import React from "react";
import styled from "styled-components";
import searchIcon from "../components/static/assets/svgs/search_icon.svg";


const SearchField = (props) => {
    
  return (
    <SearchFieldTags id={props.id} className="event-input">
      <div className="search_set">
        <img src={searchIcon} alt="S" />
        <input
          className="event"
          type="text"
          name="name"
          placeholder="Search across your channel"
          // onChange={(e) => {
          //   props.setSearchValues(e.target.value);
          // }}
        />
      </div>
    </SearchFieldTags>
  );
};
export default SearchField;


const SearchFieldTags = styled.div`
  border: var(--borderDefault);
  border-radius: 5px;
  position: relative;
  @media (min-width: 1000px) {
    min-width: 350px;
  }
 
  input {
    margin: 0;
    font-weight: 500;
    font-size: 16px;
    border: 0;
    padding: 10px;
    height: auto !important;
    padding-left: 45px;
    color: var(--Gunmetal);
    outline: none;
  }
  @media (max-width: 540px) {
    width: 100%;
  }

   @media (min-width: 654px) {
    img {
      opacity: 0.4;
      top: 2px;
    }
    .search_set img {
      left: -158px;
      left: 0px;
  
    }
  }

  .search_set img {
    width: 24px;
    height: 25px;
    margin-right: 10px;
    position: absolute;
    margin-left: 10px;
    top: 2px;
    left: -81px;

  }
  .event {
    opacity: 0.5;
  }
`;