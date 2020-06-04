import React, { useState, useEffect } from "react";
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText} from "reactstrap";
import { CARD_TYPES, CARD_RARITIES, MANA_COSTS } from "../../createCard";

import axios from 'axios'

const CardEdit = ({card = {}, editCard = () => {}}) => {
  const [name, setName] = useState(card.name)
  const [image, setImage] = useState(card.image)
  const [faction, setFaction] = useState(card.faction)
  const [cardType, setCardType] = useState(card.cardType)
  const [rarity, setRarity] = useState(card.rarity)
  const [power, setPower] = useState(card.power)
  const [toughness, setToughness] = useState(card.toughness)
  const [description, setDescription] = useState(card.description)
  const [mechanics, setMechanics] = useState(card.rules)
  const [manaCost, setManaCost] = useState(card.manaCost || 0)

  const [decks, setDecks] = useState([])

  useEffect(() => {
    retrieveDeckList()
  }, [])

  const retrieveDeckList = async () => {
    const response = await axios.get('http://localhost:4000/decks')
    if(response.status === 200) {
      setDecks(response.data)
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    
    let cardInfo = {...card}
    
    cardInfo.name = name
    cardInfo.image = image
    cardInfo.faction = faction
    cardInfo.cardType = cardType
    cardInfo.rarity = rarity
    cardInfo.description = description
    cardInfo.mechanics = mechanics
    cardInfo.power = power
    cardInfo.toughness = toughness
    cardInfo.manaCost = manaCost

    editCard(cardInfo)
  }

  console.log(card)

  return (
      <Form onSubmit={onSubmit}>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label required for='name'>Name*</Label>
                <Input type="text" value={name} onChange={(e) => setName(e.target.value)} required id='name' maxLength={35} placeholder={'Card Name'}/>
              </FormGroup>  
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for='cardType'>Card Type</Label>
                <Input type='select' name='cardType' id='cardType' onChange={(e) => setCardType(e.target.value)} defaultValue={cardType}>
                  <option disabled hidden value={0}>Select</option>
                  <option>{CARD_TYPES.creature}</option>
                  <option>{CARD_TYPES.spell}</option>
                  <option>{CARD_TYPES.legendary}</option>
                </Input>
              </FormGroup>  
            </Col>
          </Row>
          {
            cardType === CARD_TYPES.creature &&
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for='power' required>Power*</Label>
                  <Input type="number" value={power} onChange={(e) => setPower(e.target.value)} required id='power' min={0} max={99}/>
                </FormGroup>  
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for='toughness' required>Toughness*</Label>
                  <Input type="number" value={toughness} onChange={(e) => setToughness(e.target.value)} required id='toughness' min={1} max={99}/>
                </FormGroup>  
              </Col>
            </Row>
          }
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for='rarity' required>Rarity*</Label>
                <Input type='select' name='rarity' id='rarity' onChange={(e) => setRarity(e.target.value)} defaultValue={rarity}>
                  <option disabled hidden value={0}>Select</option>
                  <option>{CARD_RARITIES.common}</option>
                  <option>{CARD_RARITIES.rare}</option>
                </Input>
              </FormGroup> 
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for='faction' required>Faction*</Label>
                <Input type='select' name='faction' id='faction' onChange={(e) => setFaction(e.target.value)} defaultValue={faction}>
                  <option disabled hidden value={0}>Select</option>
                  {
                    decks.length > 0 &&
                    decks.map(deck => {
                      return (
                        <option key={deck._id} value={deck.name}>{deck.name}</option>
                      )
                    })
                  }
                </Input>
              </FormGroup> 
            </Col>
          </Row>

          <Row>
          <Col md={6}>
            <FormGroup>
              <Label for='manaCost'>Mana Cost*</Label>
              <Input type='select' name='manaCost' id='manaCost' onChange={(e) => setManaCost(e.target.value)} defaultValue={manaCost}>
                {
                  MANA_COSTS.map(item => {
                    return (
                      <option key={item} value={item}>{item}</option>
                    )
                  })
                }
              </Input>
            </FormGroup>
          </Col>
        </Row>
         
          <Row>
            <Col>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input type='textarea' value={description} onChange={(e) => setDescription(e.target.value)} id='description' maxLength={255} placeholder={'Enter Card Description'}/>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              <FormGroup>
                <Label for='image'>Image</Label>
                <Input type="file" value={image} onChange={(e) => setImage(e.target.value)} id='image'/>
                <FormText>Upload the image you want to use for this card.</FormText>
              </FormGroup>
            </Col>
          </Row>
          
          
          {/* TODO: Implement disabled handling */}
          <Button variant="danger" size="lg" block type="submit">
            Save
          </Button>
        </Form>
  )
}

export default CardEdit