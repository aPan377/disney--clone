import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>Get all there</SignUp>
        <Description>
          Discover the greatest stories from Disney, Pixar, Marvel, Star Wars,
          National Geographic and Star, all in one place. Read on to discover
          even more reasons to love Disney+
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  height: calc(100vh - 70px);
  position: relative;
  display: flex;
  align-items: top;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("/images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
`;

const CTALogoOne = styled.img``;

const SignUp = styled.a`
  display: block;
  width: 100%;
  text-transform: uppercase;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms linear;
  letter-spacing: 1.5px;
  margin: 8px 0 12px 0;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;

const CTALogoTwo = styled.img`
  width: 90%;
`;
