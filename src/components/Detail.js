import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Detail() {
  const { name } = useParams();
  const movies = useSelector((state) => state.movies);
  const originals = useSelector((state) => state.originals);
  const series = useSelector((state) => state.series);

  const allMovies = [...movies, ...originals, ...series];

  const specificMovie = allMovies.find((movie) => name === movie.title);

  return (
    <Container>
      <Background>
        <img src={specificMovie.source} />
      </Background>
      <ImageTitle>
        <img src="/images/viewers-pixar.png" />
      </ImageTitle>
      <MovieTitle>
        <p>{specificMovie.title}</p>
      </MovieTitle>
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
      <Genre>{specificMovie.genre}</Genre>
      <Description>{specificMovie.description}</Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  color: #fff;
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;

  @media (max-width: 500px) {
    padding: 0 10px;
  }
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

const MovieTitle = styled.div`
  z-index: 10;
  font-size: 30px;
`;

const ImageTitle = styled.div`
  height: 150px;
  width: 120px;

  /* min-height: 150px;
  min-width: 180px; */

  img {
    margin-left: -20px;
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

  @media (max-width: 500px) {
    margin-right: 10px;
  }

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
  @media (max-width: 500px) {
    margin-right: 3px;
  }

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
