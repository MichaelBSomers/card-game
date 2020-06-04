import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Container,
  Button,
  Row,
  Col
} from 'reactstrap';

// Pages
import Home from "./pages/home";
import ViewCard from "./pages/viewCard"
import ViewDeck from "./pages/viewDeck"
import CreateCard from "./pages/createCard"
import CreateDeck from "./pages/createDeck"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


ReactDOM.render(
  <div className={'background'}>
  <Router>
    <Container className={'p-3'}>
      <Row>
        <Col>
          <Link to="/">
            <Button block>
              ClanFare
            </Button>
          </Link>
        </Col>
        <Col>
          <Link to="/card-viewer">
            <Button block>
              Card Viewer
            </Button>
          </Link>
        </Col>
        <Col>
          <Link to="/deck-viewer">
            <Button block>
              Deck Viewer
            </Button>
          </Link>
        </Col>
        <Col>
          <Link to="/card-creator">
            <Button block>
              Card Creator
            </Button>
          </Link>
        </Col>
        <Col>
          <Link to="/deck-creator">
            <Button block>
              Deck Creator
            </Button>
          </Link>
        </Col>
      </Row>
      
      <Switch>
      <Route path="/card-viewer">
        <ViewCard/>
      </Route>
      <Route path="/deck-viewer">
        <ViewDeck/>
      </Route>
      <Route path="/card-creator">
        <CreateCard/>
      </Route>
      <Route path="/deck-creator">
        <CreateDeck/>
      </Route>
      <Route path="/">
        <Home/>
      </Route>
    </Switch>
      </Container>
  </Router>
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();