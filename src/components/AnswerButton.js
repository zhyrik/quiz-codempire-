import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom"

import { allAnswers, quizSelector } from '../store/selectors/quizForm.selectors'
import {
  changeAlertFlag,
  setPoints } from '../store/actions/quizForm.actions'

/**
 * functional react component for AnswerButton
 * @function
 * @param {bool} forse - flag for button in Alert component
 * @returns {JSX.Element} - react component
 */
function AnswerButton({ forse }) {

  const answers = useSelector(allAnswers)
  const quiz = useSelector(quizSelector)
  const dispatch = useDispatch()
  let history = useHistory()

  // calculate result points && go to Result page
  function calculateResult() {
    let points = 0
    quiz.forEach(element => {
      const name = element.name
      if (answers[name] && answers[name].toString().toLowerCase() === element.answer.toString().toLowerCase()) {
        points += 1
        console.log(element)
      }
      if (answers[name] === true) {
        points += 1
      }
    })
    dispatch(setPoints(points))
    history.push('/result')
  }

  // show modal window with alert || go to result page
  function handleQuiz () {
    if(forse) {
      calculateResult()
    }
    if(answers) {
      const numberAnswers = Object.keys(answers)
      if (numberAnswers.length < 5) {
        dispatch(changeAlertFlag())
      } else {
        calculateResult()
      }
    } else {
      dispatch(changeAlertFlag())
    }
  }

  return (
    <Button variant="primary" type="button" onClick={handleQuiz} data-test="answer-button" >
      Ответить
    </Button>
  )
}

AnswerButton.propTypes = {
  forse: PropTypes.bool
}

export default AnswerButton