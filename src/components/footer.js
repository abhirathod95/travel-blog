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
            <Col> 
                Test
              </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
