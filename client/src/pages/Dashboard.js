import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import styled from "styled-components";

import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
// import CardRows from "react-bootstrap/CardRows";
import Button from "react-bootstrap/Button";
// import GameCard from "../components/GameCard";

import Profile from "../components/Profile/profile";

const Page = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  background-color: #abdd16;
  flex-direction: column;
`;

function Dashboard() {
  // Setting our component's initial state
  const [games, setGames] = useState([]);
  const [formObject, setFormObject] = useState({});

  // Load all books and store them with setBooks
  useEffect(() => {
    loadGames();

    API.searchChicken("starcraft")
      .then((result) => console.log(result.data))
      .catch((err) => console.log(err));
  }, []);

  // Loads all books and sets them to books
  function loadGames() {
    API.getGames()
      .then((res) => setGames(res.data))
      .catch((err) => console.log(err));
  }

  // Deletes a book from the database with a given id, then reloads books from the db
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

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveGame({
        title: formObject.title,
        author: formObject.author,
        synopsis: formObject.synopsis,
      })
        .then((res) => loadGames())
        .catch((err) => console.log(err));
    }
  }

  return (
    <Page>
      <Container fluid>
        <Row>
          <Col size="md-12">
            <br />

            <Card style={{ padding: "5%" }}>
              <Profile />
            </Card>
          </Col>
        </Row>

        <Row>
          <Col size="md-2">
            <br />
            <Card style={{ padding: "5%", backgroundColor: "#f99e1a" }}>
              <h1>What Games Should I Play?</h1>
              <form>
                <Input
                  onChange={handleInputChange}
                  name="title"
                  placeholder="Game Title (required)"
                />
                <Input
                  onChange={handleInputChange}
                  name="author"
                  placeholder="Platform (required)"
                />
                {/* <TextArea
                onChange={handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              /> */}
                <FormBtn
                  disabled={!(formObject.author && formObject.title)}
                  onClick={handleFormSubmit}
                >
                  Submit Game
                </FormBtn>
              </form>
            </Card>
          </Col>
          <Col size="md-2">
            <br />
            <Card style={{ padding: "5%", backgroundColor: "#f99e1a" }}>
              <h1>Games On My List :</h1>
              {games.length ? (
                <List>
                  {games.map((game) => (
                    <ListItem key={game._id}>
                      <Link to={"/dashboard/" + game._id}>
                        <strong>
                          {game.title} by {game.author}
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
          <Col size="md-2">
            <br />
            <Card style={{ padding: "5%", backgroundColor: "#f99e1a" }}>
              <h1>What Games Have I Played?</h1>
              <form>
                <Input
                  onChange={handleInputChange}
                  name="title"
                  placeholder="Game Title (required)"
                />
                <Input
                  onChange={handleInputChange}
                  name="author"
                  placeholder="Platform (required)"
                />
                {/* <TextArea
                onChange={handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              /> */}
                <FormBtn
                  disabled={!(formObject.author && formObject.title)}
                  onClick={handleFormSubmit}
                >
                  Submit Game
                </FormBtn>
              </form>
            </Card>
          </Col>
          <Col size="md-2">
            <br />
            <Card style={{ padding: "5%", backgroundColor: "#f99e1a" }}>
              <h1>Games On My List :</h1>
              {games.length ? (
                <List>
                  {games.map((game) => (
                    <ListItem key={game._id}>
                      <Link to={"/dashboard/" + game._id}>
                        <strong>
                          {game.title} by {game.author}
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
          <Col size="md-4">
            <br />

            <Card style={{ padding: "5%", backgroundColor: "#f99e1a" }}>
              n government has maintained an uneasy peace. As resources run
              short, however, these Confederate nations find themselves looking
              towards the rich worlds of their alien neighbors, the enigmatic
              Protoss. To further complicate matters, it seems that a previously
              unknown and deadly species known only as the Zerg has entered
              Protoss space and is destroying everything in its path. The time
              for war has come... As the military leader for your species, you
              must gather the resources you need to train and expand your forces
              and lead them to victory. 30 unique missions will chaln government
              has maintained an uneasy peace. As resources run short, however,
              these Confederate nations find themselves looking towards the rich
              worlds of their alien neighbors, the enigmatic Protoss. To further
              complicate matters, it seems that a previously unknown and deadly
              species known only as the Zerg has entered Protoss space and is
              destroying everything in its path. The time for war has come... As
              the military leader for your species, you must gather the
              resources you need to train and expand your forces and lead them
              to victory. 30 unique missions will chal
            </Card>
          </Col>
        </Row>
      </Container>
    </Page>
  );
}

export default Dashboard;
