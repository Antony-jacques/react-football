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
    default:
      return state;
  }
}
