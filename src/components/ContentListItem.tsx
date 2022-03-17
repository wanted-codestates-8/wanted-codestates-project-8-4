import React, { Dispatch } from 'react'
import styled from '@emotion/styled'
import { AiOutlineHeart } from 'react-icons/ai'
import { IoShareOutline } from 'react-icons/io5'
import { IContent, IState } from 'store'

interface ListItem {
  type: keyof IState['sector']
  image: string
  upload_date: string
  like_cnt: number
  link: string
  list: IContent
  onHandleCardClick: (list: IContent) => void
  onLikeClick: (id: number) => void
}

export default function ContentListItem({
  type,
  image,
  upload_date,
  like_cnt,
  link,
  list,
  onHandleCardClick,
  onLikeClick,
}: ListItem) {
  const handleShare = () => {
    let url = ''

    if (type === 'youtube') {
      url = `https://www.youtube.com/watch?v=${link}`
    } else {
      url = link
    }
    window.open(url, '_blank')
  }

  return (
    <>
      <ContentImg
        src={image}
        onClick={() => onHandleCardClick(list)}
      ></ContentImg>
      <ContentInfo>
        <ContentDiv>{upload_date}</ContentDiv>
        <ContentDiv>
          <ContentSpan>
            <AiOutlineHeart
              onClick={() => onLikeClick(list.id)}
            ></AiOutlineHeart>
            {like_cnt}
          </ContentSpan>
          <ContentSpan onClick={handleShare}>
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
