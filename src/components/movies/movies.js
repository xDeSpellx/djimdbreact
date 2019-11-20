import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/actions'
import { Spinner } from 'react-bootstrap';

class Movies extends React.Component{
   componentDidUpdate(prevProps) {
        if (this.props.isLogged !== prevProps.isLogged) {            
            if(this.props.isLogged){
                this.props.fetchMovies(this.props.token)
                this.setState(this.props.movieList)
            }
        }
      }    
      
    componentDidMount(){           
            if(this.props.isLogged){
                this.props.fetchMovies(this.props.token)
                this.setState(this.props.movieList)
            }          
    }

    render(){
        let movieLST =null;
        let moviesSpinner = null;

        if (this.props.movieList !=null){
            movieLST = this.props.movieList.map( (movie) => <li key={movie.id}>{movie.title}</li> )
        }    
        
        if (this.props.moviesLoading){
            moviesSpinner = (<Spinner animation="border" />)
        }
        
        return(
            <div>
                <h1>Movies Page</h1> 
                     {movieLST}   
                     {moviesSpinner}
            <p></p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLogged: state.isLogged.isLoggedIn,
        movieList:state.isLogged.movies,
        token:state.isLogged.token,
        moviesLoading:state.isLogged.moviesLoading
    }
}

export default connect(mapStateToProps, actions)(Movies)