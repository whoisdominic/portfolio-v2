import React from "react";
import "./style.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
//

export default function App(props) {
  return (
    <div className="App">
      <div className="container">
        <div className="left">
          <h2 className="headings">Info</h2>
        </div>
        <div className="right">
          <Carousel>
            <div>
              <img src="./assets/habithuntermock1.png" />
              <p className="legend">Habit Hunter</p>
            </div>
            <div>
              <img src="assets/2.jpeg" />
              <p className="legend">Goat Ranker</p>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
