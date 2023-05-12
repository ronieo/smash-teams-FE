import { useState } from 'react'
import * as S from './style'
import { dropdownProps } from '../../../interface/common/dropdown'

function DropDown({ list, width, fontSize, selectedItem, setSelectedItem }: dropdownProps) {
  // list는 DropDown Item 항목을 배열 형식으로 저장된 값이다.
  // width은 전체 컴포넌트의 너비 값이다.

  // 드롭다운 아이템을 보여주는 여부
  const [btnClick, setBtnClick] = useState(false)
  // 현재 설정되어 있는 아이템 이름

  return (
    <S.DropDownWrapper width={width}>
      <S.DropDownButton
        fonsSize={fontSize}
        onClick={() => {
          setBtnClick(!btnClick)
        }}
      >
        {selectedItem}
      </S.DropDownButton>
      <S.DropDownListWrapper>
        {btnClick ? (
          list.map((li: string, key: number, arr: string[]) => {
            if (arr[list.length - 1] === li) {
              return (
                <S.DropDownList
                  key={key}
                  border={false}
                  onClick={() => {
                    setSelectedItem(li)
                    setBtnClick(!btnClick)
                  }}
                >
                  {li}
                </S.DropDownList>
              )
            }
            return (
              <S.DropDownList
                key={key}
                border={true}
                onClick={() => {
                  setSelectedItem(li)
                  setBtnClick(!btnClick)
                }}
              >
                {li}
              </S.DropDownList>
            )
          })
        ) : (
          <></>
        )}
      </S.DropDownListWrapper>
    </S.DropDownWrapper>
  )
}

export default DropDown
