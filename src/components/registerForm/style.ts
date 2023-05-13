import styled from 'styled-components'
export const RegisterContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 999;
`
export const RegisterWrapper = styled.div`
  position: relative;
  height: calc(100vh - 400px);
  margin-left: calc(100vh - 46%);
  padding: 40px;
  width: 600px;
  height: 700px;
  background: #ffffff;
  box-shadow: 0px 4px 4px 3px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  z-index: 1;
`

export const RegisterLogoImage = styled.img`
  width: 200px;
`

export const RegisterFormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const RegisterInput = styled.input`
  box-sizing: border-box;
  width: 400px;
  height: 50px;
  font-size: 14px;
  padding: 0 10px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  &.half {
    width: 250px;
  }
`

export const RegisterButton = styled.button`
  width: 300px;
  height: 50px;
  margin-top: 70px;
  color: #ffffff;
  background: #aa2727;
  border-radius: 4px;
`

export const ErrorMessage = styled.div`
  font-size: 10px;
  color: #aa2727;
`

export const BottomContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  border-top-left-radius: 1000px;
  width: 100vw;
  height: 400px;
  background-color: #aa2727;
  z-index: 0;
`

export const DoubleCheckButton = styled.div`
  height: 50px;
  width: 100px;
  background-color: #aa2727;
  border-radius: 4px;
  margin-left: 20px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Section = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  justify-content: space-between;
`
