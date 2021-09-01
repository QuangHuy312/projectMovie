import styled from "styled-components";
export const Wrapper = styled.div`
  transition: 0.4s ease-in;
  background: ${({ scrolled }) => (scrolled ? "var(--bgDark)" : "transparent")};
  padding: var(--pdContent);
  position: fixed;
  width: 100%;
  z-index: 10;
`;

export const Content = styled.div`
  min-height: 70px;
  display: flex;
  justify-content: space-between;
  max-width: var(--maxWidth);
  align-items: center;

  .nav-content > ul {
    display: flex;
    li {
      margin: 0 20px;
      a {
        color: var(--white);
        font-size: 16px;
        :hover {
          color: var(--hoverColor);
          transition: all 0.6s;
        }
      }
    }
    @media screen and (max-width: 780px) {
      display: none;
    }
  }
  .user-login {
    background: transparent;
    color: var(--white);
    padding: 0 15px;
    border: none;
    font-size: 18px;
    cursor: pointer;
  }
`;

export const LogoImg = styled.img`
  width: 150px;
`;
