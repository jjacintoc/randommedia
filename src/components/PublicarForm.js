import React, { useState } from "react";
import {
  Grid,
  TextField,
  withStyles,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Button,
  FormHelperText,
} from "@material-ui/core";

// import {
//   KeyboardDatePicker,
//   MuiPickersUtilsProvider,
// } from "@material-ui/pickers";

// import DateFnsUtils from "@date-io/date-fns";

const styles = (theme) => ({
  root: {
    formControl: {
      margin: theme.spacing(1),
      minwidth: 200,
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      minwidth: 200,
    },
    smMargin: {
      margin: theme.spacing(2),
    },
  },
});

const valoresIniciais = {
  Categoria: "",
  Titulo: "",
  Conteudo: "",
  Imagem: "",
  Likeness: "",
  Tipo: "",
  Views: "",
  Pinned: "",
  Data: "",
  Utilizador: "",
};

const PublicarForm = ({ classes, ...props }) => {
  const validate = () => {
    let temp = {};
    temp.Categoria = values.Categoria
      ? ""
      : "Campo de preenchimento necessario"; // se existir um valor, error message ta vazia. se nao existir error messagem tem o preenchimento
    temp.Titulo = values.Titulo ? "" : "Campo de preenchimento necessario";
    temp.Likeness = values.Likeness ? "" : "Campo de preenchimento necessario";
    temp.Tipo = values.Tipo ? "" : "Campo de preenchimento necessario";
    temp.Views = values.Views ? "" : "Campo de preenchimento necessario";
    temp.Pinned = values.Pinned ? "" : "Campo de preenchimento necessario";
    temp.Data = values.Data ? "" : "Campo de preenchimento necessario";
    temp.Utilizador = values.Utilizador
      ? ""
      : "Campo de preenchimento necessario";
    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x == ""); //devolve o array e verifica se algum dos objetos no array é uma empty string
  };
  const [values, setValues] = useState(valoresIniciais);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //parar o comportamento default do html
    console.log(values);
    if (validate()) {
      window.alert("Validação feita sem problemas");
    }
  };

  return (
    <>
      <div>
        <form
          autoComplete="off"
          noValidate
          className={classes.root}
          onSubmit={handleSubmit}
        >
          <Grid container>
            <Grid item xs={11}>
              <TextField
                name="Categoria"
                value={values.Categoria}
                label="Nome categoria"
                onChange={handleInputChange}
                variant="outlined"
                {...(errors.Categoria && {
                  error: true,
                  helperText: errors.Categoria,
                })} //verifica se existe algum erro, se sim mostra o error como true e muda o helper text
              ></TextField>
              <TextField
                name="Titulo"
                value={values.Titulo}
                label="Titulo do post"
                onChange={handleInputChange}
                {...(errors.Titulo && {
                  error: true,
                  helperText: errors.Titulo,
                })} //verifica se existe algum erro, se sim mostra o error como true e muda o helper text
                variant="outlined"
              ></TextField>
              <TextField
                name="Conteudo"
                value={values.Conteudo}
                label="Conteudo do post"
                onChange={handleInputChange}
                variant="outlined"
                {...(errors.Conteudo && {
                  error: true,
                  helperText: errors.Conteudo,
                })} //verifica se existe algum erro, se sim mostra o error como true e muda o helper text
              ></TextField>
              <TextField
                name="Imagem"
                value={values.Imagem}
                label="URL da imagem do post"
                onChange={handleInputChange}
                variant="outlined"
                {...(errors.Imagem && {
                  error: true,
                  helperText: errors.Imagem,
                })} //verifica se existe algum erro, se sim mostra o error como true e muda o helper text
              ></TextField>
              <TextField
                name="Likeness"
                value={values.Likeness}
                label="Likes do post"
                onChange={handleInputChange}
                variant="outlined"
                {...(errors.Likeness && {
                  error: true,
                  helperText: errors.Likeness,
                })} //verifica se existe algum erro, se sim mostra o error como true e muda o helper text
              ></TextField>
              <TextField
                name="Tipo"
                value={values.Tipo}
                label="Tipo de post"
                onChange={handleInputChange}
                variant="outlined"
                {...(errors.Tipo && {
                  error: true,
                  helperText: errors.Tipo,
                })} //verifica se existe algum erro, se sim mostra o error como true e muda o helper text
              ></TextField>
              <TextField
                name="Views"
                value={values.Views}
                label="Views do post (apenas teste)"
                onChange={handleInputChange}
                variant="outlined"
                {...(errors.Views && {
                  error: true,
                  helperText: errors.Views,
                })} //verifica se existe algum erro, se sim mostra o error como true e muda o helper text
              ></TextField>
              <FormControl
                className={classes.formControl}
                {...(errors.Pinned && { error: true })}
              >
                <InputLabel>Pinned Post</InputLabel>
                <Select
                  name="Pinned"
                  value={values.Pinned}
                  onChange={handleInputChange}
                >
                  <MenuItem value="">Quer destacar o post?</MenuItem>
                  <MenuItem value="True">Sim</MenuItem>
                  <MenuItem value="False">Nao</MenuItem>
                </Select>
                {errors.pinned && (
                  <FormHelperText>{errors.pinned}</FormHelperText>
                )}
              </FormControl>
              {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date picker inline"
                  value={values.Data}
                  onChange={handleInputChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </MuiPickersUtilsProvider> */}
              <TextField
                name="Data"
                value={values.Data}
                label="Data de criação do post"
                onChange={handleInputChange}
                variant="outlined"
                {...(errors.Data && {
                  error: true,
                  helperText: errors.Data,
                })} //verifica se existe algum erro, se sim mostra o error como true e muda o helper text
              ></TextField>
              <TextField
                name="Utilizador"
                value={values.Utilizador}
                label="Nome do Utilizador"
                onChange={handleInputChange}
                variant="outlined"
                {...(errors.Utilizador && {
                  error: true,
                  helperText: errors.Utilizador,
                })} //verifica se existe algum erro, se sim mostra o error como true e muda o helper text
              ></TextField>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  className={classes.smMargin}
                >
                  Submit
                </Button>
                <Button
                  variant="contained"
                  color="secundary"
                  className={classes.smMargin}
                >
                  Reset
                </Button>
              </div>
            </Grid>
            <Grid item xs={1}>
              sss
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
};

export default withStyles(styles)(PublicarForm);
