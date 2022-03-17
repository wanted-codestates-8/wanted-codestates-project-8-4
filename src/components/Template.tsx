import React from 'react'
import styled from '@emotion/styled'

// import Header from 'components/Header'

interface ITemplate {
  children?: React.ReactNode
}

export default function Template({ children }: ITemplate) {
  return (
    <>
      <PageWrapper>{children}</PageWrapper>
    </>
  )
}

const PageWrapper = styled.div`
  margin: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: minmax(auto, calc(100vh - 13rem));
  height: 100%;
  grid-gap: 3rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`
