import axios from 'axios';

const initialState = {
    isLoggedIn:false,
    loggedInUsername:null
}

const loggedReducer = ( state = initialState,action) =>{    
    switch(action.type){
            case 'LOGIN': 
            console.log(action.payload.username)            
            console.log(action.payload.password)            
            axios.post('https://djimdb.herokuapp.com/auth/', {
                firstName: 'admin',
                lastName: 'Patata2378/*-'
          })
          .then(function (response) {
            return Object.assign({}, state, { isLoggedIn: true });
          })
          .catch(function (error) {            
            return Object.assign({}, state, { loggedInUsername: true });
          });
            return state;
        case 'LOGOUT':
            return Object.assign({}, state, { isLoggedIn: false});            
        default:           
            return state;
    }
}

export default loggedReducer;