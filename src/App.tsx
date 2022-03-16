import React from 'react'
import styled from '@emotion/styled'
import ContentList from 'components/ContentList'

function App() {
  return (
    <Main>
      <ContentList tabName="Youtube"></ContentList>
    </Main>
  )
}

const Main = styled.main`
  width: 100vw;
`

export default App
