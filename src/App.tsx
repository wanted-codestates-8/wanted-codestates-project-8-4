import React from 'react'
import styled from '@emotion/styled'
import NewCards from 'components/NewCards'
import Subscribe from 'components/Subscribe'

function App() {
  return (
    <Main>
      <NewCards />
      {/* <Subscribe /> */}
    </Main>
  )
}
const Main = styled.main`
  width: 100vw;
  height: 100vh;
`

export default App
