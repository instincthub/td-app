import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

import { reqOptions, fetchAPI, HOST_URL } from "./static/assets/js/help_func";
import SearchInputUpdateParams from "./forms/SearchInputUpdateParams";
// import { cohortData } from "./accreditation/AccDummyData";

function Tabs(props) {
	const [cohorts, setCohorts] = useState(null);
	const [searchParams] = useSearchParams();

	useEffect(() => {
		if (!cohorts) {
			const requestOptions = reqOptions("GET", null);
			fetchAPI(
				setCohorts,
				HOST_URL() + "/api/v1/assessment/cohort/",
				requestOptions,
				true
			);
		}
	});

	if (cohorts && cohorts.results) {
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

					{cohorts.results.map((option) => {
						return (
							<div
								className={option >= 1 ? "m_none tab_none" : ""}
								key={option}
							>
								<Link
									to={"?cat=" + option.id}
									className={
										searchParams.get("cat") === `${option.id}`
											? "tab active"
											: "tab"
									}
									onClick={(e) => {
										props.setTabsValues(option.id);
										// tabActive(e.target)
									}}
									key={option.id}
								>
									<button data-id={option.id}>{option.title}</button>
								</Link>
							</div>
						);
					})}
					<div className="search-field">
						<SearchInputUpdateParams />
					</div>
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

		/* @media (min-width: 768px) {
			width: 80%;
		} */
		.tab {
			margin: 0;
			height: 40px;
			align-items: center;
			display: flex;
			justify-content: center;
			padding: 0;
			padding: 5px 10px;
			text-align: center;
			margin-right: 15px;
			color: var(--Gunmetal);
			text-decoration: none;
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
		.search-field {
			width: 400px;
		}
	}
	.normal_tab.add_tape {
		border-bottom: 2px solid yellow;
	}
	@media (min-width: 760px) {
		display: flex;
		justify-content: space-between;
		height: 35px;

		.search-field {
			margin-left: 30px;
			input {
				background-color: #f4f4f4;
				border: none;
			}
		}
	}
	@media (max-width: 500px) {
		.tabs {
			flex-wrap: wrap;
		}
		.m_none {
			display: none !important;
		}
		.tabs .search-field {
			width: 100%;
			margin-top: 20px;
			padding-right: 20px;
			input {
				width: 100%;
			}
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
