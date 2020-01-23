import React from 'react'
import styled from 'styled-components'
import { Card } from 'react-bootstrap'

export const StyledCard =  styled(Card)`
  width: 18rem; 
  margin: 30px auto;
  padding: 15px;
`
export const H1 = styled.h1`
  color: ${props => props.color || '#000'};
  text-align: center;
`

export const CenterWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FixedWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #0009;
`