import React from 'react'
import Key from './Key'
import {Card, CardActions, CardHeader, CardText, CardTitle} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import GridList from 'material-ui/GridList';
import Loader from './Loader'
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

const style = {
    height: 'auto',
    marginTop: -20,
    width: 1200,
    padding:20,
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor:'#f2f2f2',

};

class Details extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            show: '',
            myCast: '',
            movieLoaded: false
        };


        fetch('http://api.themoviedb.org/3/movie/' + this.props.params.id + "?api_key=" + Key )
            .then((response) => {
                response.json().then((json) => {
                    this.setState({ show: json });
                });
            }).then(() => {
            this.setState({movieLoaded:true})
        });

        fetch('https://api.themoviedb.org/3/movie/' + this.props.params.id + "/credits?api_key=" + Key )
            .then((response) => {
                response.json().then((json) => {
                    this.setState({ myCast: json });
                });
            });


    }

    render(){

        if(this.state.movieLoaded){
        return(

                <div>
                    <div className="App-header" style={{backgroundImage: "url('https://image.tmdb.org/t/p/w1440_and_h320_bestv2" + this.state.show.backdrop_path + "')"}}>
                        <h1 style={{fontFamily: 'Yanone Kaffeesatz',fontSize: 100, textShadow: "2px 2px 10px rgba(0, 0, 0, 1)"}}>{this.state.show.title}</h1>

                    </div>
                    <Paper style={style} zDepth={1} rounded={false}>

                        <GridList
                            cols={2}
                            padding={10}
                            cellHeight={'auto'}
                            style={{textAlign:'left'}}
                        >
                            <img style={{boxShadow: '0px 0px 17px -1px rgba(0,0,0,0.75)'}} src={"https://image.tmdb.org/t/p/w500" + this.state.show.poster_path}/>
                            <Paper style={{padding: 0, backgroundColor:'#f2f2f2'}} zDepth={0}>
                                <Card style={{marginBottom: 8}}>
                                    <CardTitle title="Overview" />
                                    <CardText>
                                        {this.state.show.overview}
                                     </CardText>
                                </Card>


                                <Card style={{marginBottom: 8, display:'flex',flexWrap:'wrap'}}>
                                    <CardTitle title="Cast" />
                                    <CardText>
                                        <Chip style={{margin: 4}}>{this.state.myCast.cast[0].name} </Chip>
                                    </CardText>
                                </Card>
                            </Paper>
                        </GridList>

                    </Paper>

                </div>

        )
        }
        else {
            return(
                <Loader/>
            )
        }
    }
}


export default Details;
