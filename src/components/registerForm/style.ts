import styled from 'styled-components';

export const RegisterWrapper = styled.div`
  position: relative;
  /* align-items: center;
  justify-content: center; */
  height: calc(100vh  - 400px);
  margin-top: 60px;
  margin-left: 350px;
  padding:40px;
  width: 600px;
  height: 700px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px 3px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  z-index: 1;
`

export const RegisterLogoImage = styled.img`
  width: 200px;
  /* margin-top: 30px;
  margin-left: 30px; */
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
  font-size: 13px;
  background: #FFFFFF;
  border: 1px solid #E0E0E0;
  border-radius: 3px;
  &.half {
    width:250px
  }
`

export const RegisterDoubleCheckButton = styled.button`

`

export const RegisterButton = styled.button`
  width: 300px;
  height: 50px;
  margin-top: 75px;
  color: #FFFFFF;
  background: #AA2727;
  border-radius: 3px;
`

export const ErrorMessage = styled.div`
  font-size: 10px;
  color: #AA2727;
`

export const BottomContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  border-top-left-radius: 1000px;
  width: 100vw;
  height: 400px;
  background-color: #AA2727;
  z-index: 0;
`

export const DoubleCheckButton = styled.div`
  height: 50px;
  width: 100px;
  background-color: #AA2727;
  border-radius: 10px;
  margin-left: 20px;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Section = styled.div`
  display: flex;
  width:100%;
  margin-bottom:20px;
  justify-content: space-between;
`

