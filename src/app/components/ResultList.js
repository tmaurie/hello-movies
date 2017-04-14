import React from 'react';
import GridList from 'material-ui/GridList';
import Add from 'material-ui/svg-icons/content/add';
import FileDownload from 'material-ui/svg-icons/file/file-download';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import IconButton from 'material-ui/IconButton';
import fillerImage from '../../static/404.png'
import Paper from 'material-ui/Paper';
import { browserHistory } from 'react-router'


import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';


const style = {
    height: 'auto',
    marginTop : 200,
    width: 1200,
    padding:20,
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor:'#f2f2f2',

};

class ResultList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }

    _handleClick = (id) => {
        browserHistory.push(`/m/${id}`);
    };



    render() {



        let allTheListItems = this.props.list.map((movie) => {


            let poster = "https://image.tmdb.org/t/p/w300_and_h450_bestv2/" + movie.poster_path;
            let media = movie.media_type;
            let itemTitle;
            if (movie.poster_path === null) { poster = fillerImage }
            if (media === 'tv'){ itemTitle = movie.name;}
            else { itemTitle = movie.title;}

            return <Card>

                        <CardMedia  overlay={<CardTitle onTouchTap={() => {
                            this._handleClick(movie.id)
                        }} title={itemTitle} style={{cursor: 'pointer'}} subtitle={movie.release_date} />} >
                           <img alt="" src={poster} style={{cursor: "pointer"}}  />
                        </CardMedia>
                      <CardActions showExpandableButton={true}>
                          <IconButton tooltip="Add to watchlist" ><Add /></IconButton>
                          <IconButton tooltip="Seen" ><RemoveRedEye /></IconButton>
                          <IconButton tooltip="Links"><FileDownload /></IconButton>

                      </CardActions>
                      <CardText expandable={true}>{movie.overview}</CardText>
                  </Card>

                  ;

        });


        return (
            <Paper style={style} zDepth={1} rounded={false}>

            <GridList
                cols={4}
                padding={10}
                cellHeight={'auto'}
                style={{textAlign:'left'}}
            >

                {allTheListItems}
            </GridList>
            </Paper>
        )
    }
}

ResultList.contextTypes = {
    router: React.PropTypes.object
};

export default ResultList;