import React from 'react'

class MovieList extends React.Component{
    render(){
        return(
            <div className="movieList">
                <p style={{fontSize:18}}><b>{this.props.title}</b></p>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

export default MovieList;