import styled from "styled-components";
import { BackGround } from "../../components/HomeCarousel/style";

export const Wrapper = styled(BackGround)`
  background-image: ${(props) =>
    `url(${props.background}),url( "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjYpN-X9CnFt_KpEJXpGHKtnjWycsYeV9rvg&usqp=CAU")`};
`;
export const Content = styled.div`
  margin-top: 100px;
  .title {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 20px;
  max-height: 60vh;
  @media screen and (max-width: 768px) {
    width: 70%;
  }
`;

export const InfoFilm = styled.div`
  padding: 30px;
  h4 {
    font-size: 25px;
    color: var(--white);
    padding: 0;
    @media screen and (max-width: 768px) {
      font-size: 15px;
    }
  }
  p {
    @media screen and (max-width: 768px) {
      font-size: 11px;
    }
  }
`;

export const Rating = styled.div`
  width: 100px;
  /* align-self: center; */
  @media screen and (max-width: 768px) {
    display: none;
  }
  h4 {
    color: var(--white);
    padding: 20px;
    @media screen and (max-width: 768px) {
      font-size: 15px;
    }
  }
`;
