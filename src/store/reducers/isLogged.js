const initialState = {
    isLoggedIn:false,
    loggedInUsername:null,
    token:null
}

const loggedReducer = ( state = initialState,action) =>{    
    switch(action.type){           
            case 'STARTLOGING': 
                //LOADER                                                      
                return state
            case 'SUCCESSLOGIN':                
                return Object.assign({}, state, { isLoggedIn: true});            
            case 'FAILLOGIN':                
                return Object.assign({}, state, { isLoggedIn: false}); 
            case 'LOGOUT' :
                return Object.assign({}, state, { isLoggedIn: false}); 
        default:           
            return state;
    }
}

export default loggedReducer;