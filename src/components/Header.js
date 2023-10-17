import React from "react";
import troll from "../photos/trollFace.png";

export default function Header() {
  return (
    <header className="header">
      <img src={troll} alt="trollFace" className="header--image" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">For the lolz</h4>
    </header>
  );
}
