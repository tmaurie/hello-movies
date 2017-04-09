/**
 * Created by tomo_ on 18/01/2017.
 */
import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import LiveTV from 'material-ui/svg-icons/notification/live-tv';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import ContentPaste from 'material-ui/svg-icons/content/content-paste';
import Theaters from 'material-ui/svg-icons/action/theaters';
import Home from 'material-ui/svg-icons/action/home';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import SignIn from  './SignIn'
import {browserHistory} from 'react-router'
import Key from './Key'

class AppNavDrawer extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false, genres : []};



        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=' + Key)
            .then((response) => {
                response.json().then((json) => {
                    this.setState({genres: json.genres});
                });
            });


    }

    handleToggle = () => this.setState({open: !this.state.open});


    goToGenres = (id) => {
        browserHistory.push(`/g/${id}`);
        window.location.reload();
        this.setState({open : false});
    };

    goHome = () => {
      browserHistory.push('/');
      this.setState({open : false});
    };

    render() {

        const g = this.state.genres;
        return(
        <div className="test">
        <AppBar
            title="Hello-Movies"
            style={{backgroundColor:'#3f51b5', boxShadow:"0px 1px 6px", textAlign:'left' }}
            iconElementLeft={<IconButton style={{iconHoverColor:'black'}} onTouchTap={this.handleToggle}><NavigationMenu /></IconButton>}
            iconElementRight={

                <SignIn />

            }>

        </AppBar>

        <Drawer
        docked={false}
        width={300}
        open={this.state.open}
        onRequestChange={(open) => this.setState({open})}
        >
        <AppBar
            showMenuIconButton={false}
            style={{backgroundColor:'#3f51b5'}}
        />
                <List style={{textAlign:'left'}}>
                <Subheader>Menu</Subheader>
                    <ListItem
                    primaryText='Home'
                    leftIcon={<Home/>}
                    onTouchTap={this.goHome}
                    />
                    <ListItem
                    primaryText='Movies'
                    leftIcon={<Theaters />}
                    primaryTogglesNestedList={true}
                    nestedItems={[

                        g.map((g, i) => {
                            return <ListItem key={i} primaryText={g.name} onTouchTap={() => {this.goToGenres(g.id)}}/>
                        })

                ]}
                />

                <ListItem primaryText='Series' leftIcon={<LiveTV />}/>
                <Divider />
                    <ListItem
                    primaryText="Watchlist"
                    leftIcon={<ContentPaste />}

                />
                <ListItem primaryText='Seen' leftIcon={<RemoveRedEye />} />


                </List>
        </Drawer>
</div>

        );
    }

}

export default AppNavDrawer;