import axios from 'axios';

const initialState = {
    isLoggedIn:false,
    loggedInUsername:null,
    token:null
}

const loggedReducer = ( state = initialState,action) =>{    
    switch(action.type){
            case 'LOGINSUCCESS':
                console.log('success')
                break
            case 'LOGIN':                                       
            axios.post('https://djimdb.herokuapp.com/auth/', {
                        username:action.payload.username,
                        password:action.payload.password
                      })
                      .then( data => {
                           this.props.dispatch({type:'LOGINSUCCESS',payload:data})                    
                      })
                      .catch(function (error) {
                        console.log(error);
                      });  
                      break
        case 'LOGOUT':
            return Object.assign({}, state, { isLoggedIn: false});            
        default:           
            return state;
    }
}

export default loggedReducer;