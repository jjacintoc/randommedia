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

import {produtos} from './produtos';
import Produto from './Produto'; //default exports podem ser renamed aqui e funciona sempre

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





ReactDom.render(<teste/>, document.getElementById('teste'));