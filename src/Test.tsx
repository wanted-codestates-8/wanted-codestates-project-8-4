import React from 'react'
import styled from '@emotion/styled'
import Subscribe from 'components/Subscribe'

export default function Test() {
  return (
    <Wrapper>
      <Tab>
        <ul >
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </Tab>
      <NewPageWrapper>
        <NewPageMain>
        <Subscribe />

        </NewPageMain>
      </NewPageWrapper>
      <DetailedListWrapper>
        <DetailedMain>

        <div>2</div>
        <div>1</div>
        </DetailedMain>
      </DetailedListWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  height: 100%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

const Tab = styled.div`
  background: salmon;
`
const NewPageWrapper = styled.div`
`

const NewPageMain = styled.div`

  margin: 3rem;
`

const DetailedListWrapper = styled.div`
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
`

const DetailedMain = styled.div`
  /* box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em; */
  border-radius: 1rem;
  /* padding: 2rem;
  margin: 3rem; */
`