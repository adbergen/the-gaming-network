import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import styled from "styled-components";
import Card from "react-bootstrap/Card";

const Page = styled.div`
  height: 100vh;
  background: radial-gradient(circle at 70%, #bdbdbd -60%, #283593 100%);
  overflow: hidden;
  animation: up 3s 4s cubic-bezier(0.76, 0, 0.24, 1) forwards;
`;

function Detail(props) {
  console.log("Detail");
  const [game, setGame] = useState({});

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/games/599dcb67f0f16317844583fc
  const { id } = useParams();
  useEffect(() => {
    API.getGame(id)
      .then((res) => setGame(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <Page>
      <Container fluid>
        <Row>
          <Col size="md-12">
            <br />
            <Card style={{ padding: "1%", backgroundColor: "#DCDCDC" }}>
              <h1>
                <strong>Title:</strong> {game.title}
              </h1>
              <br />
              <p>
                <strong>Platform:</strong> {game.platform}
              </p>
              <p>
                <strong>Description:</strong> {game.description}
              </p>
              <p>
                <strong>Release Date:</strong> {game.releaseDate}
              </p>
              <p>
                <strong>Score:</strong> {game.score}/100
              </p>
              <p>
                <strong>Developer:</strong> {game.developer}
              </p>
              <p>
                <strong>Publisher:</strong> {game.publisher}
              </p>
              <p>
                <strong>Genre:</strong> {game.genre}
              </p>
              <p>
                <strong>Rating:</strong> {game.rating}
              </p>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <br />
            <Link to="/dashboard">← Back to Dashboard</Link>
          </Col>
        </Row>
      </Container>
    </Page>
  );
}

export default Detail;
