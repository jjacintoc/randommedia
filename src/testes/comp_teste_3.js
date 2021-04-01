import React from 'react'
import ReactDom from 'react-dom'
import './teste.css'
//stateless functional componente
// devolve sempre JSX

/*
function Teste(){
  return <h4>teste teste teste</h4>
}
*/
/*
const Teste = () => {
  return React.createElement('h1', {} , 'teste teste teste');

}*/
/*
function Teste(){
  return (
    <div>
      <h1>teste teste</h1>
    </div>
  )
}*/
/*
const Teste = () => {
  return React.createElement('div', {} , React.createElement('h1', {} , 'teste teste teste'));

}*/


//regras jsx
//so pode devolver 1 elemento
//div section article ou fragment
//usar camelCase para html atributos
//classname em vez de class
//fechar cada elemento


//setup vars

const produtos =[
{ id:1,
  img: "lolol",
  title: "lol",
  author: "lololo",
},
{ id:2,
  img: "lolol2",
  title: "lol2",
  author: "lololo2",
}

];
const texto = 'textolololo'
const img = 'link da iamgem'

function ListaDeProdutos(){
  return (
    <section className='listaProduto'>
      {produtos.map((produto) =>{
        //const{img,titulo,author} = produto; removido porque ta descrito produto props.produto
        return (
          <Produto key={produto.id} produto={produto}></Produto>
        );
      })}
    </section>
  )
}

const Produto = (props) => {
  const title = 'variavel texto lolulolo'
  const {img, titulo, author} = props;
  //atribute, eventhandler
  //onclick, onMouseOver
  const clickHandler = (e) => {
    console.log(e); //e significa event object
    console.log(e.target); //devolve o que estamos a clicar, o target
    alert('hello world');
  }
  const exemploSegundo = (author) => {
    alert('hello world');
  }

  const passaComrato = () => {
    console.log(title);
  }
  return (
  <article classname='produto' onMouseOver={()=> passaComrato}>
    <img src={img} onClick={clickHandler} alt=""/>
    <h1>{titulo}</h1>
    <h4>{author}</h4>
    <button type="button" onClick={clickHandler}>testete</button>
    <button type="button" onClick={() => exemploSegundo(author)}>teste complexo?</button> {/*para correr apenas quando clico, se tirar arrow fun corre logo mal começo a app*/}
  </article>
  );
}



ReactDom.render(<teste/>, document.getElementById('teste'));