import { useParams } from 'react-router-dom'
import * as S from './style'
import { AiFillPlusCircle } from 'react-icons/ai'
import UserInfoContainer from '../../components/userInfo/userInfoContainer'
import { UserInfoItem } from '../../components/userInfo/userInfoItem/style'
import DropDown from '../../components/common/dropdown'
import { useEffect, useState } from 'react'
import AddTeamContainer from '../../components/addTeam/addTeamContainer'
import { useQuery } from 'react-query'
import { getAdmin } from '../../apis/services/Admin'

// 관리자 유저 권한 설정 페이지
function AdminPage() {
  const [teamList, setTeamName] = useState(['전체보기'])
  const [userList, setUserList] = useState<{}[]>([])
  const { data, isLoading, error } = useQuery(['admin'], () =>
    getAdmin('', '', 0).then((a) => {
      return a.data
    }),
  )

  // 팀 리스트 및 유저 리스트 설정
  useEffect(() => {
    if (!isLoading) {
      data.teamList.map((teamlist) => {
        if (teamlist.teamName === 'admin' || teamlist.teamName === 'common') {
        } else {
          setTeamName((teamList) => [...teamList, teamlist.teamName])
        }
      })
      data.userList.map((userlist) => {
        if (userlist.role === 'ADMIN') {
        } else {
          setUserList((userList) => [...userList, userlist])
        }
      })
    }
  }, [data])

  const params = useParams()
  const [isAddTeam, setIsAddTeam] = useState(false)
  return (
    <>
      <S.AdminWrapper
        onClick={() => {
          if (isAddTeam) {
            setIsAddTeam((isAddTeam) => !isAddTeam)
          }
        }}
      >
        <S.TeamBar>
          {teamList.map((list, key) => {
            if (params.id === list) {
              return (
                <S.TopBarList key={key} to={`${list}`} color="#000" isparams={true}>
                  {list}
                </S.TopBarList>
              )
            }
            return (
              <S.TopBarList key={key} to={`${list}`} color="#A1A1A1" isparams={false}>
                {list}
              </S.TopBarList>
            )
          })}
          <S.TopBarAddIcon
            onClick={() => {
              setIsAddTeam((isAddTeam) => !isAddTeam)
            }}
          >
            <AiFillPlusCircle size="20px" color="#AA2727" />
          </S.TopBarAddIcon>
        </S.TeamBar>
        <S.Admin>
          <S.AdminSearch>
            <input type="text" placeholder="검색할 이름을 입력해주세요."></input>
            <button>검색</button>
          </S.AdminSearch>
          <UserInfoContainer userList={userList} teamList={teamList} />
        </S.Admin>
      </S.AdminWrapper>
      {isAddTeam ? <AddTeamContainer /> : <></>}
    </>
  )
}

export default AdminPage
