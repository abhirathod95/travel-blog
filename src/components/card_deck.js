import React from 'react'
import { Row, Col } from 'reactstrap'
import CustomCard from '../components/cards.js'

const CustomCol = (props) => (
  <Col
    className="spaced-col"
    widths={['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']}
    {...props}
  />
)

const CardDeck = (props) => {
  return (
    <Row className="align-items-stretch no-marg-pad">
      {props.items.map((item, index) => {
        return (
          <CustomCol key={index} sm="4">
            <CustomCard cardType={props.type} item={item} />
          </CustomCol>
        )
      })}
    </Row>
  )
}

export default CardDeck
