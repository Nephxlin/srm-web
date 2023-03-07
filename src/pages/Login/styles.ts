import styled from "styled-components";

export const LoginContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
`

export const LoginWrapper = styled.div`
  padding: 56px 32px;
  max-width: 320px;
  width: 100%;

  border-radius: 4px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
  background-color: ${({theme}) => theme.COLORS.WHITE_100};
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2 {
      font-family: ${({theme}) => theme.FONT_FAMILY.MABRY_PRO};
      font-weight: 500;
      font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
      color:  ${({theme}) => theme.COLORS.BLUE_GRAY_900}; 
      text-align: center;
      width: 100%;
      display: block;
      margin: 33px 0;
      line-height: 30px;
    }
  }
`
export const Form = styled.form`

label {
  font-family: ${({theme}) => theme.FONT_FAMILY.ROBOTO};
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 24px;
margin: 10px 0;
color: ${({theme}) => theme.COLORS.BLUE_GRAY_700};
}
.input-wrapper {
    background: #FFFFFD;
  /* BlueGray/700 */
  
  border: 1px solid #455A64;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:focus-within {
      border-color: ${({theme}) => theme.COLORS.PRIMARY_300};
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    }
    input {
      background: none;
      border: none;
      height: 40px;
      width: 100%;
      border-radius: 4px;
      padding: 0 8px;
      &:focus {
        outline: none;
      }
      &:-webkit-autofill {
        background: none;
      }
    }
    .show-pass{
      background: none;
      border: none;
      margin-right: 8px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
}
    .forget{
      color: ${({theme}) => theme.COLORS.COMPLEMENTARY_900};
      font-family: ${({theme}) => theme.FONT_FAMILY.ROBOTO};
      font-size: ${({theme})=> theme.FONT_SIZE.SM}px;
      text-decoration: none;
      display: block;
      margin-top: 10px;
    }

    p{
      color : red;
      margin: 10px 0;
    }
`


export const  FormLoginButtonWrapper = styled.div`
  display: flex;
  margin-top: auto;
  justify-content: space-between;
  margin-top: 36px;

`
