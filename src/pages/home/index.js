import React, { Component } from "react";
import {Container, Row, Col, Button} from "reactstrap";

import "./css/home.css";
import Navigation from "../../components/Navigation";

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