import React from "react";
import {Container, Row, Col} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/home"

function App() {
  return (
    <Container>
      <Row>
        <Col>
          Hello
        </Col>
        <Col>
          Hello
        </Col>
      </Row>
      <Home/>
    </Container>
  );
}

export default App;