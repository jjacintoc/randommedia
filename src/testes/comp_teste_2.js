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

const primeiroProduto ={
  img: "lolol",
  title: "lol",
  author: "lololo"
}

const texto = 'textolololo'
const img = 'link da iamgem'

function ListaDeProdutos(){
  return (
    <section>
      <Produto propname='teste' />
      <Produto carreira='camionista' matricula={22} />
       <Produto img={primeiroProduto.img} />
    </section>
  )
}

const Produto = (props) => {
  console.log(props);
  const title = 'variavel texto lolulolo'
  return (
  <article>
    <Imagem/>
    <Titulo></Titulo>
    <Descricao></Descricao>
    <h4>{title.toUpperCase()}</h4>
    <img src={img} alt=""/>
    <p>{props.propname}</p>
    <p>{props.carreira}</p>
    <p>{props.matricula}</p>
  </article>
  );
}

const Imagem = () => <img src="" alt=""/>;
const Titulo = () => <h2>lol ez</h2>;
const Descricao = () => <p>mensagem</p>
const TesteJSXcss = () => <h4 style={{color:'#617d98', fontSize: '0.75 rem', marginTop:'1 rem'}}>lol ez</h4>;



// teste map lista de objetos

const nome = ['joao', 'pedro', 'lolahaha'];
const novoNome = nome.map((nome) => {
  <h1>{nome}</h1>
});
function ListaDeNomes(){
  return (
    <section className='listanome'>
      {novoNome}
    </section>
  )
}


ReactDom.render(<teste/>, document.getElementById('teste'));