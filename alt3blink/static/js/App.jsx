import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SwipeTabs from './SwipeTabs';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <MuiThemeProvider>
                <SwipeTabs />
            </MuiThemeProvider>
        );
    }
}
