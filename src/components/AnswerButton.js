import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom"

import { allAnswers, quizSelector } from '../store/selectors/quizForm.selectors'
import {
  changeAlertFlag,
  setPoints } from '../store/actions/quizForm.actions'
/**
 * functional react component for ...
 * @function
 * @param {*} props - props
 * @returns {JSX.Element} - react component
 */
function AnswerButton({ forse }) {
  const answers = useSelector(allAnswers)
  const quiz = useSelector(quizSelector)
  const dispatch = useDispatch()
  let history = useHistory()

  function f() {
    let points = 0
    quiz.forEach(element => {
      const name = element.name
      if (answers[name] === element.answer) {
        points += 1
      }
    })
    dispatch(setPoints(points))
  }
  // show modal window with alert || go to result page
  function handleQuiz () {
    if(forse) {
      history.push('/result')
      f()
    }
    if(answers) {
      const numberAnswers = Object.keys(answers)
      if (numberAnswers.length < 5) {
        dispatch(changeAlertFlag())
      } else {
        history.push('/result')
        f()
      }
    } else {
      dispatch(changeAlertFlag())
    }
  }

  return (
    <Button variant="primary" type="button" onClick={handleQuiz} >
      Ответить
    </Button>
  )
}

export default AnswerButton