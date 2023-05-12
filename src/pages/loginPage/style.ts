import styled from 'styled-components'

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh  - 400px);
  margin: auto 0;

`
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 600px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px 3px rgba(0, 0, 0, 0.25);
  border-radius: 6px;

`

export const LoginLogoImage = styled.img`
  width: 200px;

  margin-top: 0px;
  margin-bottom: 40px;
  padding-left: 25px;

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
  width: 300px;
  height: 50px;
  margin: 16px 0;

  font-size: 13px;

  background: #FFFFFF;
  border: 1px solid #E0E0E0;
  border-radius: 3px;
`
export const LoginPageButton = styled.button`
  width: 300px;
  height: 50px;
  margin-top: 75px;
  color: #FFFFFF;
  background: #AA2727;
  border-radius: 3px;
`

export const BottomFill = styled.div`
  position: absolute;
  width: 100vw;
  height: 400px;
  bottom: 0;
  background: #952A2A;
`

export const BottomTitleText = styled.div`
  position: absolute;
  display: flex;
  color: #FFFFFF;
  font-size: 70px;
  margin: 43px 672px 129px 34px;
  line-height: 53px;
  align-items: center;
  font-family: Exo;
  font-style: normal;
  font-weight: 800;

  /* margin-left: 34px; */
` 

export const BottomBodyText = styled.div`
  position: absolute;
  width: 245px;
  height: 42px;
  color: #FFFFFF;
  font-size: 20px;
  margin-top: 35px;
  margin-left: 34px;
` 