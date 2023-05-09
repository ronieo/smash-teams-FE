import styled from 'styled-components'
import { Swiper } from 'swiper/react'
import { theme } from '../../../styles/Theme'

export const ListWrapper = styled(Swiper)`
  width: 100%;
  height: 270px;
  min-height: 260px;
  display: flex;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  border-radius: 30px;
  padding: 24px 40px;
  overflow: hidden;
  .swiper-wrapper {
    display: flex;
  }

  .swiper-button-prev,
  .swiper-button-next {
    background-color: #000;
    opacity: 0.7;
    padding: 15px 5px;
    border-radius: 20px;
    color: ${theme.colors.white} !important;
  }
  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 1.1rem !important;
    font-weight: 600 !important;
  }
  .swiper-pagination-bullet {
    background: ${theme.colors.black} !important;
  }
`

export const NoDataImageWrapper = styled.div`
  width: 1000px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const NoDataImage = styled.img`
  height: 100%;
  object-fit: cover;
`
