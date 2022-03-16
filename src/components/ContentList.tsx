import React, { useState } from 'react'
import styled from '@emotion/styled'
import { DUMMY_DATA } from 'dummy'
import ContentListItem from './ContentListItem'
import ContentDetail from './ContentDetail'

interface Contents {
  tabName: keyof typeof DUMMY_DATA.content
}

const labelColor = {
  Youtube: '#C4472A',
  Opinion: '#729AF8',
  Insight: '#9493D1',
}

export default function ContentList({ tabName }: Contents) {
  const content: typeof DUMMY_DATA.content.Opinion = DUMMY_DATA.content[tabName]
  const shortContent = content.slice(0, 3)
  const sector = DUMMY_DATA.sector[tabName]
  const [moreContent, setMoreContent] = useState(false)
  return (
    <Section>
      <TitleHeader>
        <Title>{sector.title}</Title>
        <TitleLabel style={{ backgroundColor: `${labelColor[tabName]}` }}>
          {sector.type}
        </TitleLabel>
      </TitleHeader>
      {!moreContent &&
        shortContent.map((list) => (
          <ContentWrapper key={list.id}>
            <ContentListItem
              image={list.image}
              upload_date={list.upload_date}
              like_cnt={list.like_cnt}
              link={list.link}
              tabName={tabName}
            ></ContentListItem>
          </ContentWrapper>
        ))}
      {moreContent &&
        content.map((list) => (
          <ContentWrapper key={list.id}>
            <ContentListItem
              image={list.image}
              upload_date={list.upload_date}
              like_cnt={list.like_cnt}
              link={list.link}
              tabName={tabName}
            ></ContentListItem>
          </ContentWrapper>
        ))}

      <MoreButton onClick={() => setMoreContent(!moreContent)}>
        {moreContent ? '접기' : '더보기'}
      </MoreButton>

      <ContentDetail {...DUMMY_DATA} />
    </Section>
  )
}

const Section = styled.section`
  background-color: lightgrey;
  width: 40%;
  height: 100%;
  overflow-x: hidden;
  border-radius: 20px;
  border: 1px solid #e0e0e0;
`
const TitleHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const Title = styled.h3`
  font-size: 20px;
`
const TitleLabel = styled.div`
  padding: 0px 5px;
  color: white;
  font-size: 13px;
  border-radius: 5px;
  margin-left: 20px;
`
const ContentWrapper = styled.div`
  margin-top: 20px;
`

const MoreButton = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 24px;
  background-color: #f0f4fe;
  color: #729af7;
  font-size: 20px;
  margin-top: 20px;
`