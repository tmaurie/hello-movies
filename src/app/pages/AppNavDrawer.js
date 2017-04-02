/**
 * Created by tomo_ on 18/01/2017.
 */
import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import SearchBox from './SearchBox';


//import Avatar from 'material-ui/Avatar'
import AutoComplete from 'material-ui/AutoComplete';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import LiveTV from 'material-ui/svg-icons/notification/live-tv';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import ContentPaste from 'material-ui/svg-icons/content/content-paste';
import Theaters from 'material-ui/svg-icons/action/theaters';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import RaisedButton from 'material-ui/RaisedButton';
import SignIn from  './SignIn'



class AppNavDrawer extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false};

    }

    handleToggle = () => this.setState({open: !this.state.open});



    render() {
        return(

        <div className="test">
        <AppBar
            style={{backgroundColor:'#3f51b5', boxShadow:"0px 1px 6px" }}
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
                    primaryText='Movies'
                    leftIcon={<Theaters />}
                    primaryTogglesNestedList={true}
                    nestedItems={[
                        <ListItem
                            primaryText="Genre1"
                            key="Genre1"
                            value="/Page"
                        />,
                    <ListItem
                        primaryText="Genre2"
                        key="Genre2"

                    />,
                        <ListItem
                            primaryText="Genre2"
                            key="Genre3"
                        />,

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