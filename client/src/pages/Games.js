import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Games() {
  // Setting our component's initial state
  const [games, setGames] = useState([]);
  const [formObject, setFormObject] = useState({});

  // Load all books and store them with setBooks
  useEffect(() => {
    loadGames();
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
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>What Games Should I Play?</h1>
          </Jumbotron>
          <form>
            <Input
              onChange={handleInputChange}
              name="title"
              placeholder="Title (required)"
            />
            <Input
              onChange={handleInputChange}
              name="author"
              placeholder="Author (required)"
            />
            <TextArea
              onChange={handleInputChange}
              name="synopsis"
              placeholder="Synopsis (Optional)"
            />
            <FormBtn
              disabled={!(formObject.author && formObject.title)}
              onClick={handleFormSubmit}
            >
              Submit Game
            </FormBtn>
          </form>
        </Col>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>Games On My List</h1>
          </Jumbotron>
          {games.length ? (
            <List>
              {games.map((game) => (
                <ListItem key={game._id}>
                  <Link to={"/games/" + game._id}>
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
        </Col>
      </Row>
    </Container>
  );
}

export default Games;
