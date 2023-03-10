import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import RecommendedMovies from "./RecommendedMovies";

function Home() {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <RecommendedMovies />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw 5px);
  position: relative;

  &::before {
    content: "";
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    position: absolute;
    inset: 0;
    z-index: -1;
  }
`;
