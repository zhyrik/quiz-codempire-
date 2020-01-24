import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { reduxForm,  } from 'redux-form'
import { useDispatch, useSelector } from 'react-redux'

import {
  getQuizs,
  changeAlertFlag } from '../store/actions/quizForm.actions'
import {
  quizSelector,
  errorFetching,
  loadingQuiz,
  alertFlag } from '../store/selectors/quizForm.selectors'

import { StyledCard } from '../components/styled'
import Error from '../components/Overlays/Error'
import Alert from '../components/Overlays/Alert'
import Loading from '../components/Overlays/Loading'
import AnswerButton from '../components/AnswerButton'
import InputText from '../components/inputs/InputText'
import InputRadio from '../components/inputs/InputRadio'
import Select from '../components/inputs/Select'
import Checkbox from '../components/inputs/Checkbox'

/**
 * functional react component for Quiz page
 * @function
 * @param {*} props - redux-form props
 * @returns {JSX.Element} - react component
 */
let dispatch = null

function QuizForm(props) {
  console.log(localStorage)
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
    return <Loading />
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
})(QuizForm)

export default WithReduxForm