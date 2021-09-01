import styled from "styled-components";
export const Content = styled.div`
  padding: 20px;
  h1 {
    text-align: center;
    padding-bottom: 20px;
    font-size: 30px;
  }
`;

export const ButtonContent = styled.div`
  .delete-button {
    font-size: 25px;
    color: red;
    cursor: pointer;
    margin-left: 20px;
    :hover {
      opacity: 0.7;
    }
  }

  .edit-button {
    font-size: 25px;
    cursor: pointer;
    color: blue;
    :hover {
      opacity: 0.7;
    }
  }
`;
