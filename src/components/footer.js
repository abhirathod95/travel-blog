import React from 'react';
import {Link} from 'gatsby';
import { 
  Container, 
  Row, 
  Col,
} from 'reactstrap';


export default class Footer extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="footer">
        <Container fluid>
          <Row>
            <Col className="d-flex align-items-center justify-content-center"> 
                <p className="text-center">
                  Copyright © 2019 Ramya Krothapally. All rights reserved.
                  <br></br>
                  wheretonextdoc@gmail.com
                </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
