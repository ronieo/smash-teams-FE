import * as S from './style'
import { ConfirmButtonClick } from '../../common/alert'
import { useMutation } from 'react-query'
import { deleteTeam } from '../../../apis/services/Admin'
import { AxiosError } from 'axios'

function AddTeamItem({ team, refetch }) {
  const { mutate } = useMutation(() => deleteTeam(team.teamId), {
    onSuccess: () => {
      console.log('success')
      refetch()
    },
    onError: (err: AxiosError) => {
      alert('팀을 비운 후 다시 시도해주세요.')
      console.log(err)
    },
  })
  return (
    <S.AddTeamItem>
      <div>{team.teamName}</div>
      <span>{team.teamCount}명</span>
      <button
        onClick={() => {
          mutate(team.teamId)
        }}
      >
        삭제
      </button>
    </S.AddTeamItem>
  )
}

export default AddTeamItem
