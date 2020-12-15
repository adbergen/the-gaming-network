import React from "react";
import "font-awesome/css/font-awesome.min.css";

const first = (props) => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        position: "absolute",
        top: "80%",
        right: "0",
        color: "white",
        fontSize: "0.9rem",
        cursor: "pointer",
      }}
    >
      <div style={{ padding: "8px 16px" }} className="fa fa-instagram"></div>
      <div style={{ padding: "8px 16px" }} className="fa fa-twitter"></div>
      <div style={{ padding: "8px 16px" }} className="fa fa-facebook"></div>
    </div>
  );
};

export default first;
