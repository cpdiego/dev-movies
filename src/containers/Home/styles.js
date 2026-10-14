import styled, { keyframes } from 'styled-components'
import { Container as SliderContainer } from '../../components/Slider/styles'

const scale = keyframes`
  from {
    transform: scale(0)
  }
  to {
    transform: scale(1)
  }
`

export const Wrapper = styled.div`
  background-color: #000;
  width: 100%;
  min-height: 100vh;

  ${SliderContainer}:last-of-type {
    margin-bottom: 40px;
  }
`

export const Background = styled.div`
  background-image: url(${(props) => props.$img});
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 120px;
    background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  max-width: 1500px;
`

export const Info = styled.div`
  z-index: 1;
  padding: 20px;
  width: 50%;

  h1 {
    font-size: 4rem;
    font-weight: 700;
    color: #ffffff;
  }

  p {
    font-size: 18px;
    font-weight: 500;
    color: #ffffff;
    margin-top: 20px;
    margin-bottom: 35px;
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  gap: 20px;
`

export const Poster = styled.div`
  z-index: 1;

  img {
    width: 400px;
    border-radius: 20px;
    animation: ${scale} 0.5s linear;
  }
`
