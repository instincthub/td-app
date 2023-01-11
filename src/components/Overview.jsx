import React from "react";

function Overview() {
  return (
    <div>
      <div class="container tech_overview" itemScope itemType="https://ft.intsincthub.com/enrol">
        <div class="purpose">
          <h2 itemProp="overview">Overview</h2>
          <div itemProp="description">
            <p>
            According to the Nigeria Bureau of Statistics (NBS), <strong>33.3%</strong> of Nigerians are unemployed. With over <strong>200 million</strong> population, <strong>66.2 million</strong> Nigerians are out of a job. 
            </p>
            <p>
            Tech Diversity by <a href="https://instincthub.com" target='blank'><strong className="instincthub_link">InstinctHub</strong></a> is structured to train 100,000 individuals each year and place 20% into direct jobs, which will create wealth for families locked out of employment opportunities.
            </p>

            <p>We have scheduled 3 cohorts for this year, each cohort will last for 12 weeks. Participants will have the privilege to pick any of the listed tracks below.</p>
            <ol>
              <li>Wen Development - Beginner </li>
              <li>Wen Development - Intermediate </li>
              <li>Product Design - Beginner </li>
              <li>Data Analysis  - Beginner </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
