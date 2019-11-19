import axios from 'axios';

const initialState = {
    isLoggedIn:false,
    loggedInUsername:null,
    token:null
}

const loggedReducer = ( state = initialState,action) =>{    
    switch(action.type){
            case 'LOGIN':
                    axios({
                        method: 'post',
                        url: 'https://djimdb.herokuapp.com/auth/',
                        data: {username:action.payload.username,password:action.payload.password},                        
                        })
                        .then(function (response) {                                                        
                            // console.log(response.data.token)
                           
                            return Object.assign({}, state, { isLoggedIn: true})                                                                                       
                        })
                        .catch(function (response) {
                            //handle error
                            console.log(response);
                        });
            return state;
        case 'LOGOUT':
            return Object.assign({}, state, { isLoggedIn: false});            
        default:           
            return state;
    }
}

export default loggedReducer;