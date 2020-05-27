import React, { Component } from "react";
import {Container, Row} from "reactstrap";

import "./css/home.css";

export default class Home extends Component {

  render() {
    return (
        <Container className={'home'}>
          <Row>
            Home
          </Row>
        </Container>
    );
  }
}