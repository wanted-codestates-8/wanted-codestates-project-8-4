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
  grid-template-columns: 1fr 1fr;
  height: 100%;
  grid-gap: 3.5rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`
