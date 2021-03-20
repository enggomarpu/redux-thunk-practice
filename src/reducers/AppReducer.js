
let user = localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")) : null;
let token = localStorage.getItem("token")? JSON.parse(localStorage.getItem("token")): null;


console.log('user',user, 'token', token);
const initialState = {

    isLoading: false,
    isAuthenticated: false,
    user: null, 
    token: null, 
    signInErr: '',
    userDetails: null

  };
  
  export const AppReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SIGNIN_STARTED':
        return {
          ...state,
          isLoading: true,
          isAuthenticated: false,
        };
      case 'SIGNIN_SUCCESS':
        localStorage.setItem("user", JSON.stringify(action.payload.data));
        localStorage.setItem("token", JSON.stringify(action.payload.data.accessToken));
          console.log('in reducer success', action.payload.data, action.payload.data.accessToken)
        return {
          ...state,
          isLoading: false,
          isAuthenticated: true,
          user: action.payload.data,
          token: action.payload.data.accessToken
        };
      case 'SIGNIN_FAIL':
        return {
          ...state,
          isLoading: false,
          signInErr: action.payload.error
        };
      case 'SET_CURRENT_USER':
        return { ...state, userDetails: action.payload };  
      
        default:
        return state;
    }
  }