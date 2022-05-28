import React from "react";
import styled from "styled-components";
function Header() {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="images/home-logo.svg" alt="" />
          </a>
        </Logo>

        <Search>
          <div>
            <input type="text" name="" id="" placeholder="Search" />
          </div>

          <SearchIcon>
            <img src="images/search-icon.svg" alt="" />
          </SearchIcon>
        </Search>
        <Nav>
          <Navwrapper>
            <Navlist className="active">
              <a>
                <img src="images/nav-home.svg" alt="" />
                <span>Home</span>
              </a>
            </Navlist>
            <Navlist>
              <a>
                <img src="images/nav-network.svg" alt="" />
                <span>My Network</span>
              </a>
            </Navlist>
            <Navlist>
              <a>
                <img src="images/nav-jobs.svg" alt="" />
                <span>Jobs</span>
              </a>
            </Navlist>
            <Navlist>
              <a>
                <img src="images/nav-messaging.svg" alt="" />
                <span>Messaging</span>
              </a>
            </Navlist>
            <Navlist>
              <a>
                <img src="images/nav-notifications.svg" alt="" />
                <span>Notifications</span>
              </a>
            </Navlist>

            <User>
              <a>
                <img src="images/user.svg" alt="" />
                <span>Me</span>
                <img src="images/down-icon.svg" alt="" />
              </a>
              <Signout>Sign out</Signout>
            </User>

            <Work>
              <a>
                <img src="images/nav-work.svg" alt="" />
                <span>
                  Work
                  <img src="images/down-icon.svg" alt="" />
                </span>
              </a>
            </Work>
          </Navwrapper>
        </Nav>
      </Content>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  border-bottom: 1px solid rgba(49, 39, 39, 0.08);
  left: 0;
  position: fixed;
  top: 0;
  background-color: white;
  width: 100vw;
  z-index: 100;
`;

const Content = styled.div`
  max-width: 1128px;
  margin: 0 auto;

  max-height: 100%;
  display: flex;
  align-items: center;
`;

const Logo = styled.span`
  margin-right: 10px;

  @media (max-width: 769px) {
    padding-left: 10px;
  }
`;

const Search = styled.div`
  position: relative;
  flex-grow: 1;
  opacity: 1;
  & > div {
    max-width: 250px;

    input {
      box-shadow: none;

      border: none;
      background-color: #dbe4ec97;
      padding: 0 8px 0 40px;
      border-radius: 2px;
      width: 218x;
      color: rgba(65, 51, 51, 0.9);
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #4495eb99;
      vertical-align: text-top;
    }
  }
`;

const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  top: 10px;
  left: 2px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  pointer-events: none;
`;

const Nav = styled.nav`
  margin-left: auto;

  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
`;

const Navwrapper = styled.ul`
  flex-wrap: nowrap;
  display: flex;

  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid black;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    }
  }
`;

const Navlist = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  img {
    width: 25px;
  }

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.5;
    min-height: 35px;
    min-width: 90px;
    position: relative;
    span {
      color: rgba(0, 0, 0, 0.6);
      padding-bottom: 5px;
    }

    @media (max-width: 768px) {
      min-width: 80px;
    }
  }

  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

const Signout = styled.div`
  position: absolute;
  top: 65px;
  width: 80px;
  border-radius: 0 0 5px 5px;
  background: white;
  height: 40px;
  text-align: center;
  display: none;
  transition-duration: 167ms;
  color: #056fe0df;
  font-weight: 400;

  @media (max-width: 768px) {
    top: -50px;
  }
`;

const User = styled(Navlist)`
  span {
    display: flex;
    align-items: center;
  }

  a > svg {
    width: 24px;

    border-radius: 50%;
  }

  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  &:hover {
    ${Signout} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;

const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;

