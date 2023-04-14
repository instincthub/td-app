import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

import { reqOptions, fetchAPI, HOST_URL } from "./static/assets/js/help_func";

function Tabs(props) {
  const [searchParams] = useSearchParams();
  const requestOptions = reqOptions("get", null);

  useEffect(() => {
    // eslint-disable-next-line
  }, [searchParams.get("cat")]);

  if (props.categories) {
    return (
      <TabsSearch>
        <div className="tabs">
          <Link
            className={
              searchParams.get("cat") === "all" ||
              searchParams.get("cat") === null
                ? "tab active"
                : "tab"
            }
            to={"?cat=all"}
            onClick={() => props.setTabsValues("all")}
          >
            <button>All</button>
          </Link>

          {props.categories.map((option) => {
            return (
              <div
                className={option >= 1 ? "m_none tab_none" : ""}
                key={option}
              >
                <Link
                  to={"?cat=" + option}
                  className={
                    searchParams.get("cat") === option ? "tab active" : "tab"
                  }
                  onClick={(e) => {
                    props.setTabsValues(option);
                    // tabActive(e.target)
                  }}
                  key={option.id}
                >
                  <button data-id={option}>{option}</button>
                </Link>
              </div>
            );
          })}
        </div>
      </TabsSearch>
    );
  }
}

export default Tabs;

const TabsSearch = styled.section`
  // overflow: auto;
  .tabs {
    // max-width: 500px;
    width: 100%;
    height: 28px;
    display: flex;
    flex-wrap: no-wrap !important;
  }
  .container {
    margin-bottom: 20px;
  }
  .normal_tab {
    background: transparent;
  }

  .tabs {
    margin: 0;
    margin-bottom: 30px;
    position: relative;
    @media (min-width: 768px) {
      width: 80%;
    }
    .tab {
      margin: 0;
      height: 40px;
      align-items: center;
      display: flex;
      justify-content: center;
      padding: 0;
      // min-width: 100px;
      padding: 5px 10px;
      text-align: center;
      margin-right: 15px;
      button {
        margin: 0;
        padding: 0 !important;
        padding: 15px;
      }
    }
    .active {
      background: transparent;
      border-bottom: 2px solid #00838f;
      button {
        color: #00838f;
      }
    }
  }
  .normal_tab.add_tape {
    border-bottom: 2px solid yellow;
  }
  @media (min-width: 760px) {
    display: flex;
    justify-content: space-between;
    height: 35px;
  }
  @media (max-width: 500px) {
    .m_none {
      display: none !important;
    }
  }
  @media (max-width: 820px) {
    .tab_none {
      display: none !important;
    }
  }
  @media (max-width: 1112px) {
    .mid_none {
      display: none !important;
    }
  }
`;
