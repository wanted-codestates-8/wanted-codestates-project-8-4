import React, { useState } from 'react'
import styled from '@emotion/styled'
import { AiOutlineYoutube } from 'react-icons/ai'
import { BiDockLeft } from 'react-icons/bi'
import { CgInsights } from 'react-icons/cg'

export default function Tab() {
  const Tabcontent = [
    { id: 1, tab: '유투브', logo: <AiOutlineYoutube /> },
    { id: 2, tab: '알쓸B잡', logo: <BiDockLeft /> },
    { id: 3, tab: '인사이트', logo: <CgInsights /> },
  ]
  const [border, setBorder] = useState(1)

  return (
    <TabWrap>
      <img src="https://sandbank.io/img/icons/logo.svg" />
      <ul>
        {Tabcontent.map((v) => (
          <li
            className={border === v.id ? 'active' : ''}
            key={v.id}
            onClick={() => setBorder(v.id)}
          >
            <div className={border === v.id ? 'active' : ''}>
              <Img>{v.logo}</Img>
              <span>{v.tab}</span>
              <TabSlider />
            </div>
          </li>
        ))}
      </ul>
    </TabWrap>
  )
}
const TabWrap = styled.div`
  padding: 20px;
  cursor: pointer;
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {
      flex-direction: row;
      justify-content: space-around;
      /* border-bottom: 1px solid salmon; */
    }
  }
  li {
    margin-top: 30px;

    @media (max-width: 768px) {
      margin-top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      &.active {
        border-bottom: 5px solid dodgerblue;
        transition: 0.2s;
      }
    }
  }
  div {
    display: flex;

    @media (max-width: 768px) {
      justify-content: space-between;
    }

    align-items: center;
    span {
      margin-left: 20px;
      @media (max-width: 768px) {
        margin-left: 0px;
      }
    }
  }
`
const Img = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
`

export const TabSlider = styled.div`
  position: absolute;
  background: #669cfe;
  width: 100px;
  height: 5px;
  bottom: 0;
  transition: 0.2s;
  transform: translateX(100px);
`
