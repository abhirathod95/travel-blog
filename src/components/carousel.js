import React from 'react';
import {
  Button,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import Banner from '../components/banner.js'
import Chicago0 from '../images/United States of America/Illinois/Chicago_0.jpg'
import Page0 from '../images/United States of America/Arizona/Page_0.jpg'
import Amsterdam0 from '../images/Netherlands/Amsterdam_0.jpg'
import SantaFe0 from '../images/United States of America/New Mexico/Santa_Fe_0.jpg'

const items = [
  {
    src: Amsterdam0,
    alt: 'Amsterdam',
    heading: 'Amsterdam',
    link: '/',
    subHeading: 'Explore',
    buttonText: 'Read More'
  },
  {
    src: Chicago0,
    alt: 'Chicago',
    heading: 'Chicago',
    link: '/chicago-itinerary',
    subHeading: 'Explore',
    buttonText: 'Read More'
  },
  {
    src: SantaFe0,
    alt: 'Santa Fe',
    heading: 'Santa Fe',
    link: '/',
    subHeading: 'Explore',
    buttonText: 'Read More'

  }
];

class HomeCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item, i) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={i}
        >
          <Banner width="100%" height="100vh" item={item}/>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default HomeCarousel;