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

import { contentSelector } from 'store'
import { useRecoilValue } from 'recoil'

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

  const contentData = useRecoilValue(contentSelector)
  const newData = contentData.filter((like) => like.like_top === 1)
  const [isLike, setIsLike] = useState(true)

  //id : opinion(1) youtube(2) insight(3)
  const url = newData.map((content) =>
    content.sector_id === 2 ? `https://youtu.be/${content.link}` : content.link
  )

  // console.log(url)

  // window.open(`https://www.youtube.com/watch?v=${data.link}`, '_blank')

  const goLink = () => {
    window.open()
    // url.map((content, idx) => {
    //   window.open(url[idx], '_blank')
    // })
  }

  const checkId = (id: number, link: string) => {
    if (id === 2) {
      window.open(`https://youtu.be/${link}`, '_blank')
    } else {
      window.open(link, '_blank')
    }
  }

  const path_heart_empty =
      'M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z',
    path_heart_fill =
      'M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z'

  return (
    <CardWrapper>
      <CardTitle>
        새로 올라왔어요
        <CardTitleLabel>NEW</CardTitleLabel>
      </CardTitle>
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
              <>
                <SwiperSlide
                  key={data.id}
                  onClick={() => window.open(data.link, '_blank')}
                >
                  <CardImg src={data.image} />
                  <CardTextWrapper>
                    <CardText>{data.title}</CardText>
                  </CardTextWrapper>
                </SwiperSlide>
              </>
            )
          })}
        <div className="swiper-pagination"></div>
        {newData &&
          newData.map((data) => {
            return (
              <IconWrapper key={data.id}>
                <Heart>
                  <svg
                    className={isLike ? 'off_button' : 'on_button'}
                    width={'35px'}
                    height={'35px'}
                    viewBox="0 0 48 48"
                    onClick={() => setIsLike(!isLike)}
                  >
                    <path d={isLike ? path_heart_empty : path_heart_fill} />
                  </svg>
                </Heart>
                <LinkIcon onClick={() => checkId(data.sector_id, data.link)}>
                  <IoShareOutline size={40} color={'rgba(0, 0, 0, 0.5)'} />
                </LinkIcon>
              </IconWrapper>
            )
          })}
      </Swiper>
    </CardWrapper>
  )
}

const CardWrapper = styled.section`
  width: 35rem;
  height: 360px;
  background-color: white;
  margin: 10px auto;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);

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
  display: flex;
  font-size: 2rem;
  padding: 1rem;
  align-items: center;
`

const CardTitleLabel = styled.span`
  padding: 0px 5px;
  color: white;
  font-size: 13px;
  border-radius: 5px;
  margin-left: 5px;
  background: #20cc20;
  text-align: center;
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
  height: 50px;
`

const Heart = styled.div`
  cursor: pointer;
  color: black;

  .off_button {
    fill: #262626;
    animation-name: btn1_animation;
    animation-duration: 0.25s;
  }
  @keyframes btn1_animation {
    0% {
      /* width: 100%;
      height: 100%; */
      transform: scale(1);
    }
    50% {
      /* width: 105%;
      height: 105%;
      margin-left: -5.5%;
      margin-top: -5.5%; */
      transform: scale(1.1);
    }
    100% {
      /* width: 100%;
      height: 100%; */
      transform: scale(1);
    }
  }

  .on_button {
    fill: #ed4956;
    animation-name: btn2_animation;
    animation-duration: 0.25s;
  }

  @keyframes btn2_animation {
    0% {
      /* width: 100%;
      height: 100%; */
      transform: scale(1);
    }
    50% {
      /* width: 105%;
      height: 105%;
      margin-left: -5.5%;
      margin-top: -5.5%; */
      transform: scale(1.1);
    }
    100% {
      /* width: 100%;
      height: 100%; */
      transform: scale(1);
    }
  }
`

const FillHeart = styled.div`
  transform: scale(1);
  transition: 10s;
`

const LinkIcon = styled.div`
  cursor: pointer;
`

// const Input = styled.input`
//   height: 0;
//   width: 0;

//   &:checked + label {
//     &:after {
//       transform: transform: scale(3);
//     }
//   }
// `

// const Label = styled.label`
//   outline: none;
//   user-select: none;
//   color: lightgray;
//   cursor: pointer;
//   background: #fff;
//   position: relative;
//   overflow: hidden;

//   &::after {
//     content: '';
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     top: 0;
//     left: 0;
//     transform: scale(0);
//     transition: transform 0.3s ease-in;
//     mix-blend-mode: difference;
//     //Gradient start values are somewhat arbitrary. But this seemed a good fit to avoid overly-blurry circle edge.
//     background: radial-gradient(circle at center, #fff, red 100%);
//   }

//   &:active {
//     top: 3px;
//   }
// `
