import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 4em;
  background-color: blue;
`

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <Wrapper>Example Component: {text}</Wrapper>
}
