import React from 'react';
import './App.css';
import Layout from './components/layout/Layout'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/home/home';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Tos from './components/tos/Tos';
import Users from './components/users/Users';
import Movies from './components/movies/movies';
import Notfound from './components/404/404';

class App extends React.Component {    
  render() {
    return (
      <BrowserRouter>
        <div className="App">             
          <Layout>          
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/tos" exact component={Tos} />
              <Route path="/users" exact component={Users} />
              <Route path="/movies" exact component={Movies} />
              <Route component={Notfound} />
            </Switch>                        
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;