import AddTeamItem from '../addTeamItem'
import * as S from './style'
import { ConfirmButtonClick } from '../../common/alert'
import { useMutation } from 'react-query'
import { addTeam } from '../../../apis/services/Admin'
import { AxiosError } from 'axios'
import { useState } from 'react'
import { AddTeamProps } from '../../../interface/admin'

function AddTeamContainer({ teamInfo, refetch }: AddTeamProps) {
  const [teamInput, setTeamInput] = useState('')

  const { mutate } = useMutation(() => addTeam(teamInput), {
    onSuccess: () => {
      refetch()
      console.log('success')
    },
    onError: (err: AxiosError) => {
      console.log(err)
    },
  })
  return (
    <S.AddTeamContainer>
      <S.AddTeamInput>
        <input
          type="text"
          placeholder="추가할 팀을 작성해주세요."
          onChange={(e) => {
            setTeamInput(() => e.target.value)
          }}
        />
        <button
          onClick={() => {
            if (teamInput.includes('팀')) {
              mutate()
            } else {
              alert('이름에 팀이 들어가야 합니다.')
            }
            // mutate(teamName)
          }}
        >
          추가
        </button>
      </S.AddTeamInput>
      <S.AddTeamWrapper>
        {teamInfo.map((team) => {
          return <AddTeamItem team={team} refetch={refetch} />
        })}
      </S.AddTeamWrapper>
    </S.AddTeamContainer>
  )
}

export default AddTeamContainer
