/**
 * Created by tomo_ on 21/01/2017.
 */
import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import GridList from 'material-ui/GridList';
import Add from 'material-ui/svg-icons/content/add';
import FileDownload from 'material-ui/svg-icons/file/file-download';
import Favorite from 'material-ui/svg-icons/action/favorite';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';


//import {List, ListItem} from 'material-ui/List';

const style = {
    height: 'auto',
    marginTop : 250,
    width: 1200,
    padding:20,
    textAlign: 'center',
    display: 'inline-block',
    //backgroundColor:'#f2f2f2'
    backgroundColor:'#fff'
};

const styles = {
    chip: {
        margin: 4,
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',

    },
};

class ContentMain extends Component{

    render() {
        return(

        <div className="test">

            <Paper style={style} zDepth={1} rounded={false}>

                <GridList
                    cols={4}
                    padding={10}
                    cellHeight={'auto'}
                    style={{textAlign:'left'}}
                >
                    <Card>
                        <CardMedia overlay={<CardTitle title="Star Wars" subtitle="2015"/>} >
                            <img alt="" src='http://a.dilcdn.com/bl/wp-content/uploads/sites/6/2015/10/star-wars-force-awakens-official-poster.jpg' />
                        </CardMedia>
                        <CardActions showExpandableButton={true}>
                            <IconButton tooltip="Add to watchlist" ><Add /></IconButton>
                            <IconButton tooltip="Favorite" ><Favorite /></IconButton>
                            <IconButton tooltip="Links" ><FileDownload /></IconButton>
                        </CardActions>
                        <CardText expandable={true}>dzd</CardText>
                    </Card>


                    {/*<Chip style={styles.chip} labelStyle={{color: '#455A64'}}>*/}
                        {/*<Avatar size={32}> </Avatar>*/}
                        {/*Bon niveau*/}
                    {/*</Chip>*/}
                    {/*<Chip style={styles.chip} labelStyle={{color: '#455A64'}}>*/}
                        {/*<Avatar size={32}> </Avatar>*/}
                        {/*Courant*/}
                    {/*</Chip>*/}

                </GridList>
            </Paper>
        </div>
        );


    }
}
export default ContentMain;
