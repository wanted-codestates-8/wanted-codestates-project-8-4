import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Global, css } from '@emotion/react'
import { RecoilRoot } from 'recoil'

const global = css`
  :root {
    --primary: #669cff;
    --blue: #5e72e4;
    --sky: #e0f0ff;
    --gray: #6c757d;
    --lighter: #e9ecef;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    font-size: 1.6rem;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    background-color: white;
  }

  a {
    text-decoration: none;
    color: black;
  }
  ul {
    list-style-type: none;
  }
  img {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  button {
    border: none;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }
  input {
    outline: none;
    padding: 0 1.5rem;
    &:focus::placeholder {
      color: transparent;
    }
  }

  .btn {
    background-color: var(--sky);
    color: var(--primary);
    padding: 0.5rem 2.5rem;
    font-size: 2rem;
    font-weight: bold;
    border-radius: 2rem;
    margin-top: 1rem;
    margin-bottom: 3rem;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <Global styles={global} />
    <RecoilRoot>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
)
