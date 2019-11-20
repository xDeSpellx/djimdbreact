const initialState = {
    isLoggedIn:false,
    wait:false,
    loggedInUsername:null,
    token:null,
    errorMessage:false,
    user:null,
    movies:null
}

const loggedReducer = ( state = initialState,action) =>{    
    switch(action.type){           
            case 'STARTLOGING': 
                return Object.assign({}, state, { wait: true });                  
            case 'SUCCESSLOGIN':                
                return Object.assign({}, state, { isLoggedIn: true,wait:false,user:action.user,token:action.token });            
            case 'FAILLOGIN':                
                return Object.assign({}, state, { isLoggedIn: false,wait:false,errorMessage:true }); 
            case 'LOGOUT' :
                return Object.assign({}, state, { isLoggedIn: false }); 
            case 'CLOSEMSG' :
                return Object.assign({}, state, { errorMessage: false }); 
            case 'FETCHEDMOVIES':
                console.log(action.data)
                return Object.assign({}, state, { movies: action.data }); 
        default:           
            return state;
    }
}

export default loggedReducer;