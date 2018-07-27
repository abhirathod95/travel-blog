import React from 'react';
import Link from 'gatsby-link';
import { Card, 
  CardImg, 
  CardLink,
  CardText, 
  CardBody,
  CardTitle, 
  CardSubtitle, 
  Button,
  Container, 
  Row, 
  Col  } from 'reactstrap';
import CustomCard from '../components/cards.js'
import ImageTips from '../images/tips.jpg'
import Chicago0 from '../images/United States of America/Illinois/Chicago_0.jpg'
import Page0 from '../images/United States of America/Arizona/Page_0.jpg'
import Amsterdam0 from '../images/Netherlands/Amsterdam_0.jpg'
import SantaFe0 from '../images/United States of America/New Mexico/Santa_Fe_0.jpg'


const CustomCol = (props) => <Col widths={['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']} {...props} />;

const items = [
  {'title':'OUR FAVORITE 10 DESIGN HOTELS WORLDWIDE', 'src':Amsterdam0, 'date': 'March 10, 2018', 'content': 'This is some quick example text to build on the card title and yeah.'},
  {'title':'OUR FAVORITE 10 DESIGN HOTELS WORLDWIDE', 'src':ImageTips, 'date': 'March 10, 2018', 'content': 'This is some quick example text to build on the card title and yeah.'},
  {'title':'OUR FAVORITE 10 DESIGN HOTELS WORLDWIDE', 'src':SantaFe0, 'date': 'March 10, 2018', 'content': 'This is some quick example text to build on the card title and yeah.'},
]


const Tips = (props) => {
  return (
      <Container fluid className="m-0 p-0">
        <Row className="justify-content-center align-items-stretch" >
          { items.map((item) => {
              return (
                <CustomCol sm="3">
                  <CustomCard loc={'top'} item={item}/>    
                </CustomCol>
              )
            })
          }
        </Row>
      </Container>
  );
};

export default Tips;
