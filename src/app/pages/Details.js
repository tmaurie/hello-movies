import React from 'react'
import Key from '../components/Key'
import {Card, CardText, CardTitle} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import GridList from 'material-ui/GridList';
import Loader from '../components/Loader'
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import Time from 'material-ui/svg-icons/device/access-time'
import Today from 'material-ui/svg-icons/action/today'

const style = {
    height: 'auto',
    marginTop: -20,
    width: 1200,
    padding: 20,
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: '#f2f2f2',

};

class Details extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            show: '',
            myCast: '',
            movieLoaded: false
        };

        fetch('http://api.themoviedb.org/3/movie/' + this.props.params.id + "?api_key=" + Key)
            .then((response) => {
                response.json().then((json) => {
                    this.setState({show: json});
                });
            }).then(() => {
            if (this.state.show.backdrop_path !== ""){
                this.setState({movieLoaded: true})
            }
        });

        fetch('https://api.themoviedb.org/3/movie/' + this.props.params.id + "/credits?api_key=" + Key)
            .then((response) => {
                response.json().then((json) => {
                    this.setState({myCast: json.cast});
                });
            });

        /*fetch({
            method: 'GET',
            headers:
                {
                    "Authorization": "",
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Origin': '',
                    'Host': 'api.t411.ai'
                },
            uri : "https://api.t411.ai",
            mode: 'cors',
        }).then((response) => {
            response.json().then((json) => {
                this.setState({myTorrent: json.cast});
            });
        });*/


    }

    render() {


        const m = this.state.show;
        const c = this.state.myCast;
        let time = m.runtime;
        let hours = Math.floor( time/ 60);
        let minutes = time % 60;

        if (this.state.movieLoaded) {
            return (

                <div>
                    <div className="App-header"
                         style={{backgroundImage: "url('https://image.tmdb.org/t/p/w1440_and_h320_bestv2" + m.backdrop_path + "')"}}>
                        <h1 style={{
                            fontFamily: 'Yanone Kaffeesatz',
                            fontSize: 100,
                            textShadow: "2px 2px 10px rgba(0, 0, 0, 1)"
                        }}>{m.title}</h1>

                    </div>
                    <Paper style={style} zDepth={1} rounded={false}>

                        <GridList
                            cols={2}
                            padding={10}
                            cellHeight={'auto'}
                            style={{textAlign: 'left'}}
                        >
                            <img alt="poster" style={{boxShadow: '0px 0px 17px -1px rgba(0,0,0,0.75)'}}
                                 src={"https://image.tmdb.org/t/p/w500" + m.poster_path}/>
                            <Paper style={{padding: 0, backgroundColor: '#f2f2f2'}} zDepth={0}>
                                <Card style={{marginBottom: 8}}>
                                    <CardTitle title="Overview"/>
                                    <CardText>
                                        {m.overview}
                                    </CardText>
                                </Card>

                                <Card style={{marginBottom: 8, display: 'flex', flexWrap: 'wrap'}}>
                                    <CardTitle title="Cast"/>
                                    <CardText style={{display: 'flex', flexWrap: 'wrap'}}>

                                        {c.slice(0, 8).map((c, i) => {
                                            return <Chip key={i} style={{margin: 4}}><Avatar
                                                src={"https://image.tmdb.org/t/p/w45" + c.profile_path}/>{c.name}</Chip>
                                        })}

                                    </CardText>

                                </Card>
                                <Card style={{marginBottom: 8, display: 'flex', flexWrap: 'wrap'}}>
                                    <CardTitle title="General Info"/>

                                    <CardText style={{display: 'flex', flexWrap: 'wrap'}}>

                                        Genres :
                                        {m.genres.map((g, i) => {
                                            return <Chip key={i} style={{margin: 4}}>{g.name}</Chip>
                                        })}

                                    </CardText>

                                    <CardText style={{display: 'flex', flexWrap: 'wrap'}}>
                                        <Today/>
                                        {m.release_date}
                                    </CardText>

                                    <CardText style={{display: 'flex', flexWrap: 'wrap'}}>
                                        <Time/>
                                        {hours} h {minutes} min
                                    </CardText>

                                </Card>
                            </Paper>
                        </GridList>

                    </Paper>

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


export default Details;
