import React from 'react'
import styled from '@emotion/styled'
import Template from 'components/Template'
import { useRecoilValue } from 'recoil'
import { tabState } from 'store'
import ContentList from 'components/ContentList'
import Header from 'components/Header'
import Subscribe from 'components/Subscribe'
import NewCards from 'components/NewCards'

function App() {
  const tab = useRecoilValue(tabState)

  return (
    <Main>
      <Header />
      <Template>
        <div>
          <NewCards />
          <Subscribe />
        </div>
        <ContentList type={tab} />
      </Template>
    </Main>
  )
}
const Main = styled.main`
  width: 100vw;
`

export default App
