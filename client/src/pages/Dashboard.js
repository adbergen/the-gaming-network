import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
// import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import Chat from "../components/ChatMessages";
import ChatDashboard from "../components/ChatDashboard";
import Card from "react-bootstrap/Card";
import { MDBContainer } from "mdbreact";
import Badge from "../assets/badge.png";
import { PayPalButton } from "react-paypal-button-v2";
import Background from "../assets/poster.jpg";
// import CardColumns from "react-bootstrap/CardColumns";
// import CardRows from "react-bootstrap/CardRows";
// import Button from "react-bootstrap/Button";
// import GameCard from "../components/GameCard";
import VideoBg from "reactjs-videobg";
// import ogg from "./Neon.ogg";
// import webm from "./Neon.webm";
import mp4 from "../assets/backgrounddashboard.mp4";
import poster from "../assets/poster.jpg";
import Profile from "../views/profile";
import Cardbackground from "../assets/cardbackground.png";

// const Page = styled.div`
//   height: 95vh;
//   background: radial-gradient(circle at 20%, #bdbdbd -60%, #512da8 100%);
//   overflow: hidden;
//   animation: up 3s 10s cubic-bezier(0.76, 0, 0.24, 1) forwards;
// `;

function Dashboard() {
  // Setting our component's initial state
  const [games, setGames] = useState([]);

  const [formObject, setFormObject] = useState({});
  const { user } = useAuth0();
  user && console.log(user);

  // Load all games and store them with setgames
  useEffect(() => {
    loadGames();
  }, []);

  // Loads all games and sets them to games
  function loadGames() {
    console.log("loadGames");
    user &&
      API.getGamesByUser(user.email)
        .then((res) => {
          console.log("API getGames res.data", res.data);
          console.log("API getGames res", res);
          setGames(res.data);
        })
        .catch((err) => console.log(err));
  }

  // Deletes a game from the database with a given id, then reloads games from the db
  function deleteGame(id) {
    API.deleteGame(id)
      .then((res) => loadGames())
      .catch((err) => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  // When the form is submitted, use the API.savegame method to save the game data
  // Then reload games from the database

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.platform) {
      API.saveGame({
        title: formObject.title,
        platform: formObject.platform,
        userEmail: user.email,
      })
        .then((res) => loadGames())
        .catch((err) => console.log(err));
    }
  }

  return (
    // <Page >
    <MDBContainer>
      <VideoBg poster={poster}>
        {/* <VideoBg.Source src={ogg} type="video/ogg" />
        <VideoBg.Source src={webm} type="video/webm" /> */}
        <VideoBg.Source src={mp4} type="video/mp4" />
      </VideoBg>
      <Row>
        <Col size="md-6">
          <br />
          <Card
            style={{
              padding: "5%",
              backgroundImage:
                "url('https://i2.wp.com/files.123freevectors.com/wp-content/original/131674-purple-and-white-polygon-pattern-background.jpg?w=800&q=95')",
              // backgroundColor: "#DCDCDC",
              color: "black",
              borderWidth: 1,
              borderColor: "black",
              // width: "50rem",
            }}
          >
            <Profile />
            <br />
            <Card
              w-50
              style={{
                padding: "1%",

                borderWidth: 1,
                borderColor: "black",
                // width: "50rem",
              }}
            >
              <h6>Badges:
              
              {" "}
                  <i class="fab fa-steam"></i>
                  {"  "}
                  <i class="fab fa-xbox"></i>
                  {"  "}
                  <i class="fab fa-playstation"></i>
                  {"  "}
                  <i class="fab fa-twitch"></i>
                  {"  "}
                  <i class="fas fa-headset"></i>
                  {"  "}
              
                </h6>
              

              <img
                class="mr-auto"
                style={{
                  width: "15%",
                  borderWidth: 1,
                  borderColor: "black",
                }}
                src={Badge}
              />
            </Card>
            <br />
            <Card
              w-50
              style={{
                padding: "1%",
                // backgroundColor: "#DCDCDC",
                borderWidth: 1,
                borderColor: "black",
                // width: "50rem",
              }}
            >
              <h5>Level: 1</h5>
              <h6>Rank: n00b</h6>
            </Card>
          </Card>
          <br />
          <Card
            style={{
              padding: "5%",
              backgroundImage:
                "url('https://i2.wp.com/files.123freevectors.com/wp-content/original/131674-purple-and-white-polygon-pattern-background.jpg?w=800&q=95')",
              borderWidth: 1,
              borderColor: "black",
            }}
          >
            <h5>Add Games :</h5>
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Game Title (required)"
              />
              <Input
                onChange={handleInputChange}
                name="platform"
                placeholder="Platform (required)"
              />
              <FormBtn
                disabled={!(formObject.platform && formObject.title)}
                onClick={handleFormSubmit}
              >
                Submit Game
              </FormBtn>
            </form>
          </Card>
          <br />
          <Card
            style={{
              padding: "5%",
              backgroundImage:
                "url('https://i2.wp.com/files.123freevectors.com/wp-content/original/131674-purple-and-white-polygon-pattern-background.jpg?w=800&q=95')",
              borderWidth: 1,
              borderColor: "black",
            }}
          >
            <h5>My Games :</h5>
            {games.length ? (
              <List>
                {games.map((game) => (
                  <ListItem key={game._id}>
                    <Link to={"/dashboard/" + game._id}>
                      <strong style={{ color: "black" }}>
                        {game.title} on {game.platform}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteGame(game._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Card>
        </Col>
        <Col size="md-6">
          <br />
          <Chat>
            <ChatDashboard />
          </Chat>
          <br />
          <Card
            style={{
              padding: "5%",
              backgroundColor: "#DCDCDC",
              borderWidth: 1,
              borderColor: "black",
            }}
          >
            <h5>Donate to the site</h5>
            <p>All proceeds go to improving your viewing experience</p>
            <PayPalButton
              amount="0.01"
              // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
              onSuccess={(details, data) => {
                alert(
                  "Transaction completed by " + details.payer.name.given_name
                );

                // OPTIONAL: Call your server to save the transaction
                return fetch("/paypal-transaction-complete", {
                  method: "post",
                  body: JSON.stringify({
                    orderID: data.orderID,
                  }),
                });
              }}
            />
          </Card>
        </Col>
        <Col size="md-3">
          <br />
        </Col>
      </Row>

      <Row>
        <Col size="md-3">
          <br />
        </Col>
        <Col size="md-3">
          <br />

          <br />
        </Col>
        <Col size="md-3">
          <br />
        </Col>
      </Row>
    </MDBContainer>
  );
}
export default Dashboard;
