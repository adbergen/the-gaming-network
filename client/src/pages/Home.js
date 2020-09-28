import React from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";

import styled from "styled-components";

const Page = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  background-color: #46516e;
  flex-direction: column;
`;

function Home() {
  return (
    <Page>
      <br />
      <h1>Good Game</h1>
      <Container>
        <Row>
          <Col size="md-12">
            <br />

            <Jumbotron></Jumbotron>
          </Col>
        </Row>
      </Container>
    </Page>
  );
}

export default Home;
