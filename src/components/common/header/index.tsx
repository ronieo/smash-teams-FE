import React from 'react'
import { HeaderLogo, HeaderWrapper, InnerWrapper, Logo, LogoutButton } from './style'
import styled from 'styled-components'

function Header() {
  return (
    <HeaderWrapper>
      <InnerWrapper>
        <HeaderLogo>
          <Logo src="/public/title-logo.png" alt="logo" />
        </HeaderLogo>
        <LogoutButton>로그아웃</LogoutButton>
      </InnerWrapper>
    </HeaderWrapper>
  )
}

export default Header
