import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <Background>
        <img src="/images/bao-cartoon.jpg" />
      </Background>
      <ImageTitle>
        <img src="/images/viewers-pixar.png" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" />
          <span>play</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" />
          <span>trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" />
        </GroupWatchButton>
      </Controls>
      <Genre>2018, Family, fantasy, Kids, Animation</Genre>
      <Description>
        An aging and lonely Chinese Canadian mother suffering from empty nest
        syndrome, who receives an unexpected second chance at motherhood when
        she makes a steamed bun (baozi) that comes to life.
      </Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  color: #fff;
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 20vh;
  width: 25vw;
  min-height: 150px;
  min-width: 180px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  border: none;
  padding: 0 24px;
  margin-right: 16px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 46px;
  background: rgb(249, 249, 249);
  letter-spacing: 1.8px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 350ms ease;

  &:hover {
    background: rgba(198, 198, 198, 0.4);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgb(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddButton = styled.button`
  margin-right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  transition: background-color 350ms ease;

  &:hover {
    background: rgba(198, 198, 198, 0.4);
  }

  span {
    font-size: 16px;
    color: #fff;
    padding: 8px 10px;
  }
`;

const GroupWatchButton = styled(AddButton)``;

const Genre = styled.div`
  color: rgb(249, 249, 249);
  font-size: 14px;
  min-height: 20px;
  margin-top: 26px;
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 18px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
`;
