import React from "react";
import "./landing.css";

// {/* <div className="floatright">
//     Faça login ou crie conta
// </div>

//  <div className="randompost"> {/* https://www.youtube.com/watch?v=3ax9TW2c2bY&ab_channel=Ihatetomatoes */}
//     <img src="post" alt=""/>
//     .
//     <button>Outro post!</button>
// </div> */}

const Produto = (props) => {
  const title = "variavel texto lolulolo";
  const { img, titulo, author } = props;
  //atribute, eventhandler
  //onclick, onMouseOver
  const clickHandler = (e) => {
    console.log(e); //e significa event object
    console.log(e.target); //devolve o que estamos a clicar, o target
    alert("hello world");
  };
  const exemploSegundo = (author) => {
    alert("hello world");
  };

  const passaComrato = () => {
    console.log(title);
  };
  return (
    <article classname="produto" onMouseOver={() => passaComrato}>
      <img src={img} onClick={clickHandler} alt="" />
      <h1>{titulo}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        testete
      </button>
      <button type="button" onClick={() => exemploSegundo(author)}>
        teste complexo?
      </button>{" "}
      {/*para correr apenas quando clico, se tirar arrow fun corre logo mal começo a app*/}
    </article>
  );
};

export default Produto;
