import React from "react";
import { Row, Col} from "reactstrap";
import { CARD_TYPES } from "../../createCard";

const DeckView = ({deck = {}}) => {

  console.log(deck)

  return (
      <Row>
        <Col md={6}>
          Deck View
        </Col>
        <Col md={6}>
          <Row>

          </Row>
        </Col>
      </Row>
  )
}

export default DeckView