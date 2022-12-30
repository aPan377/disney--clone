import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <>
      <Nav>
        <Logo src="/images/logo.svg" />
        <NavMenu>
          <Link to="/">
            <img src="/images/home-icon.svg" />
            <span>home</span>
          </Link>
          <Link to="/detail">
            <img src="/images/search-icon.svg" />
            <span>search</span>
          </Link>
          <Link to="/">
            <img src="/images/watchlist-icon.svg" />
            <span>watchlist</span>
          </Link>
          <Link to="/originals">
            <img src="/images/original-icon.svg" />
            <span>originals</span>
          </Link>
          <Link to="/movies">
            <img src="/images/movie-icon.svg" />
            <span>movies</span>
          </Link>
          <Link to="series">
            <img src="/images/series-icon.svg" />
            <span>series</span>
          </Link>
        </NavMenu>
        <Link to="/login">
          <UserImg src="/images/myPhoto.jpg" />
        </Link>
      </Nav>
      <BurgerNav showBurgerStatus={burgerStatus}>
        <Logo src="/images/logo.svg" />
        <BurgerIcon onClick={() => setBurgerStatus(!burgerStatus)} />
        <BurgerWrapper show={burgerStatus}>
          <Link to="/">
            <img src="/images/home-icon.svg" />
            <span>home</span>
          </Link>
          <Link to="/">
            <img src="/images/search-icon.svg" />
            <span>search</span>
          </Link>
          <Link to="/">
            <img src="/images/watchlist-icon.svg" />
            <span>watchlist</span>
          </Link>
          <Link to="/">
            <img src="/images/original-icon.svg" />
            <span>originals</span>
          </Link>
          <Link to="/movies">
            <img src="/images/movie-icon.svg" />
            <span>movies</span>
          </Link>
          <Link to="detail">
            <img src="/images/series-icon.svg" />
            <span>series</span>
          </Link>
          <Link to="/login">
            <UserImg src="/images/myPhoto.jpg" />
          </Link>
        </BurgerWrapper>
      </BurgerNav>
    </>
  );
}

export default Header;

const BurgerNav = styled.nav`
  @media (max-width: 819px) {
    display: flex;
    justify-content: space-between;
    position: relative;
    min-height: 70px;

    img {
      margin-left: 25px;
    }
  }

  overflow: ${(props) => (props.showBurgerStatus ? "visible" : "hidden")};

  display: none;

  background-color: #090b13;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    color: #fff;
    text-decoration: none;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1px;
      text-transform: uppercase;
      position: relative;

      &::after {
        content: "";
        height: 2px;
        background-color: #fff;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
      }
    }

    &:hover {
      span::after {
        transform: scaleX(1);
        transition: transform 0.25s linear;
        opacity: 1;
      }
    }
  }
`;

const BurgerIcon = styled(MenuIcon)`
  cursor: pointer;
  position: absolute;
  inset: 25px 20px 0 auto;
  color: rgba(249, 249, 249, 0.8);
`;

const BurgerWrapper = styled.div`
  position: absolute;
  inset: 60px 0 auto auto;
  z-index: 100;
  background: #090b13;
  width: 200px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};

  a {
    background: rgba(99, 99, 99, 0.2);
    padding: 10px 0;

    &:hover {
      background: rgba(198, 198, 198, 0.2);
    }

    &:last-child {
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
`;

const Nav = styled.nav`
  @media (min-width: 820px) {
    display: flex;
  }

  height: 70px;
  background-color: #090b13;
  display: none;
  align-items: center;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    color: #fff;
    text-decoration: none;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1px;
      text-transform: uppercase;
      position: relative;

      &::after {
        content: "";
        height: 2px;
        background-color: #fff;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
      }
    }

    &:hover {
      span::after {
        transform: scaleX(1);
        transition: transform 0.25s linear;
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
