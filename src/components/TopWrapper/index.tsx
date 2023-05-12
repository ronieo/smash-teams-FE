import React from 'react'
import DropDown from '../common/dropdown'
import * as S from './style'

interface ListToggleTopWrapperProps {
  items: string[]
  selectedItem: string
  setSelectedItem: React.Dispatch<React.SetStateAction<string>>
  isRequestList: boolean
  isCompletedList: boolean
  listHandleButtonClick: (buttonType: 'request' | 'completed') => void
}

function ListToggleTopWrapper({
  items,
  selectedItem,
  setSelectedItem,
  isRequestList,
  isCompletedList,
  listHandleButtonClick,
}: ListToggleTopWrapperProps) {
  return (
    <S.TopWrapper>
      <DropDown
        list={items}
        width={'70px'}
        fontSize={'20px'}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <S.ButtonWrapper>
        <S.RequestingButton isButtonStatus={isRequestList} onClick={() => listHandleButtonClick('request')}>
          신청중 목록
        </S.RequestingButton>
        <S.Completionbutton isButtonStatus={isCompletedList} onClick={() => listHandleButtonClick('completed')}>
          완료된 목록
        </S.Completionbutton>
      </S.ButtonWrapper>
    </S.TopWrapper>
  )
}

export default ListToggleTopWrapper
