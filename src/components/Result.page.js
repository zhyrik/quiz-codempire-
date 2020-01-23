import React from 'react'
import { Card, Button } from 'react-bootstrap'

import { H1, CenterWrapper } from './styled'

/**
 * functional react component Result page
 * @function
 * @returns {JSX.Element} - react component
 */
function Result() {
  return (
    <CenterWrapper>
      <Card>
        <Card.Body>
          <Card.Title>
            <H1>
              Ваш результат
            </H1>
          </Card.Title>
          <Card.Text>
            Каждый
          </Card.Text>
          <Button variant="primary" onClick={() => {}}>НЕТ</Button>
        </Card.Body>
      </Card>
    </CenterWrapper>
  )
}

export default Result