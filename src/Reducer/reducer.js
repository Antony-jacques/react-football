const initialState = {
  showSignIn: false,
  showSignUp: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLEUP":
      if (state.showSignUp) {
        return {
          ...state,
          showSignIn: false,
          showSignUp: false,
        };
      } else {
        return {
          ...state,
          showSignIn: false,
          showSignUp: true,
        };
      }
      case"TOGGLEIN": if(state.showSignIn){
          return{
              ...state,
              showSignIn: false,
              showSignUp: false,
          }
      }else{
          return{
              ...state,
              showSignIn: true,
              showSignUp: false,
          }
      }
    default:
      return state;
  }
}
