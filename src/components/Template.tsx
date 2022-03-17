import React from 'react'
import styled from '@emotion/styled'
import Subscribe from 'components/Subscribe'
import Tab from './Tab'
import Header from './Header'
// import Header from 'components/Header'

interface ITemplate {
  children?: React.ReactNode
}

export default function Template({ children }: ITemplate) {
  return (
    <>
      {/* <Header /> */}
      <Wrapper>
        {/* <Tab /> */}
        <PageWrapper>
          {children}
          {/* <Subscribe /> */}
        </PageWrapper>
        {/* <PageWrapper></PageWrapper> */}
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;

  /* grid-template-columns: 1fr 2fr 2fr; */

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

const PageWrapper = styled.div`
  margin: 3rem;
`

const DetailedListWrapper = styled.div`
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
`

const DetailedMain = styled.div`
  /* box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em; */
  border-radius: 1rem;
  /* padding: 2rem;
  margin: 3rem; */
`
