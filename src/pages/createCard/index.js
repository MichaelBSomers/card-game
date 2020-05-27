import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Row, Container, Col } from 'reactstrap';
import axios from 'axios';

const CreateCard = () => {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [faction, setFaction] = useState('')
  const [cardType, setCardType] = useState('')
  const [rarity, setRarity] = useState('')
  const [power, setPower] = useState(null)
  const [toughness, setToughness] = useState(null)
  const [description, setDescription] = useState('')
  const [rules, setRules] = useState(null)

  const onNameChange = (e) => {
    setName(e.target.value)
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    const studentObject = {
      name: name, 
    };
    const response = await axios.post('http://localhost:4000/cards', studentObject)
    console.log('response', response)

    setName('')
  }

  return (
    <Container>
        <Row>
          <Col>
          </Col>
        </Row>
        <Form onSubmit={onSubmit}>
          <Row>
            <Col>
              <h1>Card Viewer</h1>
            </Col>
          </Row>
          <hr/>
          <FormGroup>
            <Label>Name</Label>
            <Input type="text" value={name} onChange={onNameChange} />
          </FormGroup>

          <Button variant="danger" size="lg" block type="submit">
            Create Card
          </Button>
        </Form>
      </Container>
  )
}

export default CreateCard