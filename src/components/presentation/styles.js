import styled from 'styled-components'

export const PresentationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.12rem;

  img {
    margin-top: 1.7rem;
  }
`

export const PresentationHello = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  width: 100%;
  padding-bottom: 1.31rem;
`

export const PresentationGradient = styled.span`
  background: linear-gradient(
    262.49deg,
    #8bc6ec 23.94%,
    #87ceff 24.6%,
    #797ff8 55.82%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

export const PresentationDescription = styled.h1`
  font-family: 'Rubik';
  font-style: normal;

  font-weight: 400;
  font-size: 1.62rem;
  line-height: 140.5%;

  margin-top: 1.31rem;
  color: #333333;
`
