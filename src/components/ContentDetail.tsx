import React, { Dispatch } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { IoIosArrowBack } from 'react-icons/io'
import { AiOutlineHeart } from 'react-icons/ai'
import { IoShareOutline } from 'react-icons/io5'
import { IState } from 'store'

interface Props {
  listTitle: string
  type: keyof IState['sector']
  open: boolean
  setOpen: Dispatch<React.SetStateAction<boolean>>
  content: any
}

export default function ContentDetail({
  listTitle,
  type,
  content,
  open,
  setOpen,
}: Props) {
  function mainSelect() {
    switch (type) {
      case 'youtube':
        return (
          <MainContent>
            <YoutubeIframeContainer>
              <iframe
                src={`https://www.youtube.com/embed/${content?.link}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </YoutubeIframeContainer>

            <ContentTitle>
              <p>{content?.title}</p>
            </ContentTitle>
          </MainContent>
        )

      case 'insight':
        return (
          <MainContent>
            <ContentTitle className="margin-bottom">
              <p>{content?.title}</p>
            </ContentTitle>

            <InsightImgContainer>
              <img src={content?.image} alt="insight imgage" />
            </InsightImgContainer>
          </MainContent>
        )
    }
  }

  return (
    <Container open={open}>
      <Header>
        <IoIosArrowBack className="back-icon" onClick={() => setOpen(false)} />
        <span className="list-title">{listTitle}</span>
      </Header>

      {mainSelect()}

      <ContentBody>
        <p>{content?.body}</p>
      </ContentBody>

      {type === 'insight' && (
        <Readmore>
          <button className="btn">전체 리포트 읽기</button>
        </Readmore>
      )}

      <Social>
        <span className="heart">
          <AiOutlineHeart />
          좋아요
        </span>

        <span className="share">
          <IoShareOutline />
          공유하기
        </span>
      </Social>
    </Container>
  )
}

//! common
const Container = styled.article<{ open: boolean }>`
  width: 100%;
  height: 100%;
  background-color: white;
  overflow-y: auto;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
`
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  position: relative;
  height: 10%;
  font-weight: 600;

  & .back-icon {
    position: absolute;
    font-size: 3rem;
    color: grey;
    left: 0;
    cursor: pointer;
  }
`
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
`
const ContentTitle = styled.div`
  min-height: 10rem;
  padding: 1rem 2rem;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--lighter);

  & > p {
    width: 100%;
    font-size: 2.5rem; //%should media
    line-height: 1.25;
    text-align: center;
    word-break: keep-all;
  }

  &.margin-bottom {
    margin-top: 0;
    margin-bottom: 2rem;
  }
`

const ContentBody = styled.div`
  padding: 3rem;
  font-size: 2rem; //%should media
  line-height: 1.5; //%should media
  & p {
    word-break: keep-all;
    white-space: pre-wrap;
  }
`
const Social = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  font-size: 1.6rem;
  color: var(--gray);
  margin-bottom: 2rem;

  & span {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    cursor: pointer;
  }
`

//# youtube
const YoutubeIframeContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%; //%should media
  overflow: hidden;
  height: 0;
  max-width: 100%;

  & iframe,
  object,
  embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

//# Insight
const InsightImgContainer = styled.div`
  height: 40rem;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

//@ optional
const Readmore = styled.div`
  text-align: center;
  padding: 1rem 2rem;
`
