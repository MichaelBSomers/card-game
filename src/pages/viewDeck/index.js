import React, { useEffect, useState } from "react";
import { Row, Container, Col, Button } from 'reactstrap';
import axios from 'axios';
import DeckView from "./components/DeckView";

const ViewCard = () => {
  const [decks, setDecks] = useState([])
  const [selectedDeck, setSelectedDeck] = useState(null)
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
    const response = await axios.get('http://localhost:4000/decks')
    if(response.status === 200 && response.data.length > 0) {
      setDecks(response.data)
    }
  }

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
          Deck Count: {decks.length}
        </Col>
      </Row>
      {
        decks.length > 0 && 
        <Container className={'p-3'}>
          {
            decks.map(deck => {
              return (
                <Row key={deck._id}>
                  <Col md={'auto'}>
                    <Button block onClick={() => {setSelectedDeck(deck)}}>
                      {deck.name}
                    </Button>
                  </Col>
                </Row>
              )
            })
          }
        </Container>
      }
      {
        selectedDeck &&
        <DeckView deck={selectedDeck}/>
      }
      
    </Container>
  )
}

export default ViewCard