import React, { useState } from 'react'
import styled from '@emotion/styled'
import { useRecoilState, useRecoilValue } from 'recoil'
import { sectorSelector, tabState, TYPE } from 'store'
interface ITab {
  TabId: number
}

export default function Header() {
  const Tabcontent = [
    { id: 1, tab: '알쓸B잡' },
    { id: 2, tab: '유튜브' },
    { id: 3, tab: '인사이트' },
  ]
  const [tab, setTab] = useRecoilState(tabState)
  const [id, setId] = useState(1)
  const getId = (v: any) => {
    setTab(TYPE[v.id - 1])
    setId(v.id)
  }
  return (
    <TabWrap>
      <div style={{ width: '160px', height: '30px' }}>
        <img src="https://sandbank.io/img/icons/logo.svg" alt="Logo" />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <ul>
          {Tabcontent.map((v) => (
            <li key={v.id}>
              <div onClick={() => getId(v)}>
                <span>{v.tab}</span>
              </div>
            </li>
          ))}
        </ul>
        <TabSlider TabId={id} />
      </div>

      {/* <TabP /> */}
    </TabWrap>
  )
}
const TabWrap = styled.div`
  height: 7rem;
  padding: 0 2rem;
  background: #002473;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    display: flex;
    width: 100%;

    @media (max-width: 768px) {
      flex-direction: row;
      justify-content: space-around;
    }
  }
  li {
    @media (max-width: 768px) {
      margin-top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  div {
    @media (max-width: 768px) {
      justify-content: space-between;
    }

    align-items: center;
    span {
      &:hover {
        color: #23a2f7;
      }
      color: white;
      width: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width: 768px) {
        margin-left: 0px;
      }
    }
  }
`

const TabSlider = styled.div<ITab>`
  height: 5px;
  transition: 0.2s;
  left: 0;
  transition: 0.2s;
  width: 33.3%;
  border-bottom: 5px solid #23a2f7;
  transform: translateX(-100%);
  transform: ${(props) => `translateX(${100 * (props.TabId - 2)}%)`};
`
