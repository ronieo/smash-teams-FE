import styled from 'styled-components'
export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 999;
`
export const LoginWrraper = styled.div`
  width: 50%;
  height: 80%;
  min-width: 400px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: calc(100vh - 8%);
  background: #ffffff;
  box-shadow: 0px 4px 4px 3px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`

export const LoginLogo = styled.img`
  width: 200px;
  margin-top: 50px;
`

export const LoginFormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`

export const LoginInput = styled.input`
  box-sizing: border-box;
  width: 400px;
  height: 50px;
  margin: 16px 0;
  font-size: 13px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
`
export const LoginButton = styled.button`
  width: 400px;
  height: 50px;
  margin-top: 75px;
  color: #ffffff;
  background: #aa2727;
  border-radius: 3px;
  cursor: pointer;
`

export const RegisterButton = styled.button`
  width: 400px;
  height: 50px;
  margin-top: 40px;
  color: #ffffff;
  background: #aa2727;
  border-radius: 3px;
`
