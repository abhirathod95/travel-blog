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
import ImageTips from '../images/tips.jpg'
import Chicago0 from '../images/United States of America/Illinois/Chicago_0.jpg'
import Page0 from '../images/United States of America/Arizona/Page_0.jpg'
import Amsterdam0 from '../images/Netherlands/Amsterdam_0.jpg'
import SantaFe0 from '../images/United States of America/New Mexico/Santa_Fe_0.jpg'


const CustomCol = (props) => <Col widths={['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']} {...props} />;

const Tips = (props) => {
  return (
<Container fluid className="m-0 p-0">
        <Row className="justify-content-center align-items-stretch" >
          <CustomCol sm="12" md="3" >    
            <CardBody className="m-0 p-0">
              <div className="wrapper">
                <CardImg top  src={Amsterdam0} alt="Card image cap" style={{'objectFit':'cover'}}/>
              </div>
              <div className="custom-raleway m-0 mt-2 mb-2 pl-2 pr-2 pt-1 pb-1" style={{'display':'inline-block', 'backgroundColor':'#229990'}}>
                March 10, 2018
              </div>
              <h2 className="m-0 mb-2 p-0"> 
                OUR FAVORITE 10 DESIGN HOTELS WORLDWIDE
              </h2>
              <div>
                This is some quick example text to build on the card title and yeah. This is some quick example text to build on the card title and yeah.This is some quick example text to build on the card title and yeah. This is some quick example text to build on the card title and yeah.This is some quick example text to build on the card title and yeah.
              </div>
            </CardBody>
          </CustomCol>
          <CustomCol sm="12" md="3" >    
            <CardBody className="m-0 p-0">
              <div className="wrapper">
                <CardImg top  src={Chicago0} alt="Card image cap" style={{'objectFit':'cover'}}/>
              </div>
              <div className="custom-raleway m-0 mt-2 mb-2 pl-2 pr-2 pt-1 pb-1" style={{'display':'inline-block', 'backgroundColor':'#229990'}}>
                March 10, 2018
              </div>
              <h2 className="m-0 mb-2 p-0"> 
                OUR FAVORITE 10 DESIGN HOTELS WORLDWIDE
              </h2>
              <div>
                This is some quick example text to build on the card title and yeah. This is some quick example text to build on the card title and yeah.This is some quick example text to build on the card title and yeah. This is some quick example text to build on the card title and yeah.This is some quick example text to build on the card title and yeah.
              </div>
            </CardBody>
          </CustomCol>
          <CustomCol sm="12" md="3" >    
            <CardBody className="m-0 p-0">
              <div className="wrapper">
                <CardImg top  src={SantaFe0} alt="Card image cap" style={{'objectFit':'cover'}}/>
              </div>
              <div className="custom-raleway m-0 mt-2 mb-2 pl-2 pr-2 pt-1 pb-1" style={{'display':'inline-block', 'backgroundColor':'#229990'}}>
                March 10, 2018
              </div>
              <h2 className="m-0 mb-2 p-0"> 
                OUR FAVORITE 10 DESIGN HOTELS WORLDWIDE
              </h2>
              <div>
                This is some quick example text to build on the card title and yeah. This is some quick example text to build on the card title and yeah.This is some quick example text to build on the card title and yeah. This is some quick example text to build on the card title and yeah.This is some quick example text to build on the card title and yeah.
              </div>
            </CardBody>
          </CustomCol>
        </Row>
      </Container>
  );
};

export default Tips;
