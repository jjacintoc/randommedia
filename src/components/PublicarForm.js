import React, { useState, useEffect } from "react";
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
import { connect } from "react-redux";
import * as actions from "../actions/publicarActions";
import useReset from "./useReset";

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
  postCategory: "",
  postTitle: "",
  postContent: "",
  postImage: "",
  postLikeness: "",
  postType: "",
  postViews: "",
  pinnedPost: "",
  postDate: "",
  username: "",
};

const PublicarForm = ({ classes, ...props }) => {
  const validate = () => {
    let temp = { ...errors };
    temp.postCategory = values.postCategory
      ? ""
      : "Campo de preenchimento necessario"; // se existir um valor, error message ta vazia. se nao existir error messagem tem o preenchimento
    temp.postTitle = values.postTitle
      ? ""
      : "Campo de preenchimento necessario";
    temp.postLikeness = values.postLikeness
      ? ""
      : "Campo de preenchimento necessario";
    temp.postType = values.postType ? "" : "Campo de preenchimento necessario";
    temp.postViews = values.postViews
      ? ""
      : "Campo de preenchimento necessario";
    temp.pinnedPost = values.pinnedPost
      ? ""
      : "Campo de preenchimento necessario";
    temp.postDate = values.postDate ? "" : "Campo de preenchimento necessario";
    temp.username = values.username ? "" : "Campo de preenchimento necessario";
    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x == ""); //devolve o array e verifica se algum dos objetos no array é uma empty string
  };

  const { resetForm } = useReset(valoresIniciais, validate, props.setCurrentId);

  const [values, setValues] = useState(valoresIniciais);
  const [errors, setErrors] = useState({});
  console.log(values.postCategory);

  //trata dos inputs do form
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
      if (props.currentId === 0)
        //se igual a 0 fazemos insert

        props.createPublicar(values, () => {
          window.alert("Dados Inseridos na Base de dados");
        });
      //senao fazemos update
      else
        props.updatePublicar(props.currentId, values, () => {
          window.alert("Dados Atualizados na Base de dados");
        });
    }
    resetForm();
  };

  useEffect(() => {
    if (props.currentId !== 0) {
      //se nao estiver a 0, da update aos setvalues
      setValues({
        ...props.publicarList.find((x) => x.postID === props.currentId),
      });
      setErrors({});
    }
    // console.log(props.publicarList.find((x) => x.postID === props.currentId));
    // console.log(values);
  }, [props.currentId]); //so faz render quando existe mudança no currentid

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
            <Grid item xs={12}>
              <TextField
                name="postCategory"
                value={values.postCategory}
                label="Nome categoria"
                onChange={handleInputChange}
                variant="outlined"
                {...(errors.postCategory && {
                  error: true,
                  helperText: errors.postCategory,
                })} //verifica se existe algum erro, se sim mostra o error como true e muda o helper text
              ></TextField>
              <TextField
                name="postTitle"
                value={values.postTitle}
                label="Titulo do post"
                onChange={handleInputChange}
                {...(errors.postTitle && {
                  error: true,
                  helperText: errors.postTitle,
                })} //verifica se existe algum erro, se sim mostra o error como true e muda o helper text
                variant="outlined"
              ></TextField>
              <TextField
                name="postContent"
                value={values.postContent}
                label="Conteudo do post"
                onChange={handleInputChange}
                variant="outlined"
                {...(errors.postContent && {
                  error: true,
                  helperText: errors.postContent,
                })} //verifica se existe algum erro, se sim mostra o error como true e muda o helper text
              ></TextField>
              <TextField
                name="postImage"
                value={values.postImage}
                label="URL da imagem do post"
                onChange={handleInputChange}
                variant="outlined"
                {...(errors.postImage && {
                  error: true,
                  helperText: errors.postImage,
                })} //verifica se existe algum erro, se sim mostra o error como true e muda o helper text
              ></TextField>
              <TextField
                name="postLikeness"
                value={values.postLikeness}
                label="Likes do post"
                onChange={handleInputChange}
                variant="outlined"
                {...(errors.postLikeness && {
                  error: true,
                  helperText: errors.postLikeness,
                })} //verifica se existe algum erro, se sim mostra o error como true e muda o helper text
              ></TextField>
              <TextField
                name="postType"
                value={values.postType}
                label="Tipos de post"
                onChange={handleInputChange}
                variant="outlined"
                {...(errors.postType && {
                  error: true,
                  helperText: errors.postType,
                })} //verifica se existe algum erro, se sim mostra o error como true e muda o helper text
              ></TextField>
              <TextField
                name="pinnedPost"
                value={values.pinnedPost}
                label="Post fixado?"
                onChange={handleInputChange}
                variant="outlined"
                {...(errors.pinnedPost && {
                  error: true,
                  helperText: errors.pinnedPost,
                })} //verifica se existe algum erro, se sim mostra o error como true e muda o helper text
              ></TextField>
              <TextField
                name="postViews"
                value={values.postViews}
                label="Visualizações do post"
                onChange={handleInputChange}
                variant="outlined"
                {...(errors.postViews && {
                  error: true,
                  helperText: errors.postViews,
                })} //verifica se existe algum erro, se sim mostra o error como true e muda o helper text
              ></TextField>
              <TextField
                name="postDate"
                value={values.postDate}
                label="Data de criação do post"
                onChange={handleInputChange}
                variant="outlined"
                {...(errors.postDate && {
                  error: true,
                  helperText: errors.postDate,
                })} //verifica se existe algum erro, se sim mostra o error como true e muda o helper text
              ></TextField>
              <TextField
                name="username"
                value={values.username}
                label="Nome do utilizador"
                onChange={handleInputChange}
                variant="outlined"
                {...(errors.username && {
                  error: true,
                  helperText: errors.username,
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
                  onClick={resetForm}
                >
                  Reset
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
};

//publicar list acede a lista da tabela de todas as publicaçoes
const mapStateToProps = (state) => {
  return {
    publicarList: state.publicar.list,
  };
};

const mapActionToProps = {
  createPublicar: actions.create,
  updatePublicar: actions.update,
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(withStyles(styles)(PublicarForm));

{
  /* <FormControl
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
                  <MenuItem value="true">Sim</MenuItem>
                  <MenuItem value="false">Nao</MenuItem>
                </Select>
                {errors.pinned && (
                  <FormHelperText>{errors.pinned}</FormHelperText>
                )}
              </FormControl> */
}
{
  /* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date picker inline"
                  value={values.postDate}
                  onChange={handleInputChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </MuiPickersUtilsProvider> */
}
