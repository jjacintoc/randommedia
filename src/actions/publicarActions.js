import api from "./api";

export const ACTION_TYPES = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  FETCH_ALL: "FETCH_ALL",
};

// const formatConteudo = (data) => ({
//   ...data,
//   postContent: data.postDate ? data.postDate : "este post não tem conteudo", //verifica se o post content esta vazio, se estiver coloca a string
// });

export const fetchAll = () => (dispatch) => {
  //get api request, resposta que vem da api do .dot net
  api
    .publicar()
    .fetchAll()
    .then((response) => {
      console.log(response);
      dispatch({
        type: ACTION_TYPES.FETCH_ALL,
        payload: response.data,
      });
    })
    .catch((err) => console.log(err));
};

//data que queremos inserir, depois callback function para executar no fim do insert
export const create = (data, onSuccess) => (dispatch) => {
  //data = formatConteudo(data);
  api
    .publicar()
    .create(data)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.CREATE,
        payload: res.data,
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};

//update
export const update = (id, data, onSuccess) => (dispatch) => {
  //data = formatConteudo(data);
  api
    .publicar()
    .update(id, data)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.UPDATE,
        payload: { id: id, ...data },
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};

//delete
export const Delete = (id, onSuccess) => (dispatch) => {
  api
    .publicar()
    .delete(id)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.DELETE,
        payload: id,
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};
