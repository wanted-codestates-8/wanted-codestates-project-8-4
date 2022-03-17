import styled from '@emotion/styled'
const Subscribe = () => {
  return (
    <SubscribeWrapper>
      <Subtitle>매주 새로운 코인 지식을 드려요</Subtitle>
      <Title>샌드뱅크 오리지널</Title>
      <Button>구독하기</Button>
    </SubscribeWrapper>
  )
}

const SubscribeWrapper = styled.section`
  margin-top: 20px;
  width: 100%;
  min-width: 28rem;
  height: 8rem;
  border-radius: 1rem;
  padding: 0 1.6rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);

  display: grid;
  grid-template-columns: 2fr 1fr;
`

const Subtitle = styled.h2`
  color: #979797;
  font-size: 12px;

  align-self: end;
`

const Title = styled.h1`
  color: #669cff;
  font-size: 18px;

  grid-row: 2;
`

const Button = styled.button`
  padding: 0.8rem 1.6rem;
  background-color: #669cfe;
  border-radius: 1.5rem;

  color: white;
  font-weight: bold;

  place-self: center end;
  grid-column: 2;
  grid-row: 1 / 3;
`

export default Subscribe
