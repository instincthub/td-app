import ReactTimeAgo from "react-time-ago";
import styled from "styled-components";

const AccreditationTableBody = ({ students }) => {
	return (
		<tbody>
			{students &&
				students.results &&
				students.results.map((option, index) => {
					return (
						<tr key={index}>
							<td className="actual_content">{`${option.user.first_name} ${option.user.last_name}`}</td>
							<td>{option.cohort?.length ? option.cohort[0].title : "-"}</td>
							<td>{option.school ? option.school : "-"}</td>
							<td>
								{option.course_choice.length
									? option.course_choice[0].title
									: "-"}
							</td>
							<td>
								{option.cohort.length ? (
									<ReactTimeAgo date={option.cohort[0].from_date} />
								) : (
									"-"
								)}
							</td>
							<td>
								{option.cohort.length ? (
									<ReactTimeAgo date={option.cohort[0].to_date} />
								) : (
									"-"
								)}
							</td>
							<td>3 months</td>
						</tr>
					);
				})}
		</tbody>
	);
};

export default AccreditationTableBody;

let HighValueBody = styled.div`
	position: relative;
	transition: all 0.5s;
	td {
		cursor: pointer;
		transition: all 0.5s;
		&:hover {
			.performAction {
				display: block;
			}
		}
	}
	.del {
		color: red;
		font-weight: 400;
		&:hover {
			color: white;
			background: red !important;
		}
	}
	.performAction {
		padding: 5px 0;
		z-index: 10;
		position: absolute;
		top: 40px;
		right: 20px;
		display: none;
		background: #ffffff;
		border: 1px solid rgba(44, 51, 58, 0.2);
		border-radius: 5px;
		width: 120px;
		transition: all 0.5s;
		&:hover {
			display: block;
		}
		li {
			padding: 5px 10px;
			transition: all 0.3s;
			&:hover {
				background: #f2f2f2;
			}
		}
	}
`;
