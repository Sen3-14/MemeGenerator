import React from "react";
import peepo from "../photos/peepo.jpg";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() =>{
      fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data =>setAllMemes(data.data.memes))
  }, [])

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event){
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]:value
    }))
  }

  return (
    <main>
      <div className="meme-form">
        <input 
           type="text" 
           className="form--inputs" 
           placeholder="Top text" 
           name="topText"
           value={meme.topText}
           onChange={handleChange}
        />
        <input 
           type="text" 
           className="form--inputs" 
           placeholder="Bottom text" 
           name="bottomText"
           value={meme.bottomText}
           onChange={handleChange}
           />
        <button onClick={getMemeImage} className="form--button">
          Get a new meme image <img src={peepo} alt="peepo" className="peepo" />
        </button>
      </div>
      
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="top">{meme.topText}</h2>
        <h2 className="bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
