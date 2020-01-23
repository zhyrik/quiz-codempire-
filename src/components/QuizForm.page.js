import React from 'react'
import { Button, Form, Col } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'

import { StyledCard } from './styled'
import BootstrapInputHOC from './Input.HOC'

const quiz = [
  {query: 'some query lorem ipsum dolor kfjas kdjal? ', answer: 'some', name: 'first'},
  {query: 'some query lorem ipsum dolor kfjas kdjal? ', answer: 'some', name: 'second'},
  {query: 'some query lorem ipsum dolor kfjas kdjal? ', answer: 'some', name: 'three'},
  {query: 'some query lorem ipsum dolor kfjas kdjal? ', answer: 'some', name: 'four'},
  {query: 'some query lorem ipsum dolor kfjas kdjal? ', answer: 'some', name: 'fifth'}
]

/**
 * functional react component for Quiz page
 * @function
 * @param {*} props - props
 * @returns {JSX.Element} - react component
 */
function QuizForm(props) {
  const { handleSubmit, pristine, reset, submitting } = props

  return (
    <StyledCard>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formQuizOne">
          <Form.Label>{quiz[0].query}</Form.Label>
          <Field
            component={BootstrapInputHOC(Form.Control)}
            type="text"
            name={quiz[0].name}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>{quiz[1].query}</Form.Label>
          <Field
            component={BootstrapInputHOC(Form.Control)}
            type="text"
            name={quiz[1].name}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label as="legend">
            {quiz[0].query}
          </Form.Label>
          <Col sm={10}>
            <Field
              component={BootstrapInputHOC(Form.Check)}
              type="radio"
              name={quiz[2].name}
              label="first radio"
              value="1"
            />
            <Field
              component={BootstrapInputHOC(Form.Check)}
              type="radio"
              name={quiz[2].name}
              label="first radio"
              value="2"
            />
            <Field
              component={BootstrapInputHOC(Form.Check)}
              type="radio"
              name={quiz[2].name}
              label="first radio"
              value="3"
            />
          </Col>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>{quiz[3].query}</Form.Label>
          <Field
              component={({input, ...props}) => (
                <Form.Control as="select" {...props} {...input}>
                  <option />
                  <option value="ff0000">Red</option>
                  <option value="00ff00">Green</option>
                  <option value="0000ff">Blue</option>
                </Form.Control>)}
              name={quiz[3].name}
            />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Label>{quiz[4].query}</Form.Label>
          <Field
            type="checkbox"
            component={BootstrapInputHOC(Form.Check)}
            value={1}
            label="some lable"
            name={quiz[4].name}
          />
        </Form.Group>

        <Button 
          variant="secondary"
          disabled={pristine || submitting}
          onClick={reset}
        >
          Сбросить
        </Button>
        <Button variant="primary" type="submit" disabled={pristine || submitting} >
          Ответить
        </Button>
      </Form>
    </StyledCard>
  )
}

const WithReduxForm = reduxForm({
  // a unique name for the form
  form: 'quiz'
})(QuizForm)

export default WithReduxForm