import React from 'react'
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

  const bullet = ['1번', '2번', '3번', '4번']

  return (
    <CardWrapper>
      <CardTitle>새로 올라왔어요 new</CardTitle>
      <Swiper
        grabCursor={true}
        effect={'creative'}
        loop={true}
        // autoplay={{
        //   // delay: 15000,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
          bulletClass: 'singleBullet',
          renderBullet: function (index, className) {
            return (
              '<span class="' + className + '">' + bullet[index] + '</span>'
            )
          },
        }}
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
        <SwiperSlide>
          <CardImg src={`${process.env.PUBLIC_URL}/favicon.ico`} />
          <CardTextWrapper>
            <CardText>
              부동산 시장에도 번진 크립토 금융!
              <br /> 이제 비트코인으로 모기지론 받는다?
            </CardText>
          </CardTextWrapper>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <div>
          <div className="swiper-pagination"></div>
          <IconWrapper>
            <AiOutlineHeart size={40} />
            <AiFillHeart size={40} color={'red'} />
            <IoShareOutline size={40} />
          </IconWrapper>
        </div>
      </Swiper>
    </CardWrapper>
  )
}

const CardWrapper = styled.section`
  width: 400px;
  height: 400px;
  background-color: #f9f9f9f9;
  margin: 10px auto;

  & .swiper {
    margin: 50px auto;
    width: 320px;
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
    width: 100px;
  }

  & .swiper-pagination-bullet {
  }

  & .signleBullet {
  }
`
const CardTitle = styled.div``

const CardImg = styled.img``

const CardTextWrapper = styled.div`
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  background-color: white;
  color: black;
  margin-top: 5px;
  font-size: 16px;
  padding: 5px;
  border-radius: 10px;
`

const CardText = styled.div``

const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
