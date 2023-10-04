import React  from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../CSS/reset.css';
import '../CSS/Activity.css';
import HeaderComponent from './Header';

const Activity = () => {
     const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Set the time interval in milliseconds
  };
  return (
    <div >
        <HeaderComponent></HeaderComponent>
        <div>
            <Slider {...settings}>
      <div>
        <img src="nat-4.jpg" alt="Image 1" />
      </div>
      <div>
        <img src="nat-5.jpg" alt="Image 2" />
      </div>
       <div>
        <img src="nat-6.jpg" alt="Image 1" />
      </div>
      <div>
        <img src="nat-7.jpg" alt="Image 2" />
      </div>
       <div>
        <img src="nat-8.jpg" alt="Image 1" />
      </div>
      <div>
        <img src="nat-9.jpg" alt="Image 2" />
      </div>
      {/* Add more slides with images or movies */}
    </Slider>
        </div>
    </div>
  );
};

export default Activity;
