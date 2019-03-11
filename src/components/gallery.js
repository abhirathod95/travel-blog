import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function PrevArrow(props) {
  return (
    <FontAwesomeIcon color={"#000000"} icon={['fas', 'angle-left']} size="2x" fixedWidth onClick={props.onClick}/>
  );
}

function NextArrow(props) {
  return (
    <FontAwesomeIcon color={"#000000"} icon={['fas', 'angle-right']} size="2x" fixedWidth onClick={props.onClick}/>
  );
}

class Gallery extends React.Component {

  render() {
    
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      accessibility: true,
      adaptiveHeight:true,
      arrows: true,
      slidesToScroll: 2,
      slidesToShow: 4,
      className: "slide-div",
      prevArrow: <PrevArrow/>,
      nextArrow: <NextArrow/>,
      responsive: [
        {
          breakpoint: 2100,
          settings: {
            slidesToScroll: 2,
            slidesToShow: 3,
            infinite: true,
            dots: true,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 2,
            infinite: true,
            dots: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 1,
            infinite: true,
            dots: true,
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 1,
            infinite: true,
            dots: false,
          }
        }
      ]
    };

    console.log(this.props.items)

    return (
      <Slider {...settings}>
        {this.props.items}
      </Slider>
    )
  }
}


export default Gallery