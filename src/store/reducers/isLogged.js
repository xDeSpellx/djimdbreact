const initialState = {
    isLoggedIn:false
}

const loggedReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'SIGNIN':
            return 'true';            
        case 'SIGNOUT':
            return 'false';            
        default:
            return 'false';
    }
}

export default loggedReducer;