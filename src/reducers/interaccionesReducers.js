const initialState = {
    email: '',
    clicks: [],
  }
  
  const interaccionesReducers = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_EMAIL': {
        return {
          ...state,
          email: action.data,
        }
      }
      case 'ADD_CLICK': {
        let auxClick = state.clicks;
        auxClick[action.data]++; //suma 1 al elemento clickeado
        return {
          ...state,
          clicks: auxClick,
        }
      }
      case "RESET_INT":
        return initialState;
      default: {
        return state;
      }
    }
  };
  export default interaccionesReducers