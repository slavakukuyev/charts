import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'


export default class DataSourceIFrame extends Component {
    render() {
        return (
            <iframe width={"100%"} 
            height={"100%"} 
            src={"https://datastudio.google.com/embed/reporting/0B5FF6JBKbNJxOWItcWo2SVVVeGc/page/MjD"} 
            frameborder={0} 
            style={{"border":"0", position:"absolute", top:0, left:0,alignSelf:"center"}} 
            allowFullScreen />
        );
    }
}