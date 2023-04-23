import React from "react";
import styled from "styled-components";
import AccreditationTable from "./AccreditationTable";

const BreadCrumb = (props) => {
	const currentYear = new Date().getFullYear();
	const stats = {
		total: props.cohortStats?.data.total_students,
		total_in_24hr: props.cohortStats?.data.total_students_last_28_days,
		meet_expectation: props.cohortStats?.data.total_students_meets_expectation,
		meet_in_24hr:
			props.cohortStats?.data.total_students_meets_expectation_last_28_days,
		uni: props.cohortStats?.data.total_university_applicants,
		uni_in_24hr:
			props.cohortStats?.data.total_university_applicants_last_28_days,
		current_year: new Date().getFullYear(),
	};

	return (
		<BreadCrumbWrapper>
			<div className="containe">
				<div className="header">
					<div className="tech-diversity-text">
						<h5> {stats.current_year} Tech Diversity Accreditation</h5>
					</div>
				</div>
				<section className="overflown">
					<div className="card-flex">
						<div className="card-container">
							<div class="container-contents">
								<h3>Enrollment</h3>
								<p>Current Students</p>
								<span className="number">{stats.total}</span>
								<p>
									{stats.total_in_24hr ? (
										<>
											<span className="stats">+{stats.total_in_24hr}</span> in
											the last 28 days.
										</>
									) : stats.total_in_24hr < 1 ? (
										"No new enrolment in the last 28 days."
									) : (
										"Loading..."
									)}
								</p>
							</div>
						</div>

						<div className="card-container">
							<div class="container-contents">
								<h3>Assesment</h3>
								<p>Students who met expectations</p>
								<span className="number"> {stats.meet_expectation} </span>
								<p>
									{stats.meet_in_24hr ? (
										<>
											<span className="stats">+{stats.meet_in_24hr}</span> in
											the last 28 days.
										</>
									) : stats.meet_in_24hr < 1 ? (
										"No new enrolment in the last 28 days."
									) : (
										"Loading..."
									)}
								</p>
							</div>
						</div>

						<div className="card-container">
							<div class="container-contents">
								<h3>Schools</h3>
								<p>Universities of applicants</p>
								<span className="number">{stats.uni}</span>
								<p>
									{stats.uni_in_24hr ? (
										<>
											<span className="stats">+{stats.uni_in_24hr}</span> in the
											last 28 days.
										</>
									) : stats.uni_in_24hr < 1 ? (
										"No new enrolment in the last 28 days."
									) : (
										"Loading..."
									)}
								</p>
							</div>
						</div>
					</div>
				</section>
				<AccreditationTable
					students={props.students}
					setStudents={props.setStudents}
					cohort={props.cohort}
				/>
			</div>
		</BreadCrumbWrapper>
	);
};

export default BreadCrumb;

const BreadCrumbWrapper = styled.section`
@media(max-width: 900px){

  .overflown{
    max-width: 1118px;
    overflow: auto;
    padding: 20px 0;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .card-flex {
    width: 920px;
  }
}

    margin-top: 120px;    
    
    @media (min-width: 768px) {
      margin: 0 auto;
      margin-top: 120px;
    }
    @media(min-width: 1200px){
      margin-top: 100px; 
    }
    
    .stats {
      color: #00838F;
    }
  
          
    .tech-diversity-text h5{
      font-weight: 700;
    
      color: #000000;
      font-size: 25px;
      color: #000000;
    }
    
    .number {
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 600;
      font-size: 30px;
      color: #000000;
    }

    .container-contents {
      // height: 161px;
      padding: 10px 25px 0px 17px
      background-color: #f2f2f2;
      border: 1px solid #ddd;
      background: #FFFFFF;
      box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.05), 0px 2px 8px rgba(0, 0, 0, 0.05);
      border-radius: 5px;
    }

    .card-container {      
      margin: 0px 6px;  
      width: 33%;
    }


    .card-flex {
        display: flex;
        justify-content: space-between;
    }
    .container-contents p {
      font-size: 14px;
      font-weight: 600;
    } 
     h3 { 
        width: 206.9px;
        height: 17px;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        color: #00838F;
        margin-bottom: 30px;
    }

    @media (min-width: 1024px) {
        // padding: 0px 0px 20px 40px;
        // margin-top: 20px;      
        // height: 1024px;
        .containe {
         
          margin-top: 120px;
        }
        .container-contents {
          margin: 10px 0px;
          padding: 6px 18px;
        }

        
      .container-contents p {
          font-size: 14px;
        } 
  
      .container-contents {
       
          // padding: 10px 25px 0px 17px
          background-color: #f2f2f2;
          border: 1px solid #ddd;
          background: #FFFFFF;
          box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.05), 0px 2px 8px rgba(0, 0, 0, 0.05);
          border-radius: 5px;
        }
  
  
       .container-contents h3 { 
         
          font-family: 'Nunito';
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          color: #00838F;
          margin-bottom: 30px;
      }
      .header {
        margin-top: 0px;
      }
    }

   
    @media (min-width: 1440px) {
      padding: 0px;
    }


    @media (min-width: 425px) {
    

      .card-container {
        // width: 289px;
        padding: 10px 0;
      }
      .search-field input {
        height: 42px;
      }

    }




    
@media (max-width: 393px) {
  .header {
    margin-top: 100px;
  }
}

@media (max-width: 414px) {
  .header {
    margin-top: 100px;
  }
}
@media (max-width: 540px) {
  .header {
    margin-top: 100px;
  }
  .container-contents {
    // width: 248px;
  }
}

@media (max-width: 992px) {
  .container-contents {
    // width: 291px;
    padding: 7px 25px;
  }
}

@media (min-width: 1200px) {
  .tech-diversity-text {
    margin-top: -48px;
  }
}



@media (max-width: 345px) {
  .header h5 {
    font-size: 17px;
  }
}
@media (max-width: 500px) {
  .card-flex {
    justify-content: flex-start;

    .card-container {
      max-width: 255px;
    }
  }
}


   
`;
