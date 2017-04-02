import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import AppNavDrawer from './AppNavDrawer';
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();




class App extends Component {


    constructor(props) {
        super(props);
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
