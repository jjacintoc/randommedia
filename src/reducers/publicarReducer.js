import { ACTION_TYPES } from "../actions/publicarActions";

const initialState = {
  list: [],
};

//reducer realiza ação das actions
//da action vai para aqui para o reducer. Action passa a data do fetch para aqui que armazena a data no publicar list:
export const publicar = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL:
      return {
        //armazena aqui
        ...state,
        list: [...action.payload],
      };

    case ACTION_TYPES.CREATE:
      return {
        //armazena aqui
        ...state,
        list: [...state.list, action.payload], //separa elementos existentes no array e insere novos items, restantes que estao no payload
      };

    case ACTION_TYPES.UPDATE:
      return {
        //armazena aqui
        ...state,
        list: state.list.map((x) =>
          x.id == action.payload.id ? action.payload : x
        ), //callback function se existir um elemento com id, temos de devolver o updated object senao devolvemos como esta
      };

    case ACTION_TYPES.DELETE:
      return {
        //armazena aqui
        ...state,
        list: state.list.filter((x) => x.id != action.payload), //filtra todos os registos, se o id nao for igual ao id que temos, apaga. payload contem o id apagado
      };
    default:
      return state;
  }
};
