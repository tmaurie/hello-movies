/**
 * Created by tomo_ on 23/02/2017.
 */
import React from 'react';
import TextField from 'material-ui/TextField'

class SearchBox extends React.Component {

    constructor(props){
        super(props);
        this.state = {value: ''};

    }

        render() {
        return (
            <TextField
                type="text"
                className="inputText"
                floatingLabelText="Enter a movie"
                inputStyle={{color: "#fff"}}
                floatingLabelStyle={{color: "#fff"}}
                floatingLabelFocusStyle={{color: "#3f51b5"}}
                underlineFocusStyle={{borderColor: "#3f51b5"}}
                onChange={(e) => this.props.onChange(e)}

            />
        )
    }
}
export default SearchBox;
