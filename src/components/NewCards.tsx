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
  // const pagination = {
  //   el: '.swiper-pagination',
  //   type: 'bullets',
  //   clickable: true,
  //   dynamicBullets: true,
  //   bulletClass: 'singleBullet',
  //   renderBullet: function (index: number, className) {
  //     return '<span class="' + className + '">' + (index + 1) + '</span>'
  //   },
  // }

  const youtubeData = DUMMY_DATA.content.Youtube
  const newData = youtubeData.filter((like) => like.like_top === 1)
  const [isLike, setIsLike] = useState(false)
  console.log(newData)

  return (
    <CardWrapper>
      <CardTitle>새로 올라왔어요 new</CardTitle>
      <Swiper
        grabCursor={true}
        effect={'creative'}
        loop={true}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        pagination={true}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-120%', 0, -500],
          },
          next: {
            shadow: true,
            translate: ['120%', 0, -500],
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
        <div>
          <div className="swiper-pagination"></div>
          <IconWrapper>
            {isLike ? (
              <FillHeart onClick={() => setIsLike(!isLike)}>
                <AiFillHeart size={40} color={'red'} />
              </FillHeart>
            ) : (
              <Heart onClick={() => setIsLike(!isLike)}>
                <AiOutlineHeart size={40} color={'lightgray'} />
              </Heart>
            )}
            <LinkIcon>
              <IoShareOutline size={40} color={'lightgray'} />
            </LinkIcon>
          </IconWrapper>
        </div>
      </Swiper>
    </CardWrapper>
  )
}

const CardWrapper = styled.section`
  width: 350px;
  height: 360px;
  background-color: white;
  margin: 10px auto;
  border-radius: 10px;

  & .swiper {
    margin: 15px auto;
    /* width: 500px; */
    height: 240px;
    overflow: visible;
  }

  & .swiper-wrapper {
    overflow: hidden;
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
    position: absolute;
    bottom: -15%;
    width: 6rem;
  }

  & .swiper-pagination-bullet {
  }

  & .swiper-pagination-bullet-active {
    transform: scale(1.4);
    transition: 0.8s;
  }
`
const CardTitle = styled.div`
  font-size: 2rem;
  padding: 1rem;
`

const CardImg = styled.img`
  width: 30rem;
  object-fit: contain;
`

const CardTextWrapper = styled.div`
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  background-color: white;
  color: black;
  margin-top: 5px;
  font-size: 16px;
  padding: 5px 15px;
  border-radius: 10px;
  height: 6rem;
  width: 30rem;
`

const CardText = styled.div``

const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
`

const Heart = styled.div`
  cursor: pointer;
  transition: 0.5s;
`
const FillHeart = styled.div`
  transform: scale(1);
  transition: 10s;
`

const LinkIcon = styled.div`
  cursor: pointer;
`
