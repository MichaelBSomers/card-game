import React, { useState } from "react";
import { Row, Col, Button} from "reactstrap";
import { CARD_TYPES } from "../../createCard";

const CardInfo = ({card = {}}) => {
  return (
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
  )
}

export default CardInfo