import { createSelector } from 'reselect'
import {createStructuredFormSelector} from 'redux-form-reselect'
import {
  getFormValues
} from 'redux-form'

export const quizSelector = state => state.quizFrom.quiz
export const errorFetching = state => state.quizFrom.error
export const loadingQuiz = state => state.quizFrom.loading

export const alertFlag = state => state.quizFrom.alertFlag

export const formAnswers = state => state.form.answers

export const answers = state => getFormValues('answers')(state)
export const allAnswers = createSelector(
  answers,
  answers => answers
)
