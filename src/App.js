import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { store } from "./actions/store";
import { Provider } from "react-redux";
import Publicar from "./components/Publicar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <section id="conteudo">
        <div className="contPrincipal">
          <Publicar></Publicar>
        </div>
      </section>
    </Provider>
  );
}

export default App;
