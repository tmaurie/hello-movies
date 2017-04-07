import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/pages/App';
import './app/pages/index.css';
import Details from  './app/pages/Details'
import Genres from  './app/pages/Genres'
import MovieList from './app/pages/MovieList'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'


ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={MovieList}/>
            <Route path="/m/:id" component={Details}/>
            <Route path="/g/:id" component={Genres}/>
        </Route>
    </Router>
), document.getElementById('root'));