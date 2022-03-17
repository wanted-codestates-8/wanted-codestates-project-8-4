import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-creative'
import 'swiper/css/pagination'
// import required modules
import { Autoplay, EffectCreative, Pagination } from 'swiper'
import styled from '@emotion/styled'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { IoShareOutline } from 'react-icons/io5'
import { DUMMY_DATA } from 'dummy'

export default function NewCards() {
  const youtubeData = DUMMY_DATA.content.Youtube
  const newData = youtubeData.filter((like) => like.like_top === 1)
  const [isLike, setIsLike] = useState(false)

  return (
    <CardWrapper>
      <CardTitle>
        새로 올라왔어요 <TitleNew>NEW</TitleNew>
      </CardTitle>
      <Swiper
        grabCursor={true}
        effect={'creative'}
        loop={true}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          el: '.swiper-pagination',
          type: 'bullets',
        }}
        creativeEffect={{
          prev: {
            opacity: 0.5,
            translate: ['-120%', 0, -200],
          },
          next: {
            opacity: 0.5,
            translate: ['120%', 0, -200],
          },
        }}
        modules={[Autoplay, EffectCreative, Pagination]}
        className="mySwiper"
      >
        {newData &&
          newData.map((data) => {
            return (
              <SwiperSlide key={data.id}>
                <CardImg src={data.image} />
                <CardTextWrapper>
                  <CardText>{data.title}</CardText>
                </CardTextWrapper>
              </SwiperSlide>
            )
          })}
        <BottomWrapper>
          <div className="swiper-pagination" />
          <IconWrapper>
            <HeartWrapper>
              <FillHeart
                className={isLike ? 'show' : ''}
                onClick={() => setIsLike(!isLike)}
              >
                <AiFillHeart size="100%" color={'red'} />
              </FillHeart>
              <Heart
                className={isLike ? '' : 'show'}
                onClick={() => setIsLike(!isLike)}
              >
                <AiOutlineHeart size="100%" color={'#adaeb3'} />
              </Heart>
            </HeartWrapper>
            <LinkIcon>
              <IoShareOutline size={40} color={'#adaeb3'} />
            </LinkIcon>
          </IconWrapper>
        </BottomWrapper>
      </Swiper>
    </CardWrapper>
  )
}

const CardWrapper = styled.section`
  background-color: white;
  margin: 1rem auto;
  border-radius: 2rem;
  padding: 1.6rem;
  box-shadow: 0 0 1.6rem rgba(0, 0, 0, 0.2);

  & .swiper {
    height: fit-content;
  }

  & .swiper-wrapper {
  }

  & .swiper-slide {
    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: 22px;
    font-weight: bold;
    color: black;
    background-color: white;
  }

  & .swiper-pagination {
    position: static;
    width: 7rem;
    margin-bottom: 0.4rem;
    margin-left: 0.6rem;

    display: flex;
    justify-content: space-between;
  }

  & .swiper-pagination-bullet {
    background-color: #347af4;
    transition: 0.3s 0.3s;
  }

  & .swiper-pagination-bullet-active {
    transform: scale(1.4);
  }
`
const CardTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  padding-top: 0.6rem;
  padding-bottom: 2rem;
`

const TitleNew = styled.span`
  border-radius: 0.4rem;
  padding: 0.2rem 0.6rem;
  background-color: #71e4ae;

  color: white;
  font-size: 1.2rem;
  font-weight: 400;
`

const CardImg = styled.img`
  width: 100%;
  object-fit: contain;
`

const CardTextWrapper = styled.div`
  height: 9rem;
  width: 98%;
  margin: 1rem 0;
  border-radius: 10px;
  padding: 1.6rem;
  box-shadow: 0 0.4rem 0.8rem -0.2rem rgba(0, 0, 0, 0.2);
  background-color: white;

  font-size: 1.8rem;
  font-weight: bold;

  display: grid;
  place-items: center;
`

const CardText = styled.div`
  margin-top: -0.2rem;
`

const BottomWrapper = styled.div`
  margin-top: 1.6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

const IconWrapper = styled.div`
  width: 9.6rem;
  display: flex;
  justify-content: space-between;
`

const HeartWrapper = styled.div`
  position: relative;
  width: 4rem;
  height: 4rem;
`

const Heart = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 0;
  height: 0;
  transition: width 0.2s ease-out, height 0.2s ease-out;

  display: grid;
  place-items: center;

  &.show {
    top: 50%;
    width: 4rem;
    height: 4rem;
    display: block;
    cursor: pointer;
  }
`
const FillHeart = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 0;
  height: 0;
  transition: width 0.2s ease-out, height 0.2s ease-out;

  display: grid;
  place-items: center;

  &.show {
    top: 50%;
    width: 4rem;
    height: 4rem;
    display: block;
    cursor: pointer;
  }
`

const LinkIcon = styled.div`
  cursor: pointer;
`
