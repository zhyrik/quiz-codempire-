import React from 'react'
import { Button, Form, Col } from 'react-bootstrap'

import { StyledCard } from './styled'

const quiz = [
  {query: 'some query lorem ipsum dolor kfjas kdjal? ', answer: 'some'},
  {query: 'some query lorem ipsum dolor kfjas kdjal? ', answer: 'some'},
  {query: 'some query lorem ipsum dolor kfjas kdjal? ', answer: 'some'},
  {query: 'some query lorem ipsum dolor kfjas kdjal? ', answer: 'some'},
  {query: 'some query lorem ipsum dolor kfjas kdjal? ', answer: 'some'}
]

/**
 * functional react component for ...
 * @function
 * @param {*} props - props
 * @returns {JSX.Element} - react component
 */
function QuizForm() {
  console.log(StyledCard)
  return (
    <StyledCard>
      <Form>
        <Form.Group controlId="formQuizOne">
          <Form.Label>{quiz[0].query}</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>{quiz[0].query}</Form.Label>
          <Form.Control type="password" />
        </Form.Group>

        <Form.Group>
          <Form.Label as="legend">
            {quiz[0].query}
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="first radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="second radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="third radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
          </Col>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>{quiz[0].query}</Form.Label>
          <Form.Control as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Label>{quiz[0].query}</Form.Label>
          <Form.Check type="checkbox" label="Check me out" />
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="secondary" type="submit">
          Сбросить
        </Button>
        <Button variant="primary" type="submit">
          Ответить
        </Button>
      </Form>
    </StyledCard>
  )
}

export default QuizForm