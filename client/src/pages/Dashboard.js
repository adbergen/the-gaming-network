import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import Chat from "../components/ChatMessages";
import ChatDashboard from "../components/ChatDashboard";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";
// import CardColumns from "react-bootstrap/CardColumns";
// import CardRows from "react-bootstrap/CardRows";
// import Button from "react-bootstrap/Button";
// import GameCard from "../components/GameCard";

import Profile from "../views/profile";

const Page = styled.div`
  height: 95vh;
  background: radial-gradient(circle at 20%, #bdbdbd -60%, #512da8 100%);
  overflow: hidden;
  animation: up 3s 10s cubic-bezier(0.76, 0, 0.24, 1) forwards;
`;

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
    <Page>
      <Container fluid>
        <Row>
          <Col size="md-6">
            <br />
            <Card
              style={{
                paddingLeft: "1%",
                backgroundColor: "#DCDCDC",
                borderWidth: 1,
                borderColor: "black",
                // width: "50rem",
              }}
            >
              <Profile />
            </Card>
          </Col>
        </Row>

        <Row>
          <Col size="md-3">
            <br />
            <Card style={{ padding: "5%", backgroundColor: "#DCDCDC" }}>
              <h1>What Games Should I Play?</h1>
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
          </Col>
          <Col size="md-3">
            <br />
            <Card style={{ padding: "5%", backgroundColor: "#DCDCDC" }}>
              <h1>Games On My List :</h1>
              {games.length ? (
                <List>
                  {games.map((game) => (
                    <ListItem key={game._id}>
                      <Link to={"/dashboard/" + game._id}>
                        <strong>
                          {game.title} by {game.platform}
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
            <Chat>
              <ChatDashboard />
            </Chat>
          </Col>
        </Row>
      </Container>
    </Page>
  );
}
export default Dashboard;
