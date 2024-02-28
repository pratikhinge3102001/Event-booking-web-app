
const initialState = {
    organiserInfo: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_ORGANISER_INFO':
        return {
          ...state,
          organiserInfo: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  