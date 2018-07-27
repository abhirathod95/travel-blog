import React from 'react';
import Link from 'gatsby-link';
import { 
  Row,
  Col,
  Button
 } from 'reactstrap';


const CustomCol = (props) => <Col widths={['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']} {...props} />;

export default class CustomCard extends React.Component {
  constructor(props) {
    super(props);
  }

  getHorizontalCard() {
    return(
      <Row className="justify-content-center m-0 mb-5">
        <CustomCol md="6" lg="6" xl="3">
          <div className="aspect-ratio-box">
            <img src={this.props.item.src} alt={this.props.item.alt} style={{'objectFit':'cover'}}/>
          </div>
        </CustomCol>
        <Col md="6" lg="6" className="">
            <div className="custom-raleway m-0 mt-2 mb-2 pl-2 pr-2 pt-1 pb-1" style={{'display':'inline-block', 'backgroundColor':'#229990'}}>
              {this.props.item.date}
            </div>
            <h2 className="m-0 mb-2 p-0"> 
              {this.props.item.title}
            </h2>
            {this.props.item.subtitle ? <div>{this.props.item.subtitle}</div> : false}
            <div>
              {this.props.item.content}
            </div>
            {this.props.item.buttonText ? <Button outline style={{'margin-top':'auto', 'flex':'0 0 auto'}}>{this.props.item.buttonText}</Button> : false}

        </Col>
      </Row>
    )
  }

  getVerticalCard() {
    return (
      <div className="m-0 p-0">
        <div className="aspect-ratio-box">
          <img src={this.props.item.src} alt="Card image cap" style={{'objectFit':'cover'}}/>
        </div>
        <div className="custom-raleway m-0 mt-2 mb-2 pl-2 pr-2 pt-1 pb-1" style={{'display':'inline-block', 'backgroundColor':'#229990'}}>
          {this.props.item.date}
        </div>
        <h2 className="m-0 mb-2 p-0"> 
          {this.props.item.title}
        </h2>
        {this.props.item.subtitle ? <div>{this.props.subtitle}</div> : false}
        <div>
          {this.props.item.content}
        </div>
      </div>
    )
  }

  getOverlayCard() {
    return (
      <div className="m-0 p-0">
        <div className="aspect-ratio-box">
            <img src={this.props.item.src} alt="Card image cap" style={{'objectFit':'cover'}}/>
          <div className="aspect-ratio-box-inside d-flex flex-row">
            <div className="text-box">
            <h4 className="d-block d-md-none m-0 p-4">{this.props.item.title}</h4>
            <h4 className="d-none d-md-block m-0 p-4">{this.props.item.title}</h4>
            </div>
          </div>
      </div>
      </div>
    )
  }

  getCard() {
    if (this.props.loc == "top") {
      return this.getVerticalCard();
    } else if (this.props.loc == "left"){
      return this.getHorizontalCard();
    } else {
      return this.getOverlayCard();
    }
  }

  render() {
    return (
      <div>
      {this.getCard()}
      </div>
    );
  };
}

CustomCard.defaultProps = {
  loc: 'left',  
};
