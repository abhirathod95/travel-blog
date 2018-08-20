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
  component: "src/blog/2018-07-10/chicago.js",
  title: "A 3 Day Itinerary",
  date: "2018-07-10",
  path: "/chicago-itinerary",
  excerpt: "Chicago is a wonderful city to spend a sunny weekend, and there's something to do for everyone whether it's biking the shoreline, picnicking at Millennium Park, or enjoying the art scene. Start planning your quick summer holiday in Chicago!",
  tags: ["Itinerary", "Summer", "City", "Girl's Trip"],
  country: ["United States of America"],
  city: ["Chicago"],
  featuredImage: "Illinois/Chicago_02.jpg"
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
        <Banner showBottomText showTextBox={false} width="100%" height="50vh" item={{'sizes':images[2], 'subHeading':'Better Ways To','heading':bannerTitle, 'buttonText':'Read More', 'link':'/'}}/>
      </Row>
      <Row>
        <Col xs="12" sm="10" md="8" lg="6">
          <h1 className="text-center">{frontmatter.title}</h1>
          <h5 className="text-center">{frontmatter.date}</h5>
        </Col>
      </Row>
      <Row>
        <Col xs="6">
          <p>
            I have been to a lot of cities in the U.S., but somehow, I never made it out to the very popular city of Chicago until now. As an architecture buff, I loved learning about the city and the way it was rebuilt since a fire burned down a large part of the city more than a century ago. Hence, why Chicago is called the Second City. I had lots of fun doing all sorts of activities from browsing museums to bicycling to laughing at a comedy show with my girlfriends. If you’re here for a few days, this is a great itinerary to cover almost all the hot spots Chicago has to offer in an affordable, enjoyable, and jam-packed three-day vacation. Of course, feel free to mix up my itinerary to fit your needs! 
          </p>
          <p>
            <strong>Note:</strong> I visited the weekend after July 4th, and the evenings were still a bit chilly for me! Plan accordingly if you get cold easily like I do. A light cardigan or jacket would be perfect.
          </p>
        </Col>
      </Row>
      <Row> 
        <Col xs="8" >
            <div className="aspect-ratio-box">
              <Img outerWrapperClassName="gatsby-img-outter" className="gatsby-img" position="absolute" sizes={images[3]} />
            </div>
        </Col>
      </Row>
      <Row>
        <Col xs="6">

          <h5 id="day1"><strong>Day 1</strong></h5>

          <p>
          <em>12:00 PM Arrive at hotel</em>
          </p>
          <p>
          <em>1:00 PM Lunch at Gino’s East</em>   
          </p>
          <p>
            We started our trip on a high note with some delicious Chicago style deep dish pizza, and it was totally worth every calorie. Since none of us really got breakfast before traveling, we were ravenous. Luckily, we were seated right before more people came in, but watch out for that lunch rush. Also, don’t forget that deep dish pizza takes <strong>45 minutes to cook</strong>! We kept ourselves fully entertained during the wait watching the Belgium v. Brazil World Cup Match. 
            In case you were wondering what size or how many pizzas to order, a large pizza was just enough to feed four hungry girls and we’re not shy about digging in. 
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs="6">
          <div className="aspect-ratio-box">
            <Img outerWrapperClassName="gatsby-img-outter" className="gatsby-img" position="absolute" sizes={images[4]} />
          </div>
        </Col>
      </Row>
      <Row>
       <Col xs="6">
          <p>
            <em>3:00 PM Museum of Contemporary Art</em>
          </p>
          <p>
            The walk from Gino’s to the museum took about 5 minutes. The museum was a great place to wander around, learn something new, and burn off some of those calories from the pizza. If you have your student ID, admission is $8. Flash photography is not allowed, and some exhibits are definitely not PG safe. Make sure to check out the <strong>Marsipol café</strong> on the first floor which is supposed to be really good and pick up your pin to get a 10% discount in the gift store. 
          </p>
          <p>
            Of course, there is a more famous art museum in Chicago called the Art Institute of Chicago. Go visit if you have more time or if contemporary art isn’t really your thing. I’ve heard that the collection is quite impressive.
          </p>
          <p>
            <em>5:30 PM Signature Lounge at the 96th</em>
          </p>
          <p>        
            The John Hancock Tower, where the Signature Lounge is located, is just a 5-minute walk from the museum. There was a short line to get to the top, but only 10-20 minutes wait tops. Dressing can be casual to get into the lounge. To be seated in the lounge, you are required to <strong>buy an item per person in your party</strong>. Since there were four of us, we were able to get two deserts and two coffees to meet the rule ($40 total for all four of us). Still so much cheaper and much more delicious than waiting in a long line at the Skydeck! If your heart is set on getting that classic picture in the box, then check out the Things I Missed Section. 
          </p>
          <p>
            Before heading out, peek into the ladies’ bathroom. Kind of strange advice, but it also has a stunning view of the city’s downtown without many people in the way. Surprisingly, some of our best group pictures came out really well in the bathroom. 
          </p>
          <p>
            <em>7:00 PM Cloud Gate/Millennium Park</em>
          </p>
          <p>
            We reached Millennium Park just at the right time as the symphony was getting started. Lying there in the cool grass, looking up at the steel fixtures zigzagging, and listening to Tchaikovsky was probably the best memory I’ll have of Chicago. I love when a green space in the middle of the city is so successful at bringing a little bit of peace and community to a busy cityscape like Chicago, and Frank Gehry, who is the architect of Millennium Park, created just the right atmosphere for that. Check out this link for more information about what’s going on in <a href="https://www.cityofchicago.org/city/en/depts/dca/supp_info/mp_calendar.html">Millennium Park</a> during your visit. 
          </p>
          <p> 
            After thirty minutes of chatting and enjoying the music, we decided to finally go see that sculpture that has become so famous in Chicago: The Bean. I actually prefer the sculptor’s name for it, which is Cloud Gate. However, the resemblance to a bean is so uncanny that even I found myself referring to the sculpture as the Bean. 

          </p>
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <div className="aspect-ratio-box">
            <Img outerWrapperClassName="gatsby-img-outter" className="gatsby-img" position="absolute" sizes={images[1]} />
          </div>
        </Col>
      </Row>
      <Row>
       <Col xs="6">
          <p>
            <em>8:30 PM Dinner</em>
          </p>
          <p>
            We opted for a more budget friendly dinner/snacks option by going to a nearby Trader Joe’s to get a light dinner plus all the wine, cheese, and chocolate for a girl’s night at the hotel. 
          </p>
          <p>
            However, here are a few other options closer to Millennium Park for dinner. Some of these places might require reservations weeks in advance due to their high popularity, but they offer a great view of the city’s downtown.
          </p>
          <p> 
            <ul>
              <li>Cindy’s   $$$</li>
              <li>Londonhouse  $$$</li>
              <li>Celeste $$</li>
              <li>Bernie’s Lunch & Supper  $$</li>
            </ul>
          </p>
          <p>
            <em>11:00 PM Nightlife on Hubbard Street</em>
          </p>
          <p>
            We went to <strong>Three Dots and a Dash</strong>, <strong>Bub City</strong>, <strong>The Boss Bar</strong>, and <strong>Fado</strong> which were all pretty much on the same street, making it easy to barhop. Each one had its own unique vibe, but all were lots of fun! After 12 AM, expect to pay a cover at the more packed bars, aka carry some cash. 
          </p>
            <h5 id="day2"><strong>Day 2</strong></h5>
          <p>
            <em>Optional - 8 AM <a href="https://www.cityofchicago.org/city/en/depts/dca/supp_info/millennium_park4.html" title="Fitness Class at Millenium Park">Morning Yoga</a></em>
          </p>
          <p>
            During the summer, the Millennium Park hosts several fitness classes in the mornings. If you’re an early bird or like to get in some exercise while out of town, this is a great opportunity to take advantage of a local Chicago perk.  
          </p>
        </Col>
      </Row>
       <Row> 
        <Col xs="8">
          <div className="aspect-ratio-box">
            <Img outerWrapperClassName="gatsby-img-outter" className="gatsby-img" position="absolute" sizes={images[8]} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs="6">
          <p><em>11 AM Brunch at Little Goat</em> </p>

          <p>To be totally honest, we didn’t make it to our reservations in time (4 girls getting ready before 12 with only one bathroom is a miracle already), but it is supposed to be an amazing café/bakery to grab a pastry or full breakfast. This place is associated with a larger restaurant called The Girl and The Goat, also supposed to be amazing as well. Make a reservation well ahead of time to go, and then tell me all about it since I didn’t get a chance to go. </p>

          <p><em>1 PM Grab a <a href="https://www.divvybikes.com/">Divvy Bike</a> &amp; Explore the Shoreline</em>    </p>

          <p>The Divvy bike was very convenient and a cool way to see the city. It costs <strong>$15/day</strong>, or <strong>$3/use</strong>. We started a little further south on the trail at the Indiana Ave. and Roosevelt station. The Divvy app makes it easy to figure out which stands are closer to you and if there are enough bikes for your entire group. Plan to bring a small backpack to hold water, snacks, and sunscreen to take breaks and recharge in between biking. </p>

          <p>From the bike station, we rode to <strong>Adler Planetarium</strong> which had the most gorgeous view of the Chicago skyline.  Unfortunately, I didn’t have my DSLR to capture it, so iPhone it is! The girls and I decided against going into the planetarium, but if you have children, then this might be a great spot to begin your second day. The <strong>Shedd Aquarium</strong> is also close by and a lot of fun for children. We parked our Divvy bikes at the Divvy station while we looked around, and just hopped back on. Once you get out of the Museum Campus area, there is a clear path to ride on. Don’t forget to ring your bell, follow traffic laws, and slow down around pedestrians. There’s a lot of them!
          After a 10-minute ride from the Planetarium, you will see a way to a big plaza with a large ornate fountain, called <strong>Buckingham Fountain</strong>. There is a <strong>water show</strong> that happens every hour (for most of the day) lasting for 20 minutes. After a few photos here and bathroom/water break, we got back on our bikes. From Buckingham Fountain, we rode for 15 minutes to reach the shoreline, and another 15 minutes on the shoreline to the Divvy station closest to the zoo. </p>

          <p>*If you have kids, then using the Divvy bike might not be possible for you. The bikes are meant for adults and are rather heavy. I would suggest getting a ride using Uber/Lyft/Via or public transportation to get between the places you want to see.</p>

          <p><em>3 PM Lincoln Park Zoo &amp; Conservatory</em>   </p>

          <p>Only a 10-minute walk from where we dropped off the Divvy bikes was the Lincoln Zoo. The best part of this zoo is that it’s <strong>totally FREE</strong>! Before we started to walk through the exhibits, we stopped to grab some snacks and cool down at the café above the gift shop. With some frozen slushies and snacks in hand, we were ready to go! </p>

          <p>To get a map of the zoo, head into the Kovler Lion House right across from the gift shop. There’s also a fun activity for kids looking for code words around the zoo to win a prize, so be sure to ask the employees for the booklet for your kids. </p>

          <p>On the north side of the zoo, there is Lincoln Park Conservatory, a cozy botanical gardens established in the 1870s that is also free. This Victorian era building houses unique plants from all around the world. Check out the orchid room for a beautiful display of all sorts of orchids. </p>

          <p><em>6 PM Chill on North Avenue Beach</em> </p>

          <p>After all that biking and walking, we all just opted to slow down for a bit on the beach. Going back towards the shoreline, where we came from, there is North Avenue Beach. If you wanted to get into the water, plan to bring a swimsuit and towels, and a change of clothes to get back to your hotel. The water was pretty cold, so we weren’t too upset about missing our chance to get in.</p>

          <p><em>10 PM The Second City Comedy Club</em>         </p>

          <p>The show we went to was called <strong>Dream Freaks Fall from Space</strong>. My friend knew many people who told her this was a must do in Chicago. Some of the comedic alumni from this famous club include Stephen Colbert, Steve Carrell, Tina Fey, and Amy Poehler to name a few. The humor was a quirky, enlightening, hilarious and well worth the <strong>$48 General Admission ticket</strong>. We arrived early around 10:15 to make sure we got good seats since it is first come first serve for general admission. </p>

          <p>Buy tickets in advance online; they sold out pretty quickly for every show on the weekends. Even though the website said the show lasts from 11 PM-1 AM, our show went until 2 AM. </p>

          <h5 id="day3" className="text-center"><strong>Day 3</strong></h5>

          <p><em>10 AM Chicago Architecture Tour</em></p>

          <p>This tour is one of those classic must dos while in Chicago for the first time. We quickly grabbed some breakfast to go from Argo Tea Café close to the meet point on Michigan Ave at the DuSable bridge. The tour group we went with was <strong>Shoreline Sightseeing</strong>, and our tour guide was hilarious! More importantly, he was really informative about the history of Chicago and how it got its name as the Second City and as the Windy City. You can expect to be on board for 1 hour and 3o minutes for the whole tour from boarding to getting off.</p>
        </Col>
      </Row>
      <Row className="m-0">
        <Col xs="12" md="4" className="p-1">
          <div className="aspect-ratio-box">
            <Img outerWrapperClassName="gatsby-img-outter" className="gatsby-img" position="absolute" sizes={images[9]} />
          </div>
        </Col>
        <Col xs="12" md="4" className="p-1">
          <div className="aspect-ratio-box">
            <Img outerWrapperClassName="gatsby-img-outter" className="gatsby-img" position="absolute" sizes={images[10]} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs="12" md="4" className="p-1">
          <div className="aspect-ratio-box">
            <Img outerWrapperClassName="gatsby-img-outter" className="gatsby-img" position="absolute" sizes={images[11]} />
          </div>
        </Col>
        <Col xs="12" md="4" className="p-1">
          <div className="aspect-ratio-box">
            <Img outerWrapperClassName="gatsby-img-outter" className="gatsby-img" position="absolute" sizes={images[12]} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs="6">
          <p>I would suggest <strong>booking tickets online</strong> if you chose this tour because they offer a $5 off the ticket price that way. You might also benefit from looking on Groupon for a cheaper tour price too. Actually, it’s a good idea to look for tickets for all activities in Chicago on Groupon. There’s some sweet deals on there.      </p>

          <p><em>12 PM Chicago Cultural Center</em> </p>

          <p>Close by to the tour drop off point is the Chicago Cultural Center. There were a few interesting art exhibits on display at the Center, but the main attraction was the beautiful <strong>Tiffany stained glass dome</strong> on the second floor. All exhibits in the building are <strong>free</strong> for the public to enjoy. 
          If you want, take the chance to revisit Millennium Park right across the street to see it in broad daylight. It’s a different lighting, atmosphere, and crowd to take pictures with.</p>
        </Col>
      </Row>
      <Row >
        <Col xs="6">
          <div className="aspect-ratio-box">
            <Img outerWrapperClassName="gatsby-img-outter" className="gatsby-img" position="absolute" sizes={images[13]} />
          </div>
        </Col>
      </Row>          
      <Row>
        <Col xs="6">
          <p><em>1 PM Lunch</em> </p>

          <p>My friends and I are huge fans of Thai food, and we stumbled across this hidden Thai place called Star of Siam ($$) close to the Cultural Center that was incredible. Super affordable and large portions. My kinda place! </p>

          <p><em>3 PM Walk the Magnificent Mile</em></p>

          <p>After leaving the restaurant with satisfied tummies, we decided to wander along the Magnificent Mile, which is a high-end shopping street starting right at the Cultural Center. It was all window shopping for us this time, but maybe next time! </p>

          <p><em>4 PM Navy Pier</em>      </p>

          <p>The Navy Pier was used for many things before it was turned into its current entertainment center status. With all the restaurants, stores, and carnival rides you could want, you could spend a whole day just on the Pier. An unlimited pass for all rides is $40/person, but if you just want to ride the Ferris Wheel, it costs $16/adults and $13/child. There are loads of ticketed and free events going on at all times. </p>

          <p>Best way to end the vacation is grabbing some food for dinner from the Navy Pier food court, sitting outside, and just people watching as the cool summer day turns to night. </p>

          <p><strong>Note:</strong> If you are in Chicago in the summer, the Navy Pier has fireworks at 9:30 PM on Wednesdays and 10:15 PM on Saturdays at the Navy Pier</p>

          <h5 id="day4"><strong>Day 4</strong></h5>

          <p><em>11 AM Check out of Hotel</em></p>

          <p>Getting to the airport in Chicago is an event itself. Even though I left with 3 hours to spare before boarding, I was biting my nails throughout my Via ride about whether I would get there in time. The traffic was horrible! Luckily my flight was delayed by 40 minutes or I would have had to catch another flight. Apparently, the traffic to the airport is always a nightmare in Chicago, so I would take the Metro or leave with lots of time for the airport if I ever came back. </p>
        </Col>
      </Row>
      <Row>
        <Col xs="4" className="p-1">
          <div className="aspect-ratio-box">
            <Img outerWrapperClassName="gatsby-img-outter" className="gatsby-img" position="absolute" sizes={images[15]} />
          </div>
        </Col>
        <Col xs="4" className="p-1">
          <div className="aspect-ratio-box">
            <Img outerWrapperClassName="gatsby-img-outter" className="gatsby-img" position="absolute" sizes={images[16]} />
          </div>
        </Col>
      </Row>          
      <Row>
        <Col xs="6">
          <p><strong>Transportation</strong> </p>

          <p>The girls and I mostly got around from place to place using <strong>Uber, Lyft, or Via</strong> based on prices, walking, and Divvy bikes. Unfortunately, I didn’t get to use the <strong>public transportation</strong> at all, which I usually like to do when I travel. The Metro probably would have been a much better option for getting to and from the airport on time instead sitting in traffic worrying. 
          For those of you who would like to use the bus/train system, I’ve included helpful links for you to start planning. Thanks for being environmentally conscious!</p>

          <p><a href="https://www.choosechicago.com/plan-your-trip/transportation/getting-around-chicago/">Public Transportation Information</a></p>

          <p><a href="https://www.transitchicago.com/maps/">Train Maps</a></p>

          <p><strong>Other Things to Do I Missed</strong></p>

          <ul>
          <li><a href="https://www.adlerplanetarium.org/">Adler Planetarium</a>  </li>

          <li><a href="http://www.artic.edu/">Art Institute of Chicago</a></li>

          <li><a href="https://www.fieldmuseum.org/">Field Museum</a>  </li>

          <li><a href="https://flwright.org/visit/homeandstudio">Frank Lloyd Wright Home and Studio</a>  </li>

          <li><a href="https://www.sheddaquarium.org/">Shedd Aquarium</a>  </li>

          <li><a href="http://m.theskydeck.com/">Sky Deck</a>  </li>

          <li>Wicker Park/606 Trail  </li>

          <li>Wrigley Field</li>
          </ul>
        </Col>
      </Row>
    </Container>
    </div>
  );
}


export const query = graphql`
  query ChicagoImagesQuery {
    allImageSharp  (filter : {id : {regex : "/Chicago/"} }, sort: {fields : [id]} ) {
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