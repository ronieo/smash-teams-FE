import UserInfoItem from '../userInfoItem'
import * as S from './style'

function UserInfoContainer({ userList, teamList }) {
  const filterTeam = teamList.filter((team) => {
    if (team === '전체보기') {
      return false
    } else {
      return true
    }
  })
  console.log(filterTeam, userList)
  return (
    <S.UserInfoContainer>
      {userList.map((user, key) => {
        return <UserInfoItem key={key} user={user} team={filterTeam} />
      })}
    </S.UserInfoContainer>
  )
}

export default UserInfoContainer
