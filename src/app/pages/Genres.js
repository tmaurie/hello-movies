import React, {Component} from 'react'
import Key from '../components/Key';
import ResultList from '../components/ResultList';
import Loader from '../components/Loader'


class Genres extends Component {
    constructor(props) {
        super(props);



        this.state = {
            //initialize (it is initialized to an empty array because things that depend on this.state.myList expect it to be an array)
            myList: [],
        };

        this.getMovieByGenre();

    }

    getMovieByGenre(){
        fetch('https://api.themoviedb.org/3/genre/' + this.props.params.id + '/movies?api_key='+ Key +'&language=en-US&include_adult=false&sort_by=created_at.asc')
            .then((response) => {
                response.json().then((json) => {
                    this.setState({myList: json.results});
                });
            }).then(() => {
            this.setState({ListLoaded: true})
        });
    }

    render() {
        if (this.state.ListLoaded) {
            return (
                 <ResultList className="result-list" list={this.state.myList}/>
            )
        }
        else {
            return (
                <Loader/>
            )
        }
    }

}
export default Genres;