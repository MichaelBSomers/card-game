import React, { useEffect, useState } from "react";
import { Button, Form, Row, Container, Col } from 'reactstrap';
import axios from 'axios';

const ViewCard = () => {
  const [cards, setCards] = useState([null])
  const onSubmit = async (e) => {
    e.preventDefault()

    const cardInfo = {
    };

    const response = await axios.get('http://localhost:4000/cards', cardInfo)
    console.log('response', response)
  }

  useEffect(() => {
    retrieveCards()
  }, [])

  const retrieveCards = async () => {
    const response = await axios.get('http://localhost:4000/cards')
    if(response.status === 200 && response.data.length > 0) {
      setCards(response.data)
    }
  }

  console.log(cards)

  return (
    <Container className={'pt-3'}>
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
          <Row>
            <Col>
            
            </Col>
          </Row>
          
          {/* TODO: Implement disabled handling */}
          <Button variant="danger" size="lg" block type="submit">
            Retrieve Cards
          </Button>
        </Form>
      </Container>
  )
}

export default ViewCard