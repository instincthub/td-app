import { React, useEffect, useState, useRef } from "react";
// import AllLeads from "../Pages/Leads/LeadsCards";
import styled from "styled-components";
import Pagination from "./Pagination";
// import StaticTabs from "./StaticTabs";
// import SearchField from "./forms/SearchField";
import StaticTabs from "./StaticTabs";
import { useSearchParams } from "react-router-dom";
import TableforDownloads from "../Test/TableforDownloads";
// import EventCards from "../Pages/Events/EventCards";
// import AddNewEvent from "./AddEvent";

const AccreditationTable = () => {
  const violationRef = useRef(null);
  const [create, setCreate] = useState(false);
  const [createData, setCreateData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState();
  const [searchValues, setSearchValues] = useState(false);
  const [tabsValues, setTabsValues] = useState(false);
  const [searchParams] = useSearchParams();
  searchParams.get("id");

  const goToViolation = (id) => {
    violationRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    // console.log(data.results);

    if (createData) {
      setCreate(false);
      if (data) {
        data.results.push(createData);
      }
    }
  }, [createData]);
  console.log("Data from endpoint", data);

  return (
    <div ref={violationRef}>
      <AccreditationTableWrapper>
        <div className="event_container">
          <div className="staged">
            <h3>Cohorts</h3>
            <div className="search_tab">
              <StaticTabs
                setData={setData}
                setSearchValues={setSearchValues}
                setTabsValues={setTabsValues}
                categories={["Cohort1", "Cohort2", "Cohort3"]}
              />
              {/* <h6></h6> */}
              {/* <SearchField setSearchValues={setSearchValues} /> */}
            </div>
          </div>
          {/* {data ? ( */}
          <section className="vindict_scroll">
            <div className="scrollable_table">
              <table>
                <thead>
                  <tr>
                    <th>Applicant</th>
                    <th>Cohort</th>
                    <th>School</th>
                    <th>Course Choice</th>
                    <th>Start Date</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                {/* {data.results.map((option) => {
                  return ( */}
                {/* <div> */}
                {/* <TableforDownloads key={option.id} options={option} /> */}
                <TableforDownloads />
                {/* </div> */}
                {/* );
                })} */}
              </table>
            </div>
          </section>
          {/* // ) : ( // "" // )} */}
        </div>
        <div className="overflow-auto">
          <Pagination
            data={data}
            setData={setData}
            limit={10}
            offset={searchParams.get("offset")}
            goToViolation={goToViolation}
            tabsValues={tabsValues}
            searchValues={searchValues}
            urlPath="/api/v1/assessment/cohort/"
          />
        </div>
      </AccreditationTableWrapper>
    </div>
  );
};

export default AccreditationTable;

const AccreditationTableWrapper = styled.section`
  display: block;
  margin-top: 70px;
  box-shadow: var(--shadow);
  @media (max-width: 508px) {
    .add_btn {
      width: 100%;
      button {
        width: 100%;
      }
    }
  }
  @media (max-width: 1200px) {
    .vindict_scroll {
      overflow: auto;
      &::-webkit-scrollbar {
        display: none;
      }
      .scrollable_table {
        width: 1124px;
      }
    }
  }
  @media (max-width: 768px) {
    .add_btn {
      button {
        width: 100%;
      }
    }
  }

  @media (min-width: 768px) {
    .add_btn {
      display: flex;
      justify-content: space-between;
      button {
        margin-top: 0;
        margin-left: 10px;
      }
    }
  }
  .search_tab {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media (max-width: 540px) {
      .search_set {
        width: 100%;
      }
    }
  }
  .event_container .blog_wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .staged {
    margin-left: 20px;
    padding-top: 20px;
    h3 {
      font-size: 20px;
    }
  }
  .overflow-auto {
    overflow: auto;
  }
  .each_us {
    display: inline-block;
  }
  .blog_control {
    width: 100%;
    margin-top: 50px;
    border-bottom: 1px solid #eaeaea;
  }

  .container {
    margin-bottom: 20px;
  }
  .blog_control {
    width: 100%;
    margin-top: 50px;
  }

  @media (min-width: 768px) {
    .blog_control {
      width: 45%;
    }
  }
  @media (min-width: 1024px) {
    .blog_control {
      width: 30%;
    }
  }
`;
