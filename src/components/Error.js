import React from 'react'

import { H1, CenterWrapper } from './styled'

/**
 * functional react component for Error component
 * @function
 * @returns {JSX.Element} - react component
 */
function Error({ children }) {
  return (
    <CenterWrapper>
      <H1 color="#f00">
        {children}
      </H1>
    </CenterWrapper>
  )
}

export default Error