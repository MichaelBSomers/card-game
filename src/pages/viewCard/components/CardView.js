import React from "react";
import { Row, Col, Button} from "reactstrap";
import { CARD_TYPES } from "../../createCard";

const CardView = ({card = {}, deleteCard = () => {}}) => {

  return (
    <div>
      <Row>
        <Col md={6}>
          
        </Col>
        <Col md={6}>
          <Row>
            <Col md={'auto'}>
              <div>Name:</div>
              <div>Faction:</div>
              <div>Rarity:</div>
              <div>Type:</div>
              {
                card.cardType === CARD_TYPES.creature &&
                <div>Power:</div>
              }
              {
                card.cardType === CARD_TYPES.creature &&
                <div>Toughness:</div>
              }
            </Col>
            <Col>
              <div>{card.name}</div>
              <div>{card.faction}</div>
              <div>{card.rarity}</div>
              <div>{card.cardType}</div>
              {
                card.cardType === CARD_TYPES.creature &&
                <div>{card.power}</div>
              }
              {
                card.cardType === CARD_TYPES.creature &&
                <div>{card.toughness}</div>
              }
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button block onClick={() => deleteCard(card)}>Delete Card</Button>
        </Col>
      </Row>
    </div>
  )
}

export default CardView