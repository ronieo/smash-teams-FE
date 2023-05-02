import React from 'react'
import { HeaderLogo, HeaderWrapper, InnerWrapper, Logo } from './style'

function Header() {
  return (
    <HeaderWrapper>
      <InnerWrapper>
        <HeaderLogo>
          <Logo src="/public/title-logo.png" alt="logo" />
        </HeaderLogo>
      </InnerWrapper>
    </HeaderWrapper>
  )
}

export default Header
