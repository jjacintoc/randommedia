import React from 'react'
import ReactDom from 'react-dom'

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
function Teste(){
  return (
    <div>
      <CoisoTeste></CoisoTeste>
      <Mensagem></Mensagem>
      <div className='ClasseTeste'>teste teste</div>
    </div>
  )
}

const CoisoTeste = () => <h2>lol ez</h2>;
const Mensagem = () => <p>mensagem</p>

ReactDom.render(<teste/>, document.getElementById('teste'));