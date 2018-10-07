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


const CustomCol = (props) => <Col widths={['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']} {...props} />;

const CardDeck = (props) => {
  return (
      <Container fluid className="m-0 p-0">
        <Row className="justify-content-center align-items-stretch" >
          {props.items.map((item, index) => {
              return (
                <CustomCol key={index} sm="12" md="4" lg="4" xl="3">
                  <CustomCard loc={'top'} item={item}/>    
                </CustomCol>
              )
            })
          }
        </Row>
      </Container>
  );
};

export default CardDeck;
