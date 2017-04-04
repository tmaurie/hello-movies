import React, {Component} from 'react'
import Key from '../components/Key';
import SearchBox from '../components/SearchBox';
import ResultList from '../components/ResultList';
import RaisedButton from 'material-ui/RaisedButton'
import Loader from '../components/Loader'
import Trending from 'material-ui/svg-icons/action/trending-up'
import Stars from 'material-ui/svg-icons/action/stars'
import Help from 'material-ui/svg-icons/action/help';
import {browserHistory} from 'react-router'


let image_array = ["https://image.tmdb.org/t/p/w1440_and_h320_bestv2/49L0c5utmm0A4BkeDafM9BOhyBT.jpg", "https://image.tmdb.org/t/p/w1440_and_h320_bestv2/vA5xMglyZv7yzDTj1qUTU4OvelV.jpg", "https://image.tmdb.org/t/p/w1440_and_h320_bestv2/oRQ7INsPDVon7U2jphXDr7LSP3H.jpg", "https://image.tmdb.org/t/p/w1440_and_h320_bestv2/fSwYa5q2xRkBoOOjueLpkLf3N1m.jpg", "https://image.tmdb.org/t/p/w1440_and_h320_bestv2/b09vRh5oOda2REMlv9yiMxULRIt.jpg", "https://image.tmdb.org/t/p/w1440_and_h320_bestv2/4RvHJHSuQUKRzUx8h6a8VAxvbIE.jpg", "https://image.tmdb.org/t/p/w1440_and_h320_bestv2/d8duYyyC9J5T825Hg7grmaabfxQ.jpg", "https://image.tmdb.org/t/p/w1440_and_h320_bestv2/z5A5W3WYJc3UVEWljSGwdjDgQ0j.jpg"];
let test = Math.floor(Math.random() * image_array.length);
let image = image_array[test];


class MovieList extends Component {
    constructor(props) {
        super(props);
        this.getPopular();

        this.state = {
            //initialize (it is initialized to an empty array because things that depend on this.state.myList expect it to be an array)
            myList: [],
            myRandomMovie: '',
            ListLoaded: false
        }

    }

    getTopRated() {
        var querytoprated = 'https://api.themoviedb.org/3/movie/top_rated?';
        fetch(querytoprated + `&api_key=${Key}`)
            .then((response) => {
                response.json().then((json) => {
                    this.setState({myList: json.results})
                });
            });
    }

    getPopular() {
        var querypopular = 'https://api.themoviedb.org/3/movie/popular?';
        fetch(querypopular + `&api_key=${Key}`)
            .then((response) => {
                response.json().then((json) => {
                    this.setState({myList: json.results})
                });
            }).then(() => {
            this.setState({ListLoaded: true})
        });
    }


    getRandom() {

        let randomPage = Math.floor(Math.random() * 30);


        fetch('https://api.themoviedb.org/3/movie/popular?&api_key=' + Key + '&page=' + randomPage)
            .then((response) => {
                response.json().then((json) => {
                    this.setState({myRandomMovie: json});
                    this.gotorandom();
                });
            });

    }

    gotorandom() {
        let randomItem = Math.floor(Math.random() * 19);
        let randomId = this.state.myRandomMovie.results[randomItem].id;

        browserHistory.push(`/m/${randomId}`);
    }


    //need to add query
    searchResults(e) {

        const typedCharacter = e.target.value;
        var input = typedCharacter;
        var empty = [];

        if (input.length > 2) {
            var posterQuery = 'http://api.themoviedb.org/3/search/movie?query=';


            fetch(posterQuery + input + '&api_key=' + Key + '&append_to_response=images')
                .then((response) => {
                    response.json().then((json) => {
                        this.setState({myList: json.results})
                    });
                });
        }
        if (typedCharacter === '') {

            this.getPopular();

        }
        if (this.state.myList === empty) {
        }

    }

    render() {
        if (this.state.ListLoaded) {
            return (
                <div className="App-header" style={{backgroundImage: `url('${image}')`}}>
                    <SearchBox onChange={this.searchResults.bind(this)}/>
                    <br/>
                    <RaisedButton
                        backgroundColor={"#3f51b5"}
                        labelColor={"#fff"}
                        onTouchTap={() => this.getTopRated()}
                        label="Top Rated" style={{margin: 12}}
                        labelPosition="after"
                        icon={<Stars />}
                    />
                    <RaisedButton
                        backgroundColor={"#3f51b5"}
                        labelColor={"#fff"}
                        onTouchTap={() => this.getRandom()}
                        label="Get Me Random !"
                        style={{margin: 12}}
                        icon={<Help/>}
                    />
                    <RaisedButton
                        backgroundColor={"#3f51b5"}
                        labelColor={"#fff"}
                        onTouchTap={() => this.getPopular()}
                        label="Popular"
                        labelPosition="before"
                        icon={<Trending/>}
                        style={{margin: 12}}
                    />


                    <div className="test">


                        <ResultList className="result-list" list={this.state.myList}/>
                    </div>

                </div>
            )
        }
        else {
            return (
                <Loader/>
            )
        }
    }

}
export default MovieList;