import styled from "styled-components";

export const Wrapper = styled.div`
  padding-left: 15px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ContentFilm = styled.div`
  display: flex;
  padding-left: 20px;
  padding-top: 20px;
  opacity: 1;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
  :hover {
    opacity: 0.7;
    cursor: pointer;
  }
  img {
    width: 100px;
    margin-bottom: 30px;
    min-height: 130px;
    border-radius: 10px;
    overflow: hidden;
  }
  .infoFilm {
    padding-left: 20px;
    h3 {
      color: var(--white);
      font-size: 20px;
    }
  }
`;
