import { ACTION_TYPES } from "../actions/publicarActions";

const initialState = {
  list: [],
};

//da action vai para aqui para o reducer. Action passa a data do fetch para aqui que armazena a data no publicar list:
export const publicar = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL:
      return {
        //armazena aqui
        ...state,
        list: [...action.payload],
      };

    default:
      return state;
  }
};
