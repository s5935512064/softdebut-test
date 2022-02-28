import React, { Component } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import bg1 from "../assets/Banners/Life in color/BLUE-WEB-BANNER-TH-1170X475.jpg";
import bg2 from "../assets/Banners/Life in color/GRAY-WEB-BANNER-TH-1170X475.jpg";
import bg3 from "../assets/Banners/Life in color/GREEN_WEB_BANNER_TH_1170X475.jpg";
import bg4 from "../assets/Banners/Life in color/RED-WEB-BANNER-TH-DESK.jpg";
import bg5 from "../assets/Banners/Life in color/YELLOW_WEB_BANNER_TH_1170X475.jpg";

class FCarousel extends Component {
  render() {
    return (
      <div className="px-16 py-4">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          LIFE IN COLOR
        </button>
        <Carousel>
          <div>
            <img src={bg1} />
          </div>
          <div>
            <img src={bg2} />
          </div>
          <div>
            <img src={bg3} />
          </div>
          <div>
            <img src={bg4} />
          </div>
          <div>
            <img src={bg5} />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default FCarousel;
