import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import * as serviceWorker from "./serviceWorker";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
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
    <Container>
        <Navbar color="light" light expand="md">
        <NavbarBrand>
          <Link to="/">ClanFare</Link>
        </NavbarBrand>
        <NavbarToggler  />
        <Collapse  navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/card-viewer">Card Viewer</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/deck-viewer">Deck Viewer</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/card-creator">Card Creator</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/deck-creator">Deck Creator</Link>
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
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