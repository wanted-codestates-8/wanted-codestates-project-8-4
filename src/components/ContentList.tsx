import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { DUMMY_DATA } from 'dummy'
import ContentListItem from './ContentListItem'

interface Contents {
  tabName: keyof typeof DUMMY_DATA.content
}

const labelColor = {
  Youtube: '#C4472A',
  Opinion: '#729AF8',
  Insight: '#9493D1',
}

export default function ContentList({ tabName }: Contents) {
  // const content: typeof DUMMY_DATA.content.Opinion = DUMMY_DATA.content[tabName]
  // const shortContent = content.slice(0, 3)
  const sector = DUMMY_DATA.sector[tabName]
  const initialContent = DUMMY_DATA.content[tabName]
  const [content, setContent] =
    useState<typeof DUMMY_DATA.content.Opinion>(initialContent)
  const [moreContent, setMoreContent] = useState(false)

  useEffect(() => {
    if (!moreContent) {
      setContent(initialContent.slice(0, 3))
    } else {
      setContent(initialContent)
    }
  }, [moreContent])

  return (
    <Section>
      <TitleHeader>
        <Title>{sector.title}</Title>
        <TitleLabel style={{ backgroundColor: `${labelColor[tabName]}` }}>
          {sector.type}
        </TitleLabel>
      </TitleHeader>
      {content.map((list) => (
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
    </Section>
  )
}

const Section = styled.section`
  width: 100%;
  min-width: 400px;
  border-radius: 20px;
  border: 1px solid #e0e0e0;
  // box-shadow: 10px 10px 10px #e0e0e0;
  padding: 20px;
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
