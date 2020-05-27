import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Row, Container, Col, FormText } from 'reactstrap';
import axios from 'axios';

 export const CARD_TYPES = {
  creature: 'Creature',
  spell: 'Spell',
  legendary: 'Legendary'
}

export const CARD_RARITIES = {
  common: 'Common',
  rare: 'Rare'
}

export const FACTIONS = {
  test: 'test',
  testTwo: 'testTwo'
}


const CreateCard = () => {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [faction, setFaction] = useState('')
  const [cardType, setCardType] = useState(undefined)
  const [rarity, setRarity] = useState('')
  const [power, setPower] = useState('')
  const [toughness, setToughness] = useState('')
  const [description, setDescription] = useState(undefined)
  const [rules, setRules] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()

    const cardInfo = {
      name,
      image,
      faction,
      cardType,
      rarity,
      description,
      rules
    };

    if(cardType === CARD_TYPES.creature) {
      cardInfo.power = power
      cardInfo.toughness = power
    }

    const response = await axios.post('http://localhost:4000/cards', cardInfo)
    console.log('response', response)

    setName('')
    setImage('')
    setFaction('')
    setCardType(null)
  }

  return (
    <Container className={'pt-3'}>
          <Row>
            <Col>
              <h1>Card Creator</h1>
            </Col>
          </Row>
          <hr/>
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
                <Input type='select' name='cardType' id='cardType' onChange={(e) => setCardType(e.target.value)} defaultValue={0}>
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
                <Input type='select' name='rarity' id='rarity' onChange={(e) => setRarity(e.target.value)} defaultValue={0}>
                  <option disabled hidden value={0}>Select</option>
                  <option>{CARD_RARITIES.common}</option>
                  <option>{CARD_RARITIES.rare}</option>
                </Input>
              </FormGroup> 
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for='faction' required>Faction*</Label>
                <Input type='select' name='faction' id='faction' onChange={(e) => setFaction(e.target.value)} defaultValue={0}>
                  <option disabled hidden value={0}>Select</option>
                  <option>{FACTIONS.test}</option>
                  <option>{FACTIONS.testTwo}</option>
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
            Create Card
          </Button>
        </Form>
      </Container>
  )
}

export default CreateCard