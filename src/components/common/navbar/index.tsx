import { BiTimeFive } from 'react-icons/bi'
import { FaRegCalendarCheck } from 'react-icons/fa'
import { CgNotes } from 'react-icons/cg'
import { BsPencilSquare } from 'react-icons/bs'
import { GoChecklist } from 'react-icons/go'
import { NavbarLink, NavbarLinkText, NavbarWrapper } from './style'

function Navbar() {
  return (
    <NavbarWrapper>
      <NavbarLink to="/">
        <NavbarLinkText>
          <FaRegCalendarCheck />
          전체 일정보기
        </NavbarLinkText>
      </NavbarLink>
      <NavbarLink to="/dayoff">
        <NavbarLinkText>
          <BsPencilSquare />
          연차 신청하기
        </NavbarLinkText>
      </NavbarLink>
      <NavbarLink to="/nightshift">
        <NavbarLinkText>
          {' '}
          <BiTimeFive />
          당직 신청하기
        </NavbarLinkText>
      </NavbarLink>
      <NavbarLink to="/history">
        <NavbarLinkText>
          <CgNotes />
          연차 / 당직 내역보기
        </NavbarLinkText>
      </NavbarLink>
      <NavbarLink to="/manage">
        <NavbarLinkText>
          <GoChecklist />
          연차 / 당직 관리하기
        </NavbarLinkText>
      </NavbarLink>
    </NavbarWrapper>
  )
}

export default Navbar
