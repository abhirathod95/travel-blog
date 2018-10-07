import React from 'react';
import Helmet from 'react-helmet';
import { 
  Container, 
  Row, 
  Col,
  Button,
} from 'reactstrap';
import Banner from '../../components/banner.js';
import Img from "gatsby-image";

export const frontmatter = {
  component: "src/blog/2018-08-17/chichen_itza.js",
  title: "",
  date: "2018-08-17",
  path: "/chichen_itza_travel_journal",
  excerpt: "Seeing one of the seven world wonders, El Castillo Pyramid, was a much needed break from all the relaxing I was doing in Cancun. Unlike my normal way of planning, I went on a day tour with a guide to learn about the Mayan history and culture from someone educated in it. However, the trip didn't just include Chichen Itza, but they also took us to a cenote and the colonial city of Vallodolid.",
  tags: ["Travel Journal", "Summer", "Family Trip", "World Wonder"],
  country: ["Mexico"],
  city: ["Chichen Itza"],
  featuredImage: "Mexico/Chichen_Itza_0.jpg"
};

export default function post(props) {

  var images = [];
  console.log(props.data.allImageSharp.edges)
  props.data.allImageSharp.edges.map((item, i) => {
    images.push(item.node.sizes)
  });
  console.log(images)

  var bannerTitle;
  if (!Array.isArray(frontmatter.city) || !frontmatter.city.length) {
    bannerTitle = frontmatter.title
  } else {
    bannerTitle = frontmatter.city[0]
  }

  return (
    <div>
    <Helmet title={frontmatter.city[0] + ": " + frontmatter.title} />
    <Container fluid className="blog-post">
      <Row>
        <Banner showBottomText showTextBox={false} width="100%" height="50vh" item={{'sizes':images[0], 'subHeading':'Better Ways To','heading':bannerTitle, 'buttonText':'Read More', 'link':'/'}}/>
      </Row>
      <Row>
        <Col xs="12" sm="10" md="8" lg="6">
          <h1 className="text-center">{frontmatter.title}</h1>
          <h5 className="text-center">{frontmatter.date}</h5>
        </Col>
      </Row>
      <Row>
        <Col xs="6">
    			<p>While I went to Cancun to enjoy the beaches and the cocktails, I had to take a break from relaxing to visit <strong>Chichen Itza, one of the new seven wonders of the world</strong>. It’s only a two-hour drive away and gives you a real taste of Mexico away from the resort haven. Most resorts in Cancun are accommodating of this day trip, and buses will pick you up from the hotel’s front door for a full day excursion with lunch and snacks included. Also, the tours don’t just take you to Chichen Itza but also offer options to visit a <strong>cenote</strong> and the colonial town, <strong>Valladolid</strong>. </p>
    		
    			<p>I usually don’t like tours because of their schedules, restricted freedom to explore, and the dozens of other people you have to share your experience with, but I thought this day trip was really good. Most of the ruins are not labeled and don’t have plaques with information about it, and I really appreciated the great information our tour guide gave us throughout the day. For once, I didn’t have to worry about transportation, food, tickets, and whatever else and got to just enjoy the sites. If you aren’t going with a tour, there are many other ways to get there like renting a car or taking a bus. </p>

    			<p>The bus picked everyone up at their hotels early in the morning, and we were off! The two-hour drive was started off with introductions from the tour guide and the bus driver who seemed great. Around an hour and a half into the ride, we stopped at a souvenir store for a restroom break and some shopping. There were all sorts of souvenirs here from wall hangings and clay pots to earrings and magnets. Pretty much anything you could possibly want, but prices were a little high. However, the convenience of shopping for souvenirs in one place was nice.</p>
        </Col>
      </Row>
      <Row> 
        <Col xs="8">
          <div style={{height:"100%"}}>
            <Img position="absolute" fluid={images[1]} />
          </div>
        </Col>
      </Row>
    	<Row>
        <Col xs="6">
    			<p>Now that everyone was awake and ready to see the Mayan ruins, the tour guide gave us a quick rundown of our day’s itinerary before we were getting off again. Before we actually entered the ruins, we were given some refreshments such as water and snacks at the quaint <strong>Mayaland Hotel</strong>. <strong>Take some water bottles to go</strong>, you’re gonna need them. Then, we were taken to a planetarium like building to watch a short 20-minute movie about the Chichen Itza and the Mayan people. It really is quite fascinating how much the Mayans were able to learn so much about astronomy and math without any access to modern day instruments. </p>
    		
    			<p>Note: If you’re not with the tour, then admission to the ruins is <strong>237 pesos</strong> for foreigners. </p>
    		
    			<p>Finally, we were on our way to the ruins! Let me warn you if you go in August, it is <strong>HOT</strong>. So hot that I was dripping 10 minutes in the sun. I had a large floppy hat to shade my face from the sun that kind of helped. Also, there were a lot of vendors on the side of the roads leading up to the ruins trying to sell their wares, so if you didn’t buy any souvenirs before, you definitely can now. </p>
    		
    			<p>And then there it was. <strong>El Castillo</strong>, the central pyramid of Chichen Itza, in the middle of a large field. It is incredibly impressive how accurately the Mayans were able to build this pyramid. </p>
    		</Col>
      </Row>
      <Row> 
        <Col xs="12">
          <div style={{height:"100%"}}>
            <Img position="absolute" fluid={images[2]} />
          </div>
        </Col>
      </Row>
  	  <Row>
    		<Col xs="6">
    			<p>The Chichen Itza was the largest Mayan city that was a pilgrimage place. The pyramid was built to worship the god, Kulkulkan, and functions like a calendar with 91 stairs on each side of the pyramid and the top platform as the 365th step. How they knew that there were 365 days in a year is amazing. During the spring and fall equinoxes, a shadow appears on the pyramid steps looking like a serpent coming down. The <strong>Great Ball Court</strong> is also an interesting piece of Mayan culture. The sport called Pok Ta Pok was similar to basketball, where the teams would use their bodies to pass the ball to the captain who would hit it into the hoop with a racket. The winning captain of the team to first score was then sacrificed. It was seen as an honor and a sure way to go to heaven.  </p>
    		</Col>
  	  </Row>
      <Row className="m-0">
        <Col xs="12" md="4" className="p-1">
          <div className="aspect-ratio-box">
            <Img className="gatsby-img" position="absolute" fluid={images[3]} />
          </div>
        </Col>
        <Col xs="12" md="4" className="p-1">
          <div className="aspect-ratio-box">
            <Img className="gatsby-img" position="absolute" fluid={images[4]} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs="12" md="4" className="p-1">
          <div className="aspect-ratio-box">
            <Img className="gatsby-img" position="absolute" fluid={images[5]} />
          </div>
        </Col>
        <Col xs="12" md="4" className="p-1">
          <div className="aspect-ratio-box">
            <Img className="gatsby-img" position="absolute" fluid={images[6]} />
          </div>
        </Col>
      </Row>
      <Row>
    		<Col xs="6">
    			<p>There are many, many people visiting the ruins at all times, but I was still able to get a few great shots of the pyramid and the ruins alone. You just have to be patient!</p>
    		</Col>
  	  </Row>
  	  <Row>
    		<Col xs="6">
    			<p>After an hour and a half exploring the ruins, we were ready to get out of the sun and eat some lunch. We were given a ticket that gave us access to a very authentic Mexican buffet. The food was so good after being outside walking and very different from all the Tex-Mex I’m used to eating. Afterwards, we went to the cenote. If you don’t know what a cenote is (I definitely didn’t before I went to Mexico), it is a huge natural well in the ground, making it a great place to swim and cool off. Some were actually used for human sacrifices such as the sacred cenote at the Chichen Itza. If you’re not fazed by that, then plan accordingly to bring swimsuits and change of clothes, etc. There was a facility for showering and changing at the cenote I visited. This was one of the places where I wished I wasn’t a part of a tour because we didn’t get nearly enough time to enjoy the cenote and change back before heading out.</p>
    		</Col>
  	  </Row>
      <Row> 
        <Col xs="12">
          <div className="aspect-ratio-box">
            <Img className="gatsby-img" position="absolute" fluid={images[7]} />
          </div>
        </Col>
      </Row>
  	  <Row>
    		<Col xs="6">
    			<p>The last stop on our trip was the colorful town of Vallodolid, Yucatan. The bus dropped us off right in the city center for an hour and half to enjoy. Of course, an hour and a half isn’t much time to really say you’ve seen Vallodolid, but we covered what we could in the city center. </p>
    		
          <div style={{height:"auto"}}>
            <Img position="absolute" fluid={images[8]} />
          </div>

    			<p>The <strong>Cathedral San Gervaiso</strong> was right there where we exited the bus, and then, we had some ice cream, relaxing in the <strong>Parque Francisco Canton Rosado</strong> before heading back to Cancun. On the way back, we were given a tequila shot made from the blue agave that grows in this region, which ended our day trip on a high note!</p>
    		</Col>
  	  </Row>
	  </Container>
  </div>
  );
}

export const query = graphql`
  query ChichenImagesQuery {
    allImageSharp  (filter : {id : {regex : "/Chichen/"} }, sort: {fields : [id]} ) {
      edges {
        node{
          id
          sizes(maxWidth: 2060, cropFocus:SOUTH) {
              ...GatsbyImageSharpSizes
              originalName
          }
        }
      }
    }
  }
`