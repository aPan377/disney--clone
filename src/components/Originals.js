import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Originals() {
  const originals = useSelector((state) => state.originals);

  return (
    <>
      <ImgSlider />
      <Container>
        <h4>Movies and Cartoons</h4>
        <Content>
          {originals.map((original) => (
            <Wrap key={original.id}>
              <Link to={`/detail/${original.title}`}>
                <img src={original.source} />
              </Link>
            </Wrap>
          ))}
        </Content>
      </Container>
    </>
  );
}

export default Originals;

const Container = styled.div`
  padding: 26px 26px 26px 26px;
  position: relative;

  @media (min-width: 820px) {
    min-height: 75vh;
  }

  &::before {
    content: "";
    background: url("/images/home-background.png") center center / cover repeat
      fixed;
    position: absolute;
    inset: 0;
    z-index: -1;
  }
`;

const Content = styled.div`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (min-width: 820px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
    rgba(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 0.25s linear 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    box-shadow: rgba(0 0 0 / 80%) 0px 40px 58px -16px,
      rgba(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
