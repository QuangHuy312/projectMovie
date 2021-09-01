import styled from "styled-components";

export const FormSignIn = styled.div`
  background-image: url("https://preview.colorlib.com/theme/bootstrap/login-form-20/images/xbg.jpg.pagespeed.ic.tiVxeakBSd.webp");
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 10;
  width: 100%;
  height: 100vh;
  h1 {
    color: var(--white);
    margin: 0;
  }
  .form-content {
    padding: 20px;
    color: var(--white);
    display: flex;
    flex-direction: column;

    p {
      font-size: 15px;
      @media screen and (max-width: 768px) {
        font-size: 10px;
        padding: 0;
      }
    }

    h5 {
      margin-top: 20px;
      color: var(--white);
      cursor: pointer;
    }
    input {
      border: 1px solid transparent;
      background: rgba(255, 255, 255, 0.08);
      border-radius: 40px;
      height: 50px;
      color: var(--white);
      border-radius: 40px;
      padding-left: 20px;
      padding-right: 20px;
      margin: 25px;
      transition: all 0.5s;
      width: 100%;
      :hover {
        border: 1px solid var(--white);
      }
      :focus {
        outline: none;
      }
      ::placeholder {
        color: var(--white);
      }
    }
    .button-content {
      background: #df5a5a;
      padding: 0 20px;
      width: 100%;
      height: 42px;
      border-radius: 21px;
      font-size: 18px;
      color: #fff;
      border: none;
      opacity: 1;
      cursor: pointer;
      :hover {
        opacity: 0.7;
      }
    }
  }
`;

export const Content = styled.div`
  width: 30%;
  height: 50%;
  margin: 0 auto;
  text-align: center;
  h4 {
    padding-top: 20px;
  }
`;
