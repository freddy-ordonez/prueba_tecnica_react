
const initialState = {
  status: 'not-authenticated', //'not-authenticated', 'authenticated'
  userid: null,
  username: null,
  errorMessage: null,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        userid: action.payload.userid,
        username: action.payload.username,
      };
    case "LOGOUT":
      return {
        ...initialState,
      };
    case "SET_AUTHENTICATE":
      return {
        ...state,
        status: 'authenticated'
      }
    default:
      throw new Error(`No hay ninguna accion de este tipo: ${action.type}`);
  }
};
