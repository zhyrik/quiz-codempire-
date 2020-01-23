import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom"

import { allAnswers } from '../store/selectors/quizForm.selectors'
import {
  changeAlertFlag } from '../store/actions/quizForm.actions'
/**
 * functional react component for ...
 * @function
 * @param {*} props - props
 * @returns {JSX.Element} - react component
 */
function AnswerButton({ forse }) {
  const answers = useSelector(allAnswers)
  const dispatch = useDispatch()
  let history = useHistory()

  // show modal window with alert
  function handleQuiz () {
    if(forse) {
      history.push('/result')
    }
    if(answers) {
      const numberAnswers = Object.keys(answers)
      console.log(numberAnswers)
      if (numberAnswers.length < 5) {
        dispatch(changeAlertFlag())
      } else {
        history.push('/result')
      }
    }
  }

  return (
    <Button variant="primary" type="button" onClick={handleQuiz} >
      Ответить
    </Button>
  )
}

export default AnswerButton