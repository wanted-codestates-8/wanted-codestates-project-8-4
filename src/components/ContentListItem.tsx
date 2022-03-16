import React from 'react'
import styled from '@emotion/styled'
import { AiOutlineHeart } from 'react-icons/ai'
import { IoShareOutline } from 'react-icons/io5'

interface ListItem {
  image: string
  upload_date: string
  like_cnt: number
}

export default function ContentListItem({
  image,
  upload_date,
  like_cnt,
}: ListItem) {
  return (
    <>
      <ContentImg src={image}></ContentImg>
      <ContentInfo>
        <ContentDiv>{upload_date}</ContentDiv>
        <ContentDiv>
          <ContentSpan>
            <AiOutlineHeart></AiOutlineHeart>
            {like_cnt}
          </ContentSpan>
          <ContentSpan>
            <IoShareOutline></IoShareOutline>
            공유하기
          </ContentSpan>
        </ContentDiv>
      </ContentInfo>
    </>
  )
}

const ContentImg = styled.img`
  width: 100%;
`
const ContentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const ContentDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #a9aaae;
  font-size: 13px;
`
const ContentSpan = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #a9aaae;
  font-size: 13px;
  margin-left: 10px;
`
