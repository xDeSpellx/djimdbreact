import axios from 'axios';

export function login(user, pass) {
    return (dispatch) => {      
        dispatch({ type: 'STARTLOGING' });
        
        axios.post('https://djimdb.herokuapp.com/auth/', {username:user,password:pass})   
        .then((response) =>{
            dispatch({type: 'SUCCESSLOGIN'});
        })
        .catch((error)=> {
            dispatch({type: 'FAILLOGIN' });
        })
    }
  }

  export function logout() {
    return (dispatch) => {      
        dispatch({ type: 'LOGOUT' });
    }
}