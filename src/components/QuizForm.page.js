import React, { useEffect, memo } from 'react'
import { Button, Form, Col } from 'react-bootstrap'
import { Field, reduxForm,  } from 'redux-form'
import { useDispatch, useSelector } from 'react-redux'

import { StyledCard } from './styled'
import { BootstrapInputHOC, BootstrapSelectHOC } from './inputs/Input.HOC'
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
import AnswerButton from './AnswerButton'

import InputText from './inputs/InputText'
import InputRadio from './inputs/InputRadio'
import Select from './inputs/Select'
import Checkbox from './inputs/Checkbox'

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

          <InputText quiz={quiz[0]} />

          <InputText quiz={quiz[1]} />

          <InputRadio quiz={quiz[2]} />

          <Select quiz={quiz[3]} />

          <Checkbox quiz={quiz[4]} />

          <Button 
            variant="secondary"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Сбросить
          </Button>
          <AnswerButton />

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