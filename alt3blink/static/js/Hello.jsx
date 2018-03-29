import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
var $ = require('jquery');

const paperStyle = {
  height: 500,
  width: 500,
  margin: 50,
  textAlign: 'center',
  display: 'inline-block',
};

const buttonStyle = {
  margin: 12,
};

export default class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.findBlinkStick = this.findBlinkStick.bind(this);
        this.doPythonBlink = this.doPythonBlink.bind(this);
    }

    findBlinkStick() {
        $.get(window.location.href + 'find', (data) => {
          console.log("Found" + data);
          this.setState({
              manufacturer:data.manufacturer,
              description:data.description,
              serialNumber:data.serialNumber,
              color:data.color,
              info1:data.info1,
              info2:data.info2
          });
        });
    }

    doPythonBlink() {
      $.get(window.location.href + 'blink', (data) => {
        console.log("Blink!" + data);
      });
    }

    render () {
        return (
            <MuiThemeProvider>
                <Paper style={paperStyle} zDepth={3}>
                    <RaisedButton label="Find BlinkStick" onClick={this.findBlinkStick} primary={true} style={buttonStyle}  />
                    <RaisedButton label="Blink" onClick={this.doPythonBlink} secondary={true} style={buttonStyle}  />
                    <p>Manufacturer: {this.state.manufacturer}</p>
                    <p>Description: {this.state.description}</p>
                    <p>Serial Number: {this.state.serialNumber}</p>
                    <p>Color: {this.state.color}</p>
                    <p>Info 1: {this.state.info1}</p>
                    <p>Info 2: {this.state.info2}</p>
                </Paper>
            </MuiThemeProvider>
        );
    }
}
