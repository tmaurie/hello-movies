import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import AppNavDrawer from '../components/AppNavDrawer';
import injectTapEventPlugin from 'react-tap-event-plugin';
import EventEmitter from 'events'

injectTapEventPlugin();

class App extends Component {

    constructor(props){
        super(props);
        this.emitter = new EventEmitter();
        this.state = {
            watchlist : [],
        };

        this.emitter.on('addToWatchList', (movie) => {


            this.setState({
                watchlist: [
                    ...this.state.watchlist,
                    movie
                ]
            });
            setTimeout(this.saveWatchlist.bind(this), 0)
        })
    }


    saveWatchlist() {
        localStorage.setItem('watchlist', JSON.stringify(this.state.watchlist))
    }
    loadWatchlist() {
        const savedWatchlist = localStorage.getItem('watchlist');
        if (savedWatchlist) {
            this.setState({
                watchlist: JSON.parse(savedWatchlist)
            })
        }
    }
    componentDidMount() {
        this.loadWatchlist();

        fetch(`https://api.themoviedb.org/3${'/genre/movie/list'}?api_key=${process.env.TMDB_API_KEY}`)
            .then(r => r.json())
    }

    render() {


        return (

            <MuiThemeProvider>
                <div className="App">

                    <AppNavDrawer/>

                    {this.props.children}

                    <br/>
                </div>


            </MuiThemeProvider>
        );
    }
}

export default App;
