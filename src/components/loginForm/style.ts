import styled from 'styled-components'

export const LoginWrraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh  - 400px);
  margin-top: 60px;
  margin-left: 900px;
  width: 500px;
  height: 700px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px 3px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  z-index: 9;
`

export const LoginLogoImage = styled.img`
  width: 200px;
  margin-top: 50px;
  margin-bottom: 40px;
  padding-left: 25px;
  align-items: first baseline;
`

export const LoginFormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const LoginInput = styled.input`
  box-sizing: border-box;
  width: 400px;
  height: 50px;
  margin: 16px 0;
  font-size: 13px;
  background: #FFFFFF;
  border: 1px solid #E0E0E0;
  border-radius: 3px;
`
export const LoginButton = styled.button`
    width: 400px;
  height: 50px;
  margin-top: 75px;
  color: #FFFFFF;
  background: #AA2727;
  border-radius: 3px;
`

export const RegisterButton = styled.button`
  width: 400px;
  height: 50px;
  margin-top: 40px;
  color: #FFFFFF;
  background: #AA2727;
  border-radius: 3px;
`

export const Footer = styled.div`
  width: 100vw;
  height: 400px;
  background-color: #AA2727;
  z-index: 1;
`

export const FooterTitle = styled.h1`
  color: #FFFFFF;
  font-size: 60px;
  font-weight: 600;
  padding-left:100px;
  padding-top: 30px;
`
export const FooterBody = styled.p`
  color: #FFFFFF;
  font-size: 30px;
  font-weight: normal;
  padding-left: 100px;
  padding-top: 60px;
`