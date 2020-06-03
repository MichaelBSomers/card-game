import React, { useState } from "react";
import { Row, Col, Button} from "reactstrap";
import CardInfo from './CardInfo'
import CardEdit from "./CardEdit";

const CardView = ({card = {}, deleteCard = () => {}, editCard = () => {}}) => {
  const [edit, setEdit] = useState(false)

  const initiateEditCard = (card) => {
    editCard(card)
    setEdit(false)
  }
  
  return (
    <div>
      <Row>
        <Col>
          {
            !edit ?
            <CardInfo card={card}/> :
            <CardEdit card={card} editCard={initiateEditCard}/>
          }
        </Col>
      </Row>
      <Row>
        <Col>
            <Button block onClick={() => setEdit(!edit)}>
              {
                !edit ? 'Edit Card' : 'Cancel'
              }
            </Button>
        </Col>
      </Row>
      {
        !edit &&
        <Row>
          <Col>
            {/* TODO Create popup to confirm deleting card. */}
            <Button block onClick={() => deleteCard(card)}>Delete Card</Button>
          </Col>
        </Row>
      }
    </div>
  )
}

export default CardView