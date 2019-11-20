import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/actions'

class Movies extends React.Component{
   
    componentWillReceiveProps(nextProps) {                
        let movieList = null;

        if(this.props.isLogged){
            this.props.fetchMovies(this.props.token)
        }
    }
    
    

    render(){
        

        return(
            <div>
                <h1>Movies Page</h1>                
                <p></p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLogged: state.isLogged.isLoggedIn,
        movieList:state.isLogged.movies,
        token:state.isLogged.token
    }
}

export default connect(mapStateToProps, actions)(Movies)