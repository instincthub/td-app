import React, { useMemo, useEffect, useState } from "react";
import { useTable } from "react-table";
import MOCK_DATA from "../components/table/MOCK_DATA.json";
import { COLUMNS } from "../components/table/columns";
import "../components/table/table.css";
import {
	fetchAPI,
	spinBtn,
	handleError,
	HOST_URL,
	reqOptions,
} from "../components/static/assets/js/help_func";

export const BasicTable = () => {
	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => MOCK_DATA, []);

	const [items, setItems] = useState(null);
	// const data =useMemo( () => items, [])
	// const dd = FetchReturnData('/assessments/skills/reg_tracker/', 'GET')
	// console.log(dd)
	useEffect(() => {
		const requestOptions = reqOptions("GET", null);
		fetchAPI(
			setItems,
			HOST_URL() + "/pai/v1/assessments/skills/reg_tracker/",
			requestOptions,
			true
		);
	}, []);
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		footerGroups,
		rows,
		prepareRow,
	} = useTable({
		columns,
		items,
	});

	return (
		<>
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps()}>{column.render("Header")}</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map((row) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return (
										<td {...cell.getCellProps()}>{cell.render("Cell")}</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
				<tfoot>
					{footerGroups.map((footerGroup) => (
						<tr {...footerGroup.getFooterGroupProps()}>
							{footerGroup.headers.map((column) => (
								<td {...column.getFooterProps()}>{column.render("Footer")}</td>
							))}
						</tr>
					))}
				</tfoot>
			</table>
		</>
	);
};
