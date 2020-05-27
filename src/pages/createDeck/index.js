import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Row, Container, Col, FormText } from 'reactstrap';
import axios from 'axios';


const CreateDeck = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()

    const deckInfo = {
      name,
      description,
      image
    };

    const response = await axios.post('http://localhost:4000/decks', deckInfo)
    console.log('response', response)
    setName('')
    setDescription('')
    setImage('')
  }

  return (
    <Container className={'pt-3'}>
          <Row>
            <Col>
              <h1>Deck Creator</h1>
            </Col>
          </Row>
          <hr/>
          <Form onSubmit={onSubmit}>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label required for='name'>Name*</Label>
                <Input type="text" value={name} onChange={(e) => setName(e.target.value)} required id='name' maxLength={35} placeholder={'Deck Name'}/>
              </FormGroup>  
            </Col>
            <Col md={6}>
            </Col>
          </Row>
         
          <Row>
            <Col>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input type='textarea' value={description} onChange={(e) => setDescription(e.target.value)} id='description' maxLength={255} placeholder={'Enter Deck Description'}/>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              <FormGroup>
                <Label for='image'>Image</Label>
                <Input type="file" value={image} onChange={(e) => setImage(e.target.value)} id='image'/>
                <FormText>Upload the image you want to use for this Deck.</FormText>
              </FormGroup>
            </Col>
          </Row>
          
          <Button variant="danger" size="lg" block type="submit">
            Create Deck
          </Button>
        </Form>
      </Container>
  )
}

export default CreateDeck