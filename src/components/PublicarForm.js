import React, { useState } from "react";
import { Grid, TextField } from "@material-ui/core";

const valoresIniciais = {
  Categoria: "",
  Titulo: "",
  Imagem: "",
  Likeness: "",
  Tipo: "",
  Views: "",
  Pinned: "",
  Data: "",
  Utilizador: "",
};

const PublicarForm = (props) => {
  const { valores, setValores } = useState(valoresIniciais);

  const handleInputChange = (e) => {
    const { nome, valor } = e.target;
    setValores({
      ...valores,
      [nome]: valor,
    });
  };

  return (
    <div>
      <form action="">
        <Grid container>
          <Grid item xs={6}>
            <TextField
              name="Categoria"
              value={valores.Categoria}
              label="Nome categoria"
              onChange={handleInputChange}
            ></TextField>
            <TextField
              name="Titulo"
              value={valores.Titulo}
              label="Titulo do post"
              onChange={handleInputChange}
            ></TextField>
            <TextField
              name="Imagem"
              value={valores.Imagem}
              label="URL da imagem do post"
              onChange={handleInputChange}
            ></TextField>
            <TextField
              name="Likeness"
              value={valores.Likeness}
              label="Likes do post"
              onChange={handleInputChange}
            ></TextField>
            <TextField
              name="Tipo"
              value={valores.Tipo}
              label="Tipo de post"
              onChange={handleInputChange}
            ></TextField>
            <TextField
              name="Views"
              value={valores.Views}
              label="Views do post (apenas teste)"
              onChange={handleInputChange}
            ></TextField>
            <TextField
              name="Pinned"
              value={valores.Pinned}
              label="True ou false de post afixado"
              onChange={handleInputChange}
            ></TextField>
            <TextField
              name="Data"
              value={valores.Data}
              label="Data de criação do post"
              onChange={handleInputChange}
            ></TextField>
            <TextField
              name="Utilizador"
              value={valores.Utilizador}
              label="Nome do Utilizador"
              onChange={handleInputChange}
            ></TextField>
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </form>
    </div>
  );
};

export default PublicarForm;
