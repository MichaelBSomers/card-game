import React from "react";
import {
  Row,
  Col,
} from 'reactstrap';

import './cardDisplay.scss'

const getCardRarityColor = (rarity) => {
  if (rarity === 'Common') return 'rarity-color-gray'
  if (rarity === 'Uncommon') return 'rarity-color-green'
  if (rarity === 'Rare') return 'rarity-color-blue'
  if (rarity === 'Legendary') return 'rarity-color-gold'
  return 'rarity-color-black'
} 

const CardDisplay = ({card}) => {
  console.log('card', card)

  return (
    <div className={'card-border p-0'}>
      <div className={'card-background pt-1 pb-2 px-3'}>
        <div className={'card-details-container'}>
          <Row className={'card-name-row d-flex'}>
            <Col className={'card-name'}>
              {card.name}
            </Col>
            <Col className={'card-mana-cost d-flex justify-content-end'}>
              <div className={'number d-flex justify-content-center'}>1</div>
            </Col>
          </Row>
          <Row className={'card-art-row'}>
            <Col className={'card-art h-100 d-inline-block'}>
              {/* TODO: Make this display an image and fit inside the image container. */}
              {card.image}
            </Col>
          </Row>
          <Row className={'card-type-row'}>
            <Col className={'card-type'}>
              {card.cardType}
            </Col>
            <Col xs={2} className={'card-rarity-color d-flex justify-content-end align-items-center pl-0'}>
              <div className={`card-type-color-box h-75 ${getCardRarityColor(card.rarity)}`}>1</div>
            </Col>
          </Row>
          <Row className={'card-description-row'}>
            <Col className={'card-description d-flex align-items-center'}>
              {card.description}
            </Col>
          </Row>
          <Row className={'card-power-row h-0'}>
            <Col className={''}>
            </Col>
            <Col className={'card-power  d-flex justify-content-end pr-0 align-items-center'}>
              <div className={'power-container d-flex justify-content-center'}>{`${card.power}/${card.toughness}`}</div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default CardDisplay