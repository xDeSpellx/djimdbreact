const initialState = {
    isLoggedIn:false,
    wait:false,
    loggedInUsername:null,
    token:null,
    errorMessage:false,
    user:null,
    movies:null,
    moviesLoading: false
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
                return Object.assign({}, state, { isLoggedIn: false,movies:null }); 
            case 'CLOSEMSG' :
                return Object.assign({}, state, { errorMessage: false }); 
            case 'FETCHINGMOVIES':
                console.log('start fetching')
                return Object.assign({}, state, { moviesLoading: true }); 
            case 'FETCHEDMOVIES':                
                return Object.assign({}, state, { movies: action.data,moviesLoading: false }); 
        default:           
            return state;
    }
}

export default loggedReducer;