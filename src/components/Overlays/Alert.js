import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

import { H1, CenterWrapper, FixedWrapper } from '../styled'
import { changeAlertFlag } from '../../store/actions/quizForm.actions'
import AnswerButton from '../AnswerButton'

/**
 * functional react component for Alert component
 * @function
 * @returns {JSX.Element} - react component
 */
function Error() {

  const dispatch = useDispatch()

  // hide Alert component (return to Quiz)
  function returnToQuiz (){
    dispatch(changeAlertFlag())
  }

  return (
    <FixedWrapper>
      <CenterWrapper>
        <Card>
          <Card.Body>
            
            <Card.Title>
              <H1 color="#f00">
                Предупреждение
              </H1>
            </Card.Title>
            <Card.Text>
              Каждый не отвеченный ответ считается неправильным, Вы уверены что хотите продолжить?
            </Card.Text>

            <Button variant="primary" onClick={returnToQuiz}>НЕТ</Button>
            <AnswerButton forse={true}>ДА</AnswerButton>

          </Card.Body>
        </Card>
      </CenterWrapper>
    </FixedWrapper>
  )
}

export default Error