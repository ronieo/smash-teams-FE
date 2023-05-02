import {
  EditButton,
  EditTitle,
  EmailWrapper,
  ImageWrapper,
  Name,
  NameWrapper,
  PhoneWrapper,
  Position,
  ProfileWrapper,
  StartWork,
  TeamTitle,
} from './style'

function ProfileBar() {
  return (
    <>
      <ProfileWrapper>
        <TeamTitle>개발팀</TeamTitle>
        <ImageWrapper></ImageWrapper>
        <NameWrapper>
          <Position>팀장</Position>
          <Name>준태짱내꺼</Name>
        </NameWrapper>
        <EmailWrapper>joooontae@smash.com</EmailWrapper>
        <PhoneWrapper>010-1234-1234</PhoneWrapper>
        <StartWork>2023.01.01</StartWork>
        <EditButton>
          <EditTitle>개인정보수정</EditTitle>
        </EditButton>
      </ProfileWrapper>
    </>
  )
}

export default ProfileBar
