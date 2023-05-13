import { useState } from 'react'
import DropDown from '../../common/dropdown'
import * as S from './style'
import { ConfirmAdminButtonClick, ConfirmButtonClick } from '../../common/alert'
import { useUpdateAdmin } from '../../../hooks/useUpdateAdmin'
import { useMutation } from 'react-query'
import { updateAdmin } from '../../../apis/services/Admin'
import { AxiosError } from 'axios'

function UserInfoItem({ user, team }) {
  const role = { ADMIN: '관리자', CEO: '대표', MANAGER: '팀장', USER: '팀원' }
  const changeRole = { 관리자: 'ADMIN', 대표: 'CEO', 팀장: 'MANAGER', 팀원: 'USER' }
  const [selectItem, setSelectItem] = useState(`${user.teamName === 'common' ? '무소속' : user.teamName}`)
  const [selectItem2, setSelectItem2] = useState(`${role[user.role]}`)

  const { mutate } = useMutation(() => updateAdmin(user.userId, selectItem, changeRole[selectItem2]), {
    onSuccess: () => {
      console.log('success')
    },
    onError: (err: AxiosError) => {
      console.log(err)
    },
  })

  return (
    <S.UserInfoItem>
      <S.UserProfile></S.UserProfile>
      <S.UserDetail>
        <h1>{user.email}</h1>
        <h3>{user.name}</h3>
      </S.UserDetail>
      <S.UserDetail>
        <h1>전화번호</h1>
        <h2>{user.phoneNumber}</h2>
      </S.UserDetail>
      <S.UserDetail>
        <h1>입시일자</h1>
        <h2>{user.startWork}</h2>
      </S.UserDetail>
      <S.DropdownWrapper>
        <DropDown
          list={team}
          width={'90px'}
          fontSize="14px"
          selectedItem={selectItem}
          setSelectedItem={setSelectItem}
        />
        <DropDown
          list={['팀장', '팀원', '대표']}
          width={'90px'}
          fontSize="14px"
          selectedItem={selectItem2}
          setSelectedItem={setSelectItem2}
        />
      </S.DropdownWrapper>
      <S.AdminButton
        onClick={() => {
          mutate(user.userId, selectItem, changeRole[selectItem2])
          // ConfirmAdminButtonClick(user.userId, selectItem, changeRole[selectItem2])
        }}
      >
        확인
      </S.AdminButton>
    </S.UserInfoItem>
  )
}

export default UserInfoItem
