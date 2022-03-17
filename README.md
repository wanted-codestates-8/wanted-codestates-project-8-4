## 📑 프로젝트 소개

WANTED & CODESTATES 프리온보딩 코스

TEAM 8 팀기업과제 4번 입니다.

<br>

### < 디에이그라운드 >

PROJECT PERIOD: 2022.03.16 ~ 2022.03.17

<br>

[배포링크](https://wanted-8-4-i7.netlify.app/)

<br>

## ✨ 주요 기능
- [상단 Tab bar]는 Click을 통해 각각의 Tab으로 이동할 수 있습니다. Tab 간 이동 시 슬라이딩 애니메이션을 넣습니다.
- [공유하기] 기능은 해당 컨텐츠 링크를 새 창으로 띄웁니다.
- [새로 올라왔어요]의 Carousel View는 5초에 한번씩 바로 다음 컨텐츠로 슬라이딩 애니메이션 처리가 되면서 이동합니다.
- [더보기] 버튼을 눌렀을 때 모든 컨텐츠가 각 sector에 맞게 조회됩니다.
- 전역 데이터 관리를 도입하여 구현합니다.
- 프론트엔드 서버는 localhost:8888 으로 설정되어 있습니다.

<br>

### 🧔 메인

<br>

1. 로딩 인디케이터

<img src="https://user-images.githubusercontent.com/85816029/158819764-b613d861-4066-423d-879f-c93c1900273b.gif" width="700px" height="400px">

<br>

2. 탭 슬라이드

<img src="https://user-images.githubusercontent.com/85816029/158819686-9e027a02-a0aa-402f-a513-613544f2f78c.gif" width="700px" height="400px">

<br>

3. 알쓸B잡

<img src="https://user-images.githubusercontent.com/85816029/158819733-37964975-32ae-48cb-a1f3-95fd41249c69.gif" width="700px" height="400px">

<br>

4. 유튜브

<img src="https://user-images.githubusercontent.com/85816029/158819742-45bbac17-232b-446d-9265-c6a65e0b9583.gif" width="700px" height="400px">

<br>

5. 인사이트

<img src="https://user-images.githubusercontent.com/85816029/158819754-4e31afd2-1dab-4ca0-a656-74ee5d4ca665.gif" width="700px" height="400px">

<br>

### 구현한 기능 목록 및 어려웠던 점

<br>

1. 전체 그리드 / 탭

[ 박성현 ] 

- 구현 내용 & 방법
    - 전체페이지 Grid 구현.
    - 탭 슬라이더 애니메이션 구현.
- 구현하면서 어려웠던 점
    - 탭 슬라이더가 움직이는 원리가 처음 생각과 달라서 어려움이 있었습니다. translateX 를 props 값을 주어 계산하여 움직이게 하였습니다.
    - 처음 그리드를 프레임별로 나누었는데 점차 컴포넌트가 많아지면서 생각과 달리 움직여서 어려움이 있었습니다. 일정크기 이상 작아지면 flex로 바꿔 주었습니다.

<br>

[ 김혜영 ]

- 구현 내용 & 방법
  - 전체페이지 Grid 구현.
  - Loading Indicator 제작.
- 구현하면서 어려웠던 점
  - 안에 컨텐츠가 들어가 있지 않았을 때 grid를 사용하는 것은 크게 어렵지 않았는데 안에 컨텐츠를 넣기 시작하면서 각 컴포넌트들을 맡은 팀원들과 소통을 하며 조율을 해 나가야 했습니다. 이런 부분들을 사전에 이야기 하고 작업에 들어갔다면 세부조정에 시간이 덜 걸렸을 것이라고 생각합니다. 크게 어려운 부분은 아니지만 시간을 조금이라도 절약할 수 있는 방법이 있다면 그 쪽으로 나아가는 것이 개선해 나가는 길이라고 생각하기에 의식하고 개발을 해 나가면 좋을 것이라 생각됩니다.

<br>

2. new 카드 / 구독 컴포넌트

[ 변건오 ]

- 구현 내용 & 방법
    - ‘새로 올라왔어요’ Carousel 기능 구현
    - recoil 데이터 연동 및 링크 공유
- 구현하면서 어려웠던 점
    - 평소에 당연하게 쓰이는 CSS 이벤트들이 손쉽게 구현되는 것이 아니라는 것을 느꼈습니다.
    - 라이브러리 Document를 보고 적용하는 것이 쉽지않다고 느꼈습니다.
    - 이미지 슬라이드마다 슬라이드에 맞는 링크를 매칭시키는게 어려웠는데 slideChange 메서드를 통해 슬라이드가 변경되는 시점을 observe하여 그에 따른 링크를 부여했습니다.

<br>

[ 김진기 ] 

- 구현 내용 & 방법
    - 구독 컴포넌트 구현
    - ‘새로 올라왔어요’ Carousel 버튼 배치 다듬기
    - ‘새로 올라왔어요’ Carousel 슬라이드 애니메이션 다듬기
    - ‘새로 올라왔어요’ Carousel 좋아요 애니메이션, 등록/삭제 구현
    - ‘새로 올라왔어요’ Carousel의 좋아요가 탭과 슬라이드에 맞게 표시되는 기능 구현
- 구현하면서 어려웠던 점
    - Carousel 구현을 위해 Swiper 라이브러리를 사용했는데 Pagination Bullet을 바깥쪽에 배치시키는 게 어려웠습니다. `overflow: visible`을 설정하면 슬라이드 애니메이션이 제대로 작동하지 않아 Pagination 컴포넌트를 커스텀으로 만들어 해결했습니다.
    - Carousel 단독으로 반응형을 테스트할 때는 괜찮았는데 메인 그리드 안에 배치했을 때 크기가 몇천만 픽셀에 가깝게 커져서 이 문제를 해결하는 게 어려웠습니다. 정확한 원인 파악에는 실패했지만 Carousel의 구성요소 중 하나의 `width: 100%`가 버그를 일으켜 이를 고정된 값으로 수정하는 것으로 해결했습니다.

<br>

3. 컨텐츠 리스트 / 리스트 상세페이지

[ 김희진 ] 

- 구현 내용 & 방법
    - content list 컴포넌트 구현했습니다.
    - 상세페이지 레이아웃을 스크롤이 유지되도록 구현했습니다.
    - content detail 내용이 다른 탭을 누르더라도 유지가 되도록 구현했습니다.
- 구현하면서 어려웠던 점
    - content list 위에 content detail 컴포넌트가 올라가게 구현을 하였는데, 두 컴포넌트의 높이의 차이에 의해 content detail 컴포넌트의 레이아웃이 깨지고, 가려져야 할 content list 컴포넌트가 보였습니다.
    이를 해결하기 위해 content detail 컴포넌트가 활성화 되면 content list 컴포넌트에 `overflow : hidden` 속성을 주어 컨테이너 밖으로 content list 컴포넌트가 보이지 않게 만들었습니다. 
    하지만 스크롤이 이미 내려져 있는 상태에서는 `position:absolute`로 고정 해 놓은 content detail page가 보이지 않아 content detail 컴포넌트가 활성화 될 때 `scrollTop`값을 가져와 `top`에 값을 주어 어떤 상황에도 content detail 컴포넌트가 보이게 구현했습니다.

<br>

[ 최우철 ] 

- 구현 내용 & 방법
    - 아이템 리스트의 카드를 클릭했을 때 디테일 페이지의 내용을 조건부로 나타나도록 구현하였습니다
    - 해당 상세페이지 내용이 다른 탭을 누르고 다시 돌아오더라도 유지되도록 로직을 구현하였습니다
    - 상세페이지 레이아웃의 스크롤 내용을 항상 top에 고정되도록 레이아웃을 작성하였습니다
- 구현하면서 어려웠던 점
    - 아이템 리스트와 상세페이지의 크기가 서로 다르기 때문에 레이아웃이 충돌하는 문제가 발생하여 스크롤을 조건부로 조작할 필요가 있었습니다. 다행이 팀원분과 함께 의견을 나누고 여러가지 실험을 해보며 스크롤이 존재하는 컴포넌트 내에서 scrollTop 프로퍼티를 조회하면 얼마만큼 스크롤이 이동했는지를 확인할 수 있었기에 이 내용을 토대로 레이아웃을 짜서 요구되는 웹 버전의 상세페이지 팝업을 구현할 수 있었습니다.

4. API 요청 / 리코일

[ 이승우 ]

- 구현 내용 & 방법
    - recoil 설정 및 atom, selector 정의
    - 좋아요 기능과 recoil 연동
- 구현하면서 어려웠던 점
    - recoil의 selector에서 setter를 통해 상태를 변경하려고 하는 데서 시행착오를 겪었습니다. setter는 결국 atom 상태만을 변경할 수 있고 immutable하게 작동한다는 것을 배웠습니다.

<br>

## 🗂 프로젝트 구조

```
├── README.md
├── netlify.toml
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.tsx
│   ├── api.ts
│   ├── components
│   │   ├── ContentDetail.tsx
│   │   ├── ContentList.tsx
│   │   ├── ContentListItem.tsx
│   │   ├── Header.tsx
│   │   ├── LoadingIndicator.tsx
│   │   ├── NewCards.tsx
│   │   ├── Subscribe.tsx
│   │   └── Template.tsx
│   ├── index.tsx
│   ├── setupProxy.js
│   └── store.ts
├── tsconfig.json
└── yarn.lock
```

<br>

## 🛠 사용 기술

front-end

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![Recoil](https://img.shields.io/badge/recoil-%23593d88.svg?style=for-the-badge)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

dev-ops

![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)

community

![Discord](https://img.shields.io/badge/DISCORD-%237289DA.svg?style=for-the-badge&logo=discord&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Apple](https://img.shields.io/badge/-APPLE-black?style=for-the-badge&logo=apple)
![Ubuntu](https://img.shields.io/badge/-UBUNTU-gray?style=for-the-badge&logo=Ubuntu)

## 팀원소개

|     이름     | 포지션 |                                                                  깃헙                                                                   |
| :----------: | :----: | :-------------------------------------------------------------------------------------------------------------------------------------: |
| 최우철(팀장) | Front  | [![github](https://img.shields.io/badge/최우철-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/chltjdrhd777/) |
| 이승우(팀원) | Front  |   [![github](https://img.shields.io/badge/이승우-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/starhn87)    |
| 변건오(팀원) | Front  |    [![github](https://img.shields.io/badge/변건오-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/guno517)    |
| 박성현(팀원) | Front  |   [![github](https://img.shields.io/badge/박성현-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/psh9408p)    |
| 김희진(팀원) | Front  |  [![github](https://img.shields.io/badge/김희진-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/chloe41297)   |
| 김혜영(팀원) | Front  | [![github](https://img.shields.io/badge/김혜영-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/hit-that-drum) |
| 김진기(팀원) | Front  |   [![github](https://img.shields.io/badge/김진기-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/hatoba29)    |

