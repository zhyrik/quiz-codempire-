import React, { useEffect, memo } from 'react'
import { Button, Form, Col } from 'react-bootstrap'
import { Field, reduxForm,  } from 'redux-form'
import { useDispatch, useSelector } from 'react-redux'

import { StyledCard } from './styled'
import { BootstrapInputHOC, BootstrapSelectHOC } from './Input.HOC'
import {
  getQuizs,
  changeAlertFlag } from '../store/actions/quizForm.actions'
import {
  quizSelector,
  errorFetching,
  loadingQuiz,
  alertFlag } from '../store/selectors/quizForm.selectors'
import Error from './Error'
import Alert from './Alert'
import SubmitButton from './SubmitButton'

/**
 * functional react component for Quiz page
 * @function
 * @param {*} props - props
 * @returns {JSX.Element} - react component
 */
let dispatch = null

function QuizForm(props) {
  const { pristine, reset, submitting } = props
  dispatch = useDispatch()
  const quiz = useSelector(quizSelector)
  const error = useSelector(errorFetching)
  const loading = useSelector(loadingQuiz)
  const flag = useSelector(alertFlag)
  console.log('1')

  function handleSubmit() {
    dispatch(changeAlertFlag())
  }

  useEffect(() => {
    dispatch(getQuizs())
  }, [])

  if(error){
    return <Error>{error}</Error>
  } else if (loading) {
    return <p>loading</p>
  } else if (flag) {
    return <Alert />
  } else if(quiz.length > 1) {
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
                component={BootstrapSelectHOC(Form.Control)}
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
              checked="true"
            />
          </Form.Group>

          <Button 
            variant="secondary"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Сбросить
          </Button>
          <SubmitButton />
        </Form>
      </StyledCard>
    )
  } else {
    return <Error>error</Error>
  }
}

const WithReduxForm = reduxForm({
  // a unique name for the form
  form: 'answers'
})(memo(QuizForm))

export default WithReduxForm