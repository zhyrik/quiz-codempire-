import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

import { allAnswers } from '../store/selectors/quizForm.selectors'
import {
  changeAlertFlag } from '../store/actions/quizForm.actions'
/**
 * functional react component for ...
 * @function
 * @param {*} props - props
 * @returns {JSX.Element} - react component
 */
function SubmitButton() {
  const answers = useSelector(allAnswers)
  const dispatch = useDispatch()

  // show modal window with alert
  function handleQuiz () {
    if(answers) {
      const numberAnswers = Object.keys(answers)
      console.log(numberAnswers)
      if (numberAnswers.length < 5) {
        dispatch(changeAlertFlag())
      } else {

      }
    }
  }

  return (
    <Button variant="primary" type="button" onClick={handleQuiz} >
      Ответить
    </Button>
  )
}

export default SubmitButton