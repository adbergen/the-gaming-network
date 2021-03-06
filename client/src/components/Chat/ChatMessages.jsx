import React from "react";
import io from "socket.io-client";
import { useAuth0 } from "@auth0/auth0-react";

const PORT = process.env.PORT || 3001;

export const CTX = React.createContext();

const initState = {
  Global: [
    { from: "Billy", msg: "Did you guys see the trailer for cyberpunk?" },
    {
      from: "Ant",
      msg:
        "Hell yeah! I cannot wait to play it! I hope they do not push the release date back again",
    },
    { from: "Hojin", msg: "Whats up nerds" },
  ],
  FindPlayers: [
    { from: "Hojin", msg: "Who wants to play Among Us?" },
    { from: "Kelly", msg: "Ill play! Its so much fun being the imposter." },
    { from: "Ant", msg: "Whats your steam Id? I want to play with you guys" },
    {
      from: "Kristen",
      msg: "Do you need more players? I have 2 with me who want to play",
    },
  ],
  MMO: [
    { from: "Bobby", msg: "World of Warcraft is the best MMO of all time" },
    { from: "Ana", msg: "NO WAY Elder Scrolls Online is superior" },
    { from: "Lane", msg: "Who is old enought to remember PSU?" },
  ],
  Retro: [
    {
      from: "Thomas",
      msg:
        "I am going to start a playthrough of Zelda: Ocarina of Time. Heres my Twitch name: tTank420",
    },
    {
      from: "Kimberly",
      msg:
        "Does anyone know where I can get SNES ROMS? I am dying to play some Super Mario World",
    },
    {
      from: "Jack2",
      msg:
        "Im hosting a Mele tourny at my local shop. Anyone from Union County NJ and wants to participate? ",
    },
  ],
};

function reducer(state, action) {
  const { from, msg, topic } = action.payload;

  switch (action.type) {
    case "RECEIVE_MESSAGE":
      return {
        ...state,
        [topic]: [...state[topic], { from, msg }],
      };
    default:
      return state;
  }
}

let socket;

function sendChatAction(value) {
  socket.emit("chat message", value);
}

export default function Store(props) {
  const [allChats, dispatch] = React.useReducer(reducer, initState);

  if (!socket) {
    socket = io("https://good-game2020.herokuapp.com/");
    socket.on("chat message", function (msg) {
      dispatch({ type: "RECEIVE_MESSAGE", payload: msg });
    });
  }
  const { user, isAuthenticated, isLoading } = useAuth0();
  const person = user.name;

  return (
    <CTX.Provider value={{ allChats, sendChatAction, person }}>
      {props.children}
    </CTX.Provider>
  );
}
