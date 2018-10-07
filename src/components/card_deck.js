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
        <Row className="align-items-stretch" >
          {props.items.map((item, index) => {
              return (
                <CustomCol key={index} sm="4">
                  <CustomCard cardType={props.type} item={item}/>    
                </CustomCol>
              )
            })
          }
        </Row>
  );
};

export default CardDeck;
