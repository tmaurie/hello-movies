/**
 * Created by tomo_ on 21/01/2017.
 */
import React , {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
const customStyle = {
    width: '20%',
    maxWidth: 'none',
};


class SignIn extends Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                labelStyle={{color:  "#fff"}}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                labelStyle={{color:  "#fff"}}
                onTouchTap={this.handleClose}
            />,
        ];

        return (
            <div>
                <RaisedButton backgroundColor="#fff" labelColor="#4285f4" label="Sign In" onTouchTap={this.handleOpen} />
                <Dialog

                    title="Sign In Form"
                    titleStyle={{color: "#fff",backgroundColor: "#3f51b5"}}
                    bodyStyle={{backgroundColor: "#3f51b5"}}
                    actionsContainerStyle={{backgroundColor: "#3f51b5"}}
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    contentStyle={customStyle}
                    onRequestClose={this.handleClose}
                >

                    <TextField
                        floatingLabelText="Username"
                        floatingLabelStyle={{color : "#fff"}}
                        underlineFocusStyle={{borderColor : '#fff'}}
                        inputStyle={{color : "#fff"}}
                    />
                    <TextField
                        floatingLabelText="Password"
                        floatingLabelStyle={{color : "#fff"}}
                        underlineFocusStyle={{borderColor : '#fff'}}
                        type="password"
                        inputStyle={{color : "#fff"}}

                    />
                    <TextField
                        floatingLabelText="Confirm Password"
                        floatingLabelStyle={{color : "#fff"}}
                        underlineFocusStyle={{borderColor : '#fff'}}
                        type="password"
                        inputStyle={{color : "#fff"}}

                    />
                </Dialog>

            </div>
        );
    }
}

export default SignIn;