import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import { useRecoilState, useRecoilValue } from 'recoil'
import { contentSelector, sectorSelector, tabState, TYPE } from 'store'
import ContentList from 'components/ContentList'

function App() {
  const [tab, setTab] = useRecoilState(tabState)
  const sector = useRecoilValue(sectorSelector)
  const content = useRecoilValue(contentSelector)

  return (
    <Main>
      <ContentList type={tab}></ContentList>
    </Main>
  )
}

const Main = styled.main`
  width: 100vw;
`

export default App
