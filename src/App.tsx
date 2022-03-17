import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import Template from 'components/Template'
import { useRecoilState, useRecoilValue } from 'recoil'
import { contentSelector, sectorSelector, tabState, TYPE } from 'store'
import ContentList from 'components/ContentList'
import Header from 'components/Header'

function App() {
  const [tab, setTab] = useRecoilState(tabState)
  const sector = useRecoilValue(sectorSelector)
  const content = useRecoilValue(contentSelector)

  return (
    <Main>
      <Header />
      <Template>
        {tab === 'opinion' && <div>opnion</div>}
        {tab === 'youtube' && <ContentList type="youtube"></ContentList>}
        {tab === 'insight' && <div>insight</div>}
      </Template>
    </Main>
  )
}

const Main = styled.main`
  width: 100vw;
`

export default App
