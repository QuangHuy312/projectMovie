import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--bgDark);
  padding: var(--pdContent);
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  border-top: 2px solid red;
  padding-top: 35px;
`;

export const LogoFooter = styled.div`
  width: 70%;
  text-align: center;
  .logo {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    img {
      width: 50px;
      margin-bottom: 25px;
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
export const InfoFooter = styled.div`
  width: 30%;
  h3 {
    color: var(--white);
  }
  .connect > ul > li {
    margin: 20px 0;
    a {
      color: var(--white);
      span {
        margin-left: 10px;
        font-size: 15px;
        @media screen and (max-width: 768px) {
          font-size: 15px;
          margin: 0;
        }
      }
      :hover {
        color: var(--hoverColor);
        transition: all 0.6s;
      }
    }
  }
`;
