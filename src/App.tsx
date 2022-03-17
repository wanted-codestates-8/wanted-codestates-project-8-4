import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import Template from 'components/Template'
import { useRecoilState, useRecoilValue } from 'recoil'
import { contentSelector, sectorSelector, tabState, TYPE } from 'store'
import ContentList from 'components/ContentList'
import Header from 'components/Header'
import Subscribe from 'components/Subscribe'
import NewCards from 'components/NewCards'

function App() {
  const [tab, setTab] = useRecoilState(tabState)
  const sector = useRecoilValue(sectorSelector)
  const content = useRecoilValue(contentSelector)

  return (
    <Main>
      <Header />
      <Template>
        <NewCards />
        <Subscribe />
        <ContentList type={tab} />
      </Template>
    </Main>
  )
}
const Main = styled.main`
  width: 100vw;
`

export default App
