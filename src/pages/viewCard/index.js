import React, { useEffect, useState } from "react";
import { Row, Container, Col, Button } from 'reactstrap';
import axios from 'axios';
import CardView from "./components/CardView";

const ViewCard = () => {
  const [cards, setCards] = useState([])
  const [selectedCard, setSelectedCard] = useState(null)
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

  console.log('cards', cards)

  return (
    <Container className={'pt-3'}>
      <Row>
        <Col>
          <h1>Card Viewer</h1>
        </Col>
      </Row>
      <hr/>
      <Row>
        <Col>
          Card Count: {cards.length}
        </Col>
      </Row>
      {
        cards.length > 0 && 
        <Container className={'p-3'}>
          {
            cards.map(card => {
              return (
                <Row key={card._id}>
                  <Col md={'auto'}>
                    <Button block onClick={() => {setSelectedCard(card)}}>
                      {card.name}
                    </Button>
                  </Col>
                </Row>
              )
            })
          }
        </Container>
      }
      {
        selectedCard &&
        <CardView card={selectedCard}/>
      }
      
    </Container>
  )
}

export default ViewCard