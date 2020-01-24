import { createSelector } from 'reselect'
import {
  getFormValues
} from 'redux-form'

// handle quis requests selelctors
export const quizSelector = state => state.quizFrom.quiz
export const errorFetching = state => state.quizFrom.error
export const loadingQuiz = state => state.quizFrom.loading

// show madal alert 
export const alertFlag = state => state.quizFrom.alertFlag

// get all answers from redux-form
export const allAnswers = state => getFormValues('answers')(state)

// get points &&  consider %
export const points = state => state.quizFrom.points
export const percentagePoints = createSelector(
  points,
  points => points * 100 / 5 
)