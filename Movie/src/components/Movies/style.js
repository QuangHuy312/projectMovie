import styled from "styled-components";
import { BackGround } from "../HomeCarousel/style";

export const Title = styled.h1`
  font-size: 30px;
  padding: 40px 0px 0px 65px;
  color: #dacb46;
`;

export const Content = styled.div`
  background-image: url("https://i.pinimg.com/564x/14/e7/c9/14e7c9f534b8fe5e0f8c6cbac9f762c8.jpg");
  background-size: cover;
  display: flex;
  padding: 30px;
  border-top: 1px solid #357945;
  .content {
    width: 70%;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  .page {
    padding: 30px 0;
    text-align: center;
  }
`;

export const MovieList = styled.div`
  border-right: 1px solid #357945;

  padding: var(--pdContent);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 50px;
`;

export const ButtonCardDetail = styled.button`
  background-color: #7f80e6;
  width: 100%;
  border: none;
  position: relative;
  :hover {
    cursor: pointer;
  }
  ::after {
    content: "";
    position: absolute;
    width: 0%;
    left: 0;
    bottom: 0;
    transition: all 0.5s ease-in;
    background-color: #c75722;
  }

  :hover::after {
    width: 100%;
    height: 100%;
    opacity: 0.7;
  }
`;

export const ButtonCardBooking = styled(ButtonCardDetail)`
  background-color: #e3e377;
`;

export const ContentCard = styled(BackGround)`
  background-image: ${(props) =>
    `url(${props.film}),
      url(
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjYpN-X9CnFt_KpEJXpGHKtnjWycsYeV9rvg&usqp=CAU"
        )`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 40vh;
  width: 100%;
  position: relative;
  opacity: 1;
  transition: all 0.5s ease-in;
  border-radius: 10px;
  overflow: hidden;
  :hover {
    opacity: 0.6;
  }
  .btn-film {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
`;
