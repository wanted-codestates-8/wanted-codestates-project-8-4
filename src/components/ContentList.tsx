import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { useRecoilState, useRecoilValue } from 'recoil'
import {
  contentSelector,
  IContent,
  sectorSelector,
  tabState,
  TYPE,
} from 'store'
import ContentListItem from './ContentListItem'
import ContentDetail from './ContentDetail'

const labelColor = {
  opinion: '#729AF8',
  youtube: '#C4472A',
  insight: '#9493D1',
}

interface Contents {
  type: keyof typeof labelColor
}

export default function ContentList({ type }: Contents) {
  const sector = useRecoilValue(sectorSelector)
  const initialContent = useRecoilValue(contentSelector)
  const [content, setContent] = useState(initialContent)
  const [moreContent, setMoreContent] = useState(false)
  const [selected, setSelected] = useState<IContent | null>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!moreContent) {
      setContent(initialContent.slice(0, 3))
    } else {
      setContent(initialContent)
    }
  }, [moreContent, setContent, initialContent])

  function onHandleCardClick(list: IContent) {
    if (type === 'opinion') {
      window.open(list.link)
    } else {
      setSelected(list)
      setOpen(true)
    }
  }

  return (
    <Section>
      <TitleHeader>
        <Title>{sector.title}</Title>
        <TitleLabel style={{ backgroundColor: `${labelColor[type]}` }}>
          {sector.type}
        </TitleLabel>
      </TitleHeader>
      {content.map((list) => (
        <ContentWrapper key={list.id} onClick={() => onHandleCardClick(list)}>
          <ContentListItem
            image={list.image}
            upload_date={list.upload_date}
            like_cnt={list.like_cnt}
            link={list.link}
            type={type}
          ></ContentListItem>
        </ContentWrapper>
      ))}

      <MoreButton onClick={() => setMoreContent(!moreContent)}>
        {moreContent ? '접기' : '더보기'}
      </MoreButton>

      <ContentDetail
        open={open}
        setOpen={setOpen}
        listTitle={sector.title}
        content={selected}
        type={type}
      />
    </Section>
  )
}

const Section = styled.section`
  background-color: white;
  width: 40%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  border-radius: 20px;
  border: 1px solid #e0e0e0;
  position: relative;
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
  cursor: pointer;
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
