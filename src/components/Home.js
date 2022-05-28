import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <Section>
        <h5>
          <a href="">Hiring in a hurry ? -</a>{" "}
        </h5>
        <p>
          Find talented pros in record time with Upwork and keep business moving
        </p>
      </Section>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  padding-top: 54px;
  max-width: 100%;
`;

const Section = styled.section`
  min-height: 50px;
  box-sizing: content-box;
  padding: 19px 0;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;

  h5 {
    color: #0a66c2;
    font-size: 16px;
    a {
      font-weight: 700;
      color: #0a66c2;
    }
  }

  p {
    font-size: 16px;
    color: #434649;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 8px;
  }
`;