import React, { useEffect, useState, useRef } from 'react'
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
  const [scrollTop, setScrollTop] = useState(0)

  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!moreContent) {
      setContent(initialContent.slice(0, 3))
    } else {
      setContent(initialContent)
    }
  }, [moreContent, setContent, initialContent])

  useEffect(() => {
    setSelected(null)
  }, [type])

  useEffect(() => {
    if (selected) {
      setScrollTop(containerRef.current?.scrollTop as number)
    }
  }, [selected])

  function onHandleCardClick(list: IContent) {
    if (type === 'opinion') {
      window.open(list.link)
    } else {
      setSelected(list)
      setOpen(true)
    }
  }

  return (
    <Section overflow={selected !== null} ref={containerRef}>
      <TitleHeader>
        <Title>{sector.title}</Title>
        <TitleLabel style={{ backgroundColor: `${labelColor[type]}` }}>
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
            type={type}
            list={list}
            onHandleCardClick={onHandleCardClick}
          ></ContentListItem>
        </ContentWrapper>
      ))}

      <MoreButton onClick={() => setMoreContent(!moreContent)}>
        {moreContent ? '접기' : '더보기'}
      </MoreButton>

      {type !== 'opinion' && (
        <ContentDetail
          open={open}
          setOpen={setOpen}
          listTitle={sector.title}
          content={selected}
          setSelected={setSelected}
          type={type}
          scrollTop={scrollTop}
        />
      )}
    </Section>
  )
}

const Section = styled.section<{ overflow: boolean }>`
  width: 100%;
  min-width: 400px;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  position: relative;
  overflow-x: hidden;
  overflow-y: ${({ overflow }) => (overflow ? 'hidden' : 'auto')};
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
