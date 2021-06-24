import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/publicarActions";
import PublicarForm from "./PublicarForm";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

const Publicar = (props) => {
  useEffect(() => {
    props.fetchAllPublicar();
  }, []);
  return (
    <>
      <section id="publicar">
        <div className="conteudoPublicar">
          <div className="row">
            <div className="col-6">
              <PublicarForm></PublicarForm>
            </div>
            <div className="col-6">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">PostID</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Titulo</th>
                    <th scope="col">Imagem</th>
                    <th scope="col">Likeness</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Views</th>
                    <th scope="col">Pinned</th>
                    <th scope="col">Data</th>
                    <th scope="col">Utilizador</th>
                  </tr>
                </thead>
                <tbody>
                  {props.publicarList.map((record, index) => {
                    return (
                      <tr key={index}>
                        <td>{record.PostID}</td>
                        <td>{record.PostCategory}</td>
                        <td>{record.PostTitle}</td>
                        <td>{record.PostContent}</td>
                        <td>{record.PostImage}</td>
                        <td>{record.PostLikeness}</td>
                        <td>{record.PostType}</td>
                        <td>{record.PostViews}</td>
                        <td>{record.PinnedPost}</td>
                        <td>{record.PostDate}</td>
                        <td>{record.Username}</td>
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
};

export default connect(mapStateToProps, mapActionToProps)(Publicar);

{
  /* <table class="table">
  <thead>
    <tr>
      <th scope="col">PostID</th>
      <th scope="col">Categoria</th>
      <th scope="col">Titulo</th>
      <th scope="col">Imagem</th>
      <th scope="col">Likeness</th>
      <th scope="col">Tipo</th>
      <th scope="col">views</th>
      <th scope="col">pinned</th>
      <th scope="col">data</th>
      <th scope="col">utilizador</th>
    </tr>
  </thead>
  <tbody>
    {props.publicarList.map((record, index) => {
      return (
        <tr key={index}>
          <td key={index}>{record.PostID}</td>
          <td>{record.PostCategory}</td>
          <td>{record.PostTitle}</td>
          <td>{record.PostContent}</td>
          <td>{record.PostImage}</td>
          <td>{record.PostLikeness}</td>
          <td>{record.PostType}</td>
          <td>{record.PostViews}</td>
          <td>{record.PinnedPost}</td>
          <td>{record.PostDate}</td>
          <td>{record.Username}</td>
        </tr>
      );
    })}
  </tbody>
</table>; */
}

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
