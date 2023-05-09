import styled from 'styled-components'
import { Swiper } from 'swiper/react'
import { theme } from '../../styles/Theme'
import { HistoryButtonProps } from '../../interface/schedule'

export const DayOffList = styled.div``
export const NightSheetList = styled.div`
  margin-top: 30px;
`

export const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-radius: 14px;
  margin-bottom: 14px;
`
export const RequestingButton = styled.div<HistoryButtonProps>`
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  background-color: ${(props) => {
    return props.isButtonStatus ? theme.colors.blackCompleteList : theme.colors.white
  }};

  color: ${(props) => {
    return props.isButtonStatus ? theme.colors.white : theme.colors.blackCompleteList
  }};
`
export const Completionbutton = styled.div<HistoryButtonProps>`
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  margin-left: 20px;
  background-color: ${(props) => {
    return props.isButtonStatus ? theme.colors.blackCompleteList : theme.colors.white
  }};

  color: ${(props) => {
    return props.isButtonStatus ? theme.colors.white : theme.colors.blackCompleteList
  }};
`

export const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
`
export const ButtonWrapper = styled.div`
  display: flex;
`
export const BottomWrapper = styled.div``

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
