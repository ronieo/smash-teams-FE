import * as S from './style'
import { ConfirmButtonClick } from '../../common/alert'

function AddTeamItem() {
  return (
    <S.AddTeamItem>
      <div>개발팀</div>
      <span>N명</span>
      <button onClick={ConfirmButtonClick}>삭제</button>
    </S.AddTeamItem>
  )
}

export default AddTeamItem
