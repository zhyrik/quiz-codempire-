import React from 'react'
import { useSelector } from 'react-redux'

import { counterWithDollar } from '../store/ducks/counter'
/**
 * functional react component for ...
 * @function
 * @returns {JSX.Element} - react component
 */
function Counter() {
  const counter$ = useSelector(counterWithDollar)
  return (
    <div>
      counter: {counter$}
    </div>
  )
}

export default Counter