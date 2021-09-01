import styled from "styled-components";

export const BackGround = styled.div`
  background-image: ${(props) => `url(${props.banner})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  position: relative;
`;
