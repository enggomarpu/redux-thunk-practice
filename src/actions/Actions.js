import axios from 'axios';


export const signIn = ({username, password}) => {
    
    let feedBack = false;
    return dispatch => {
        dispatch(signInStarted());
        console.log('user object from signin', username, password)
        //http://3.97.206.109:8081/
        axios.post('http://localhost:3001/login', {username, password})
        //axios.post('http://3.97.206.109:8081/login', {username, password})
        .then(response => {
          feedBack = true;
          console.log('in action',response);
          dispatch(signInSuccess(response));
          return feedBack;
        })
        .catch(err => {

          feedBack = false;  
          console.log('in action eerr',err);
          dispatch(signInFail(err.message));
          return feedBack;
        });

        return feedBack;
    }
    
}

export const setCurrentUser = (fullUsr) => {
    return dispatch => {
        console.log('setcurrentuser action', fullUsr)
        dispatch(setUser(fullUsr))
    }
}

const signInStarted = () => {
    return {
        type: 'SIGNIN_STARTED'
    }
}

const signInSuccess = (response) => ({
    type: 'SIGNIN_SUCCESS',
    payload: response
})

const signInFail = (msg) => {
    
    return {
        type: 'SIGNIN_FAIL',
        payload: msg
    }
}

const setUser = (fulluser) => {
    return {
        type: 'SET_CURRENT_USER',
        payload: fulluser
    }
    //console.log('global dispatch', user);
    //dispatch({type: 'SET_CURRENT_USER_SUCCESS', payload: user})
  }