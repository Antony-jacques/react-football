const initialState = {
  showSignIn: false,
  showSignUp: false,
  gamesList:[],
  filter:false,
  competition:''
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
      case 'CLOSEMODAL': return{
        ...state,
        showSignIn: false,
        showSignUp: false,
      }
      case 'PREMIERLEAGUE': return{
        ...state,
        competition: 'ENGLAND: Premier League',
        filter : true
      }
      case 'ALLCOMPETITIONS' : return{
        ...state,
        filter : false

      }
      case 'LIGUE1':return{
        ...state,
        competition: 'FRANCE: Ligue 1',

        filter:true,
      }
    default:
      return state;
  }
}
