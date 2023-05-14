import AddTeamItem from '../addTeamItem'
import * as S from './style'
import { ConfirmButtonClick } from '../../common/alert'

function AddTeamContainer() {
  return (
    <S.AddTeamContainer>
      <S.AddTeamInput>
        <input type="text" placeholder="추가할 팀을 작성해주세요." />
        <button onClick={ConfirmButtonClick}>추가</button>
      </S.AddTeamInput>
      <S.AddTeamWrapper>
        {[1, 2, 3, 4, 5, 6].map((arr) => {
          return <AddTeamItem />
        })}
      </S.AddTeamWrapper>
    </S.AddTeamContainer>
  )
}

export default AddTeamContainer
