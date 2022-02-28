import React, { Component } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import carousel1 from "../assets/Banners/Spotlight Items/BACKPACK_WEB_BANNER_TH_1170X475.jpg";
import carousel2 from "../assets/Banners/Spotlight Items/GRAPHIC-TSHIRTS_WEB_BANNER_TH_1170X475_RE.jpg";
import carousel3 from "../assets/Banners/Spotlight Items/SCHOOL-WEB-BANNER-TH-1170X475-(1).jpg";

class SCarousel extends Component {
  render() {
    return (
      <div className="px-16 py-4">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          SPOTLIGHT ITEMS
        </button>
        <Carousel>
          <div>
            <img src={carousel1} />
          </div>
          <div>
            <img src={carousel2} />
          </div>
          <div>
            <img src={carousel3} />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default SCarousel;
