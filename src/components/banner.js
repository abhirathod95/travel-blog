import React from 'react';
import Link from 'gatsby-link';
import { 
	Button,
	Container, 
	Row, 
	Col 
} from 'reactstrap';


export default class Banner extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
  	return (
			<Container fluid className="banner" style={{'minHeight': this.props.height, 'minWidth': this.props.width}} >
					<img src={this.props.item.src} alt={this.props.item.alt}/>
					<h1 className={this.props.showBottomText ? "d-block display-1" : "d-none"} style={{'position':'absolute', 'bottom':'0', 'marginBottom':'-3rem'}}>{"Chicago".toUpperCase()}</h1>
					<div className={this.props.showTextBox ? "text-box" : "d-none"}>
						<Row>
							<Col>
								<hr/>
							</Col>
							<Col className="text-center">
								{this.props.item.subHeading}
							</Col>
							<Col >
								<hr/>
							</Col>
						</Row>
						<Row >
							<Col className="text-center">
								<h1 className="text-center d-block d-md-none display-4 custom-raleway">{this.props.item.heading}</h1>
								<h1 className="text-center d-none d-md-block display-2 custom-raleway">{this.props.item.heading}</h1>
							</Col>
						</Row>
						<Row>
							<Col className="text-center">
		    					<Button outline color="dark" size="lg" tag={Link} to={this.props.item.link}>{this.props.item.buttonText}</Button>
							</Col>
						</Row>
					</div>
			</Container>
	)
  }
}

Banner.defaultProps = {
	showTextBox: true,
	showBottomText: false
};