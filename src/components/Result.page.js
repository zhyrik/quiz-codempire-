import React from 'react'
import { Card, Button, ListGroupItem, ListGroup } from 'react-bootstrap'
import { useHistory } from "react-router-dom"
import { useSelector } from 'react-redux'

import { H1, CenterWrapper } from './styled'
import { percentagePoints, quizSelector } from '../store/selectors/quizForm.selectors'

/**
 * functional react component Result page
 * @function
 * @returns {JSX.Element} - react component
 */
function Result() {
  const percent = useSelector(percentagePoints)
  const quizs = useSelector(quizSelector)
  let history = useHistory()

  console.log(percent)
  return (
    <CenterWrapper>
      <Card>
        <Card.Body>
          
          <Card.Title>
            <H1>
              Ваш результат {percent} %
            </H1>
          </Card.Title>

          <ListGroup className="list-group-flush">
            {quizs.map(quiz => (
              <ListGroupItem >
                <Card.Text>
                  {quiz.query}
                </Card.Text>
                <Card.Text>
                  Правильный ответ: {quiz.answer}
                </Card.Text>
              </ListGroupItem >
            ))}
          </ListGroup>

          <Button variant="primary" onClick={() => {history.push('/')}}>Назад</Button>

        </Card.Body>
      </Card>
    </CenterWrapper>
  )
}

export default Result