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
  component: "src/blog/2018-08-19/american_southwest.js",
  title: "Summer Roadtrip through the American Southwest",
  date: "2018-08-19",
  path: "/american-southwest-roadtrip",
  excerpt: "",
  tags: ["Travel Journal", "Summer", "Roadtrip", "Hiking","Camping","Girl's Trip"],
  country: ["United States of America"],
  city: ["American Southwest", "New Mexico","Arizona","Utah","Nevada"],
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
			<p>The summer after graduating college was a time of living with a heightened sense of “I can do anything in the world!” for me. I wanted to be out there, exploring the world and making my mark. I used to think I had to go abroad to New Zealand or Iceland to be amazed by nature, but there’s a whole lot of beauty to explore right here in America. So, my friend, M, and I, both about to begin the scary adventure that is medical school, decided to tackle an even scarier road trip that would end up taking my tires along 4000 miles of dusty roads from start to end. </p>

			<p>Starting from Austin, Texas, we left with our car full of camping gear, snacks, and road trip tunes on load. There were moments of laughter, joy, and amazement, but there were also moments of feeling tired, hot, cranky, and just plain homesick. There was a lot I learned about myself as I tackled the desert heat, difficult hikes, and hours of driving. I learned that I could handle it. All of it. What a great realization to make before I started med school. Especially where the amount of content you learn in a semester has been compared to drinking from a fire hydrant’s stream of water. Talk about intense.</p>

			<p>Our 10-day trip required lots of long hours of driving and many early mornings, something we were both prepared to take on. However, for a more leisurely trip, you should probably consider adding a few more days. Also, WEAR SUNSCREEN! </p>

			<p>PRO TIP: Buy the National Parks Pass for $80 to cover the entrance of one car at all parks for a year. Normal entrance fee is $30 per car at each park. </p>

			<h5 id="stop1whitesandsnewmexico">Stop 1: <em>White Sands, New Mexico</em></h5>

			<p>Our first dusty stop was seeing the pure white sand dunes in the middle of an orange red desert landscape. Years of erosion of the gypsum salt rocks had caused these dunes to form. At certain times in the day, free tours given by the park rangers to learn more about why the dunes move, what kind of wild life takes up residence, and how the plants survive the tough environment. However, the coolest thing to do here is to <strong>sand board</strong> down those sweet dunes. You can rent a sled from the front office. </p>

			<h5 id="stop2truthorconsequencesnewmexico">Stop 2: <em>Truth or Consequences, New Mexico</em></h5>

			<p>A town called Truth or Consequences has to peak your interest. I mean, what happens if a town person were to tell a lie? The real story is not as dramatic. The name actually comes from a radio show. The town, originally called Hot Springs, renamed themselves after the host of the show called   Truth or Consequences claimed to air his 10th anniversary show from the town to change its name to his show’s name first. We didn’t do much here, just stopped at the city board to read about the history and take a quick picture before moving on. </p>

			<h5 id="stop3pietownnewmexico">Stop 3: <em>Pie Town, New Mexico</em></h5>

			<p>Not a scheduled stop, but somewhere we just decided to stop and rest. Like the town before, Pie Town was a name that caught our eye. It’s practically one of the smallest towns I’ve ever seen with one main feature. A shop of pies. It’s actually a stop that a lot of people apparently make because they had a map covered in pushpins that visitors had placed from practically every corner of the world. I had a delicious slice of peach pie and drank some coffee before hitting the road. Best choice I ever made. </p>

			<h5 id="stop4grandcanyonarizona">Stop 4: <em>Grand Canyon, Arizona</em></h5>

			<p>Driving up from White Sands through Flagstaff, we finally reached our hotel in Williams, 30 minutes from the Grand Canyon South Rim. 6 AM, bright and early, we packed our hiking gear and got ready for our first serious hike half way down into the canyon on the <strong>South Kaibab Trail</strong>. With few people there so early, we were able to get decent parking spots. Funniest sight to see before heading in was deer drinking from the water taps used to fill up your water bottles. Maybe disgusting for later hikers planning to fill up, not knowing that there’s deer saliva all over the faucet but amusing to observe for sure. </p>

			<p>Getting in early was critical for hiking because summer time can get really hot really fast. The South Kaibab trail is one of the trails that can take you all the way down to the canyon floor.  As soon as you start down the trail, the view of the canyon is so different than from up top. The Ooh Ahh Point was a 20-minute hike from the top to reach, which is a popular point for most people to turn back from, but we forged on. We didn’t have the time to go all the way down, and only made it about 1/3 of the way down before wanting to get out of the heat. Unfortunately, shade is a rare commodity, and the way back up is a long, steep incline. I made the mistake of intaking too much water without enough salt and ended up having to swallow an electrolyte tablet whole in order to feel better. The risk for a heat stroke is real. Don’t ignore the warning signs. </p>

			<p>After a quick, overpriced lunch at the small café in the park, we were rested enough to do a much easier walk along the <strong>Rim Trail</strong>. Talk about a piece of cake after the South Kaibab trail. However, the views were still just as stunning without requiring so much exertion. That sounds like a great deal to me! </p>

			<p>The next morning, we had planned to head back in for a short hike. But plans always change, and we just rolled with it. Our first day of hiking left us more tired than we had anticipated (especially after all the driving we did), so we slept in and checked out at 11 PM. </p>

			<h5 id="stop5hooverdam">Stop 5: <em>Hoover Dam</em></h5>

			<p>When a sign for the Hoover Dam came up on our way to Las Vegas, we decided to take a little detour and check it out. Even though it wasn’t a planned stop, we welcomed the small break in driving to see the largest dam in the USA. </p>

			<h5 id="stop6lasvegasnevada">Stop 6: <em>Las Vegas, Nevada</em></h5>

			<p>Las Vegas is not a city that can be done in half a day, but it was all the time we could spare for fun and games on our outdoor adventure road trip. If you had more than 10 days to do this trip, Las Vegas would be a good place to add a few more days to. </p>

			<p>For lunch, we had the best burritos at <strong>Taco Y Taco Mexican Eatery</strong> that we had ever tasted. Literally the best ever. I thought I was stuffed but stepping back into the whooping 113-degree heat (cookies baking on the sidewalk heat), we couldn’t resist stopping again at the vintage frozen custard shop, <strong>Nielson’s</strong>, next door to cool down.  </p>

			<p>With the little time we had left in the evening, we decided to get one cocktail, tour two casinos, and watch the Bellagio water show before hitting the sack for an early morning drive. </p>

			<h5 id="stop7zionnationalparkutah">Stop 7: <em>Zion National Park, Utah</em></h5>

			<p>Our next stop required leaving super early in the morning in order to secure a camp site. Like 3 AM early in the morning. As you can imagine, coffee was a must this morning. However, seeing the sunrise while driving through the rocky terrain helped ease the pain of waking up too early. After arriving around 5:30 AM at the park, we slept in the car until 8 AM waiting for a camp site to free up. And luckily, we got one! </p>

			<p>Honestly, Zion was the highlight of our trip. Camping for two days in the South Campground under the Watchman, hiking the <strong>Narrows</strong>, surviving <strong>Angel’s Landing</strong>, cooling off in a brook branching off the Virgin River are my fondest memories from the trip. The Narrows was a wonderful trek to make to get out of the hot sun. Luckily, the day we were there, there wasn’t a possibility for flash flooding to worry about. We hiked 3 hours in the river before making the decision to turn back around because we were getting too cold! It made getting back into the sun feel so wonderful for once. On the other hand, the hike up Angel’s Landing was on a completely different level. Let me just say that I am not that athletic at all, and I definitely don’t have a lot of stamina. After more than 20 switchbacks and a long incline, we still had the last terrifying half a mile to go. With 1000-foot drops on either side, I clung to the chain rope for dear life all the way. The hardest part was having to be careful when there were people coming in the opposite direction and sometimes, having to let go of the chain for them to pass. The fact I actually made it to the very top of Angel’s Landing was a huge accomplishment in my mind, and for fifteen minutes, I relished the feeling of standing on top of the world. However, our post-victory selves were soon feeling the heat. The temperature was quickly picking up, and we had been hiking for 3 hours to reach the top. By the time we reached the trail head, I had to rush to the bathroom to dunk my head under water to cool it down. My brain felt like an egg frying under the sun’s harsh rays. Again, suffering from the heat is a serious thing. If I could do the hike again, I would take way more precautions for it than I did. Once I was feeling less nauseous, I could finally process, standing at the bottom of Angels Landing, that I had been all the way up at the tip of that mountain just two hours ago. What an adventure! We did several other shorter and easier hikes as well in the evenings, such as the <strong>Watchman's Trail</strong> and the <strong>Lower/Upper Emerald Pools Trail</strong>. Check out my post about all my hikes in Zion for more information! </p>

			<p>After each full day of hiking and pushing our bodies to their literal extreme, we would come back to our campsite to cook some noodle soup and talk until the campground grew pitch dark. At night, all of the twinkling stars would come out of hiding. I laid there in my sleeping bag watching the trees sway all night to the strong cool wind that was a godsend after upper 100-degree temperatures all day. </p>

			<p>Zion was a green oasis in the middle of the hot arid desert, and we welcomed the brief change in scenery the two days we were there before driving back into Arizona. Our way out was taking the scenic drive that allows you to have a glimpse at the Checkerboard Mesa cliffs and more. </p>

			<h5 id="stop8lowerantelopecanyonarizona">Stop 8: <em>Lower Antelope Canyon, Arizona</em></h5>

			<p>What trip to the Southwest would be complete without stopping at the famous Antelope Canyons. We opted to visit the less popular Lower Antelope Canyons. Doesn’t mean there still weren’t busloads of people there when we arrived. You have to buy tickets way ahead of time to go, just FYI. Usually 10 AM to 1 PM is a good time to schedule your tour so that there’s good lighting for your photos in the canyon. We went with <strong>Ken’s Tours</strong> out of the two companies that work there. The tour started with us climbing down a narrow staircase into a narrow slight in the ground practically invisible before. Can I just say that this is one of the most beautiful places I've ever seen and its not even that big. Everywhere you look, its amazing. My favorite was looking up and seeing the bright blue sky contrast the vibrant oranges of the canyon. Since we didn’t take the photography tour, I only had my iPhone to try and capture all the beauty. Surprisingly, the iPhone was up to the task with a little help from the tour guide. Standing at the front of the group meant I was the lucky person whose phone the tour guide used to take some great photos. Main tip he gave us was to change the camera setting to Vivid to really enhance the colors.  </p>

			<p>Usually people head to Bryce Canyon after Zion, but our tour slots and the fact that Page, Arizona (town closest to the slot canyons) isn't too far from either park convinced us to squeeze in the Antelope Canyons in between. </p>

			<h5 id="stop9horseshoebendarizona">Stop 9: <em>Horseshoe Bend, Arizona</em></h5>

			<p>Just 15 minutes from the Antelope Canyons is one of the best parts of the Colorado River, Horseshoe Bend. The river does this crazy turn that has turned into one of the most photographed destinations in America. There is a short hike to get there, nothing too difficult, so it’s really accessible for most people. Be prepared to hunt for a parking spot for a little while. </p>

			<h5 id="stop10brycecanyonnationalparkutah">Stop 10: <em>Bryce Canyon National Park, Utah</em></h5>

			<p>Here’s a park dedicated to showcasing the funniest named formations called the <strong>hoodoos</strong>. Despite being a smaller park, the amphitheater has an impressive view looking out over the Utah landscape, especially impressive at sunrise and sunset. Before the golden hour, M and I went a little way down the <strong>Queen’s Garden Trail</strong> to get a closer look at the hoodoos before heading back up at sunset. We stood, a captive audience at the edge of the amphitheater, and saw an orchestra of colors play out in the sky, lighting up the hoodoos at sunset. It truly was a magical sight to see. </p>

			<h5 id="stop11archesnationalparkutah">Stop 11: <em>Arches National Park, Utah</em></h5>

			<p>To be honest, we stayed in our car for the most part due to the extremely high temperatures outside, just getting out at the important spots and walking in a little to appreciate the arches. After seeing the last few incredible stops, I have to say that I wasn’t as impressed with this park. Or maybe its just me being biased due to the heat. Also, plan to have a lot of water on you before heading into the park because there aren’t many places to fill up. If I were to pick out a few highlights, the <strong>Double Arch</strong> and the famous <strong>Delicate Arch</strong> were worth seeing. Next time, I plan to come during cooler weather to actually hike closer to the Delicate Arch and some of the other trails. You win this time, sun, but next time, I’ll come more prepared. </p>

			<h5 id="stop12canyonlandnationalparkutah">Stop 12: <em>Canyonland National Park, Utah</em></h5>

			<p>Since we didn’t spend too much time at Arches National Park, we were able to squeeze in a quick visit to Canyonlands that we weren’t originally planning. This park would have been a great place to camp for the night because it’s so dark out that all the stars really show up in the sky. But for our quick visit, the <strong>Mesa Arch</strong> was the one thing we chose to see. It perfectly frames the canyonlands spreading out far and wide behind it. And the trail to see the arch was short and easy. Win win! </p>

			<h5 id="stop13monumentvalley">Stop 13: <em>Monument Valley</em></h5>

			<p>Driving through Monument Valley in the evening was so beautiful. The sky was shaded in colors of purple, pink, orange, and yellow, enhancing the orange rock of the tall standing formations. Once it got a little darker, the monuments stood as silhouettes in the purple light. In that moment, it was striking how appropriate the name Monument Valley really was. </p>

			<h5 id="stop14santafenewmexico">Stop 14: <em>Santa Fe, New Mexico</em></h5>

			<p>Good food, colorful mesa buildings, and friendly people. That is Santa Fe. I thought one day was enough to enjoy the city and all it had to offer. Check out my Santa Fe Travel Guide for more! We got brunch at one of the many Mexican restaurants in the city center before doing a little window shopping and appreciating all of the local wares. Afterwards, we decided to check out a museum showcasing an artist’s work we both really liked, the <strong>Georgia O’ Keefe Museum</strong>. Then, we went to an attraction that was quite different from anything we had been to before called <strong>Meow Wolf</strong>. It’s an interactive modern art experience, and I’ll leave it at that. I don’t want to ruin the surprise for you if you decide to go, but what a way to end our trip before finally heading home.  </p>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export const query = graphql`
  query SouthwestImagesQuery {
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