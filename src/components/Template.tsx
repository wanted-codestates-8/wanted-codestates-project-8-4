import React from 'react'
import styled from '@emotion/styled'
import Subscribe from 'components/Subscribe'

// import Header from 'components/Header'

interface ITemplate {
  children?: React.ReactNode
}

export default function Template({ children }: ITemplate) {
  return (
    <>
      <Wrapper>
        <PageWrapper>
          {children}
          <Subscribe />
        </PageWrapper>
        <PageWrapper>
          {children}
          <Subscribe />
        </PageWrapper>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

const PageWrapper = styled.div`
  margin: 3rem;
`
