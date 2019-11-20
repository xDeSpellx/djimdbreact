import axios from 'axios';

export function login(user, pass) {
    return (dispatch) => {      
        dispatch({ type: 'STARTLOGING' });
        
        axios.post('https://djimdb.herokuapp.com/auth/', {username:user,password:pass})   
        .then((response) =>{
            dispatch({type: 'SUCCESSLOGIN',user:user,'token':response.data['token']});
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

export function closeMSG(){
    return (dispatch) => {      
        dispatch({ type: 'CLOSEMSG' });
    }
}

export function fetchMovies(token){
    return (dispatch) => {      
        dispatch({ type: 'FETCHINGMOVIES' });
        
        axios.get('https://djimdb.herokuapp.com/api/movies/',{headers:{Authorization:'Token '+token}})   
        .then((response) =>{
            dispatch({type: 'FETCHEDMOVIES',data:response.data});
        })
        .catch((error)=> {
            dispatch({type: 'FAILEDFETCH' });
        })
    }
}