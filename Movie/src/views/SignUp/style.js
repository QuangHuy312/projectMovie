import styled from "styled-components";
import { FormSignIn, Content } from "../SignIn/style";

export const FormSignUp = styled(FormSignIn)`
  .form-content {
    input {
      margin: 10px;
    }
  }
  .button-content {
    margin-top: 20px;
  }
`;

export const ContentSignUp = styled(Content)`
  height: 70%;
`;
