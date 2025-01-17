const clientState = {
    clients: [],
    selectedClient: null,
    listInterest: []
  };
  
  export const clientReducer = (state, action) => {
    switch (action.type) {
      case 'SET_CLIENTS':
        return { ...state, clients: action.payload};
      case 'UPDATE_CLIENT':
        return {
          ...state,
          selectedClient: null,
          clients: state.clients.map((client) =>
            client.id === action.payload.id ? action.payload : client
          ),
        };
      case 'DELETE_CLIENT':
        return {
          ...state,
          clients: state.clients.filter((client) => client.id !== action.payload),
        };
      case 'SET_SELECTED_CLIENT':
        return { ...state, selectedClient: action.payload };
      case 'SET_INTERESTS':
        return {...state, listInterest: action.payload}
      case 'DISABLE_CLIENT':
        return {
          ...state, selectedClient: null
        }
      default:
        throw new Error(`No hay ninguna accion de este tipo: ${action.type}`);
    }
  };