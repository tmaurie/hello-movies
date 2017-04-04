import React from 'react'
import CircularProgress from 'material-ui/CircularProgress'

class Loader extends React.Component{

    render(){
        return(
            <CircularProgress style={{marginTop: 20}} size={80} thickness={5} color={"#fff"} />
        )
    }
}
export default Loader;