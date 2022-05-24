import React from "react";
import styled from "styled-components";
function Login() {
  return (
    <Container>
      <Nav>
        <a href="drh">
          <img src="images/login-logo.svg" alt="" />
        </a>

        <div>
          <Join>Join Now</Join>
          <Signin>Sign in</Signin>
        </div>
      </Nav>

      <Section>
        <Hero>
          <h1>Welcome to your proffessional community</h1>
          <img src="images/login-hero.svg" alt="" />
        </Hero>

        <Form>
          <Google>
            <img src="images/google.svg" alt="" />
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
}

const Container = styled.div`
  padding: 0px;
`;

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & > a {
    width: 135px;
    height: 34px;
  }

  @media (max-width: 768px) {
    padding: 0 5px;
  }
`;

const Join = styled.a`
  text-decoration: none;
  font-size: 16px;
  padding: 10px 12px;
  color: rgba(0, 0, 0, 0.6);
  border-radius: 7px;
  font-weight: 600;
  margin-right: 12px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
  }
`;

const Signin = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  padding: 10px 24px;
  border-radius: 24px;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;

  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
  }
`;

const Section = styled.section`
  min-height: 700px;

  padding-top: 40px;
  padding: 60px 0;
  width: 100%;
  max-width: 1128px;
  position: relative;
  padding-bottom: 138px;

  margin: auto;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;
  z-index: -1;
  h1 {
    font-size: 56px;
    width: 55%;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    padding-bottom: 40px;
    @media (max-width: 768px) {
      text-align: center;
      width: 100%;
      font-size: 20px;
      line-height: 2;
    }
  }

  img {
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right: -150px;

    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
      padding-bottom: 50px;
    }
  }
`;

const Form = styled.div`
  max-width: 408px;
  margin-top: 100px;

  @media (max-width: 768px) {
    margin: auto;
  }

  @media (min-width: 768px) and (max-width: 950px) {
    width: 30%;
  }
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0/60%), inset 0 0 0 2px rgb(0 0 0/0%),
    inset 0 0 0 1px rgb(0 0 0/0%);
  vertical-align: middle;

  font-size: 20px;
  transition-duration: 147ms;
  color: rgba(0, 0, 0, 0.6);

  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;

export default Login;
