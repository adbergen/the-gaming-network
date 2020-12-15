import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row } from "../components/Grid";
import API from "../utils/API";
import { MDBContainer } from "mdbreact";
import VideoBg from "reactjs-videobg";
import mp4 from "../assets/backgroundvideo.mp4";
import poster from "../assets/poster.jpg";

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
    <MDBContainer>
      <VideoBg poster={poster}>
        <VideoBg.Source src={mp4} type="video/mp4" />
      </VideoBg>
      <Row>
        <Col size="md-12">
          <br />
          <div w-50>
            <div
              style={{
                padding: "1%",
                backgroundColor: "#DCDCDC15",
                borderWidth: 1,
                borderColor: "black",
                color: "white",
              }}
            >
              <h1>
                <strong>Title:</strong> {game.title}
              </h1>
              <br />
              <img src={game.image} />
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
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-2">
          <br />
          <Link to="/dashboard">← Back to Dashboard</Link>
        </Col>
      </Row>
    </MDBContainer>
  );
}

export default Detail;
