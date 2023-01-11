import React from "react";

function Features() {
  return (
    <div>
      <div className="container">
        <section className="cyrac"  itemScope itemType="https://ft.intsincthub.com/enrol">
          <h2 itemProp="tittle">2021 Tech Diversity Overview</h2>

          <div className="learning_box" itemProp="description">
            <div className="numbers">
              <p>10+</p>
              <h3 itemProp="benefit tittle">Universities in Nigeria</h3>
            </div>
            <div className="numbers" itemProp="description">
              <p>800+</p>
              <h3 itemProp="benefit tittle">University students enrolled with InstinctHub</h3>
            </div>
            <div className="numbers" itemProp="description">
              <p>20+</p>
              <h3 itemProp="benefit tittle">Available and Dedicated instructors</h3>
            </div>
            <div className="numbers" itemProp="description">
              <p>10</p>
              <h3 itemProp="benefit tittle">Direct job placement for top best students</h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Features;
