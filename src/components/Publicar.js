import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/publicarActions";
import PublicarForm from "./PublicarForm";
import {
  // Table,
  // TableContainer,
  // TableHead,
  // TableRow,
  // TableCell,
  // TableBody,
  Button,
  ButtonGroup,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import "./publicar.css";

const Publicar = (props) => {
  const [currentId, setCurrentId] = useState(0); //passar valores da lista para o form

  useEffect(() => {
    props.fetchAllPublicar();
    console.log(props);
  }, []);

  const onDelete = (postID) => {
    if (window.confirm("tem a certeza que quer apagar este registo?"))
      props.deletePublicar(postID, () => window.alert("Registo apagado"));
  };
  return (
    <>
      <section id="publicar">
        <div className="conteudoPublicar">
          <div className="row">
            <div className="col-4">
              <PublicarForm {...{ currentId, setCurrentId }}></PublicarForm>
            </div>
            <div className="col-8">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">PostID</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Titulo</th>
                    <th scope="col">Conteudo</th>
                    <th scope="col">Imagem</th>
                    <th scope="col">Likeness</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Views</th>
                    {/* <th scope="col">Pinned</th> */}
                    <th scope="col">Data</th>
                    <th scope="col">Utilizador</th>
                    <th scope="col">Operações</th>
                  </tr>
                </thead>
                <tbody>
                  {props.publicarList.map((record, index) => {
                    //callback function para os registos
                    console.log(record.postID);
                    return (
                      <tr key={index}>
                        <td>{record.postID}</td>
                        <td>{record.postCategory}</td>
                        <td>{record.postTitle}</td>
                        <td>{record.postContent}</td>
                        <td>{record.postImage}</td>
                        <td>{record.postLikeness}</td>
                        <td>{record.postType}</td>
                        <td>{record.postViews}</td>
                        {/* <td>{record.pinnedPost}</td> */}
                        <td>{record.postDate}</td>
                        <td>{record.username}</td>
                        <td className="espaco">
                          <ButtonGroup>
                            <Button>
                              <EditIcon
                                color="primary"
                                onClick={() => {
                                  setCurrentId(record.postID);
                                }}
                              ></EditIcon>
                            </Button>
                            <Button>
                              <DeleteIcon
                                color="primary"
                                onClick={() => onDelete(record.postID)}
                              ></DeleteIcon>
                            </Button>
                          </ButtonGroup>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
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
  fetchAllPublicar: actions.fetchAll,
  deletePublicar: actions.Delete,
};

export default connect(mapStateToProps, mapActionToProps)(Publicar);

{
  /* <TableContainer>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>PostID</TableCell>
        <TableCell>Categoria</TableCell>
        <TableCell>Titulo</TableCell>
        <TableCell>Imagem</TableCell>
        <TableCell>Likeness</TableCell>
        <TableCell>Tipo</TableCell>
        <TableCell>Views</TableCell>
        <TableCell>Data</TableCell>
        <TableCell>Utilizador</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {props.publicarList.map((record, index) => {
        return (
          <TableRow key={index}>
            <TableCell>{record.PostID}</TableCell>
            <TableCell>{record.PostCategory}</TableCell>
            <TableCell>{record.PostTitle}</TableCell>
            <TableCell>{record.PostContent}</TableCell>
            <TableCell>{record.PostImage}</TableCell>
            <TableCell>{record.PostLikeness}</TableCell>
            <TableCell>{record.PostType}</TableCell>
            <TableCell>{record.PostViews}</TableCell>
            <TableCell>{record.PinnedPost}</TableCell>
            <TableCell>{record.PostDate}</TableCell>
            <TableCell>{record.Username}</TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  </Table>
</TableContainer>; */
}
