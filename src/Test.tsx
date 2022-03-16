import React from 'react'
import styled from '@emotion/styled'

export default function Test() {
  return (
    <Wrapper>
      <Tab>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </Tab>
      <Main>
        <div>2</div>
        <div>1</div>
      </Main>
      <Sub>
        <div>2</div>
        <div>1</div>
      </Sub>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  height: 100%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

const Tab = styled.div`
  background: salmon;
`
const Main = styled.div`
  background: dodgerblue;
`

const Sub = styled.div`
  background: yellow;
`
