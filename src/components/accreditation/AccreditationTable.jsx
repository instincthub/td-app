import { React, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Pagination from "../Pagination";
import StaticTabs from "../StaticTabs";
import { useSearchParams } from "react-router-dom";
import AccreditationTableBody from "./AccreditationTableBody";
import Tabs from "../StaticTabs";
// import AllLeads from "../Pages/Leads/LeadsCards";
// import StaticTabs from "./StaticTabs";
// import SearchField from "./forms/SearchField";
// import EventCards from "../Pages/Events/EventCards";
// import AddNewEvent from "./AddEvent";

const AccreditationTable = ({ students, setStudents, ...props }) => {
	const violationRef = useRef(null);
	const [data, setData] = useState();
	const [error, setError] = useState();
	const [searchValues, setSearchValues] = useState(false);
	const [tabsValues, setTabsValues] = useState(false);
	const [searchParams] = useSearchParams();
	searchParams.get("id");

	const goToViolation = (id) => {
		violationRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
	};

	useEffect(() => {
		if (students) {
			setData(students);
			setStudents(null);
		}
	}, [data, students]);

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
						</div>
					</div>
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
										<th>End Date</th>
										<th>Duration</th>
									</tr>
								</thead>

								{/* Table body */}
								<AccreditationTableBody students={data} />
							</table>
						</div>
					</section>
				</div>
				<div className="overflow-auto">
					<Pagination
						data={data}
						setData={setData}
						setError={setError}
						limit={10}
						offset={searchParams.get("offset")}
						urlPath="/api/v1/assessment/cohort_students/?"
						noPermission={true}
					/>
				</div>
			</AccreditationTableWrapper>
		</div>
	);
};

export default AccreditationTable;

const AccreditationTableWrapper = styled.section`
	a:link,
	a:visited {
		color: none;
		text-decoration: none;
	}

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
	@media (max-width: 540px) {
		.vindict_scroll {
			margin-top: 60px;
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
