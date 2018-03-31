import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import SnackbarNote from './SnackbarNote';

import '../css/SwipeTabs.css';

import run_color from './main.js';

var $ = require('jquery');

const styles = {
  slide: {
    padding: 10,
    margin: '0 auto'
  },
  paperStyle: {
      height: 500,
      width: 500,
      textAlign: 'center',
      display: 'inline-block',
      margin: '0 auto'
  }
};

const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
  const hex = x.toString(16)
  return hex.length === 1 ? '0' + hex : hex
}).join('')

export default class SwipeTabs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      color: "-"
    };
    this.handleChange = this.handleChange.bind(this);
    this.doPythonBlink = this.doPythonBlink.bind(this);
  }

  handleChange(value) {
    this.setState({
      slideIndex: value,
    });
  }

  doPythonBlink() {
    $.get(window.location.href + 'blink', (color) => {
      console.log("Blink color " + color);

      const cols = color.split(',');
      const textColor = run_color(cols[0], cols[1], cols[2]);
      const hex = rgbToHex(parseInt(cols[0]), parseInt(cols[1]), parseInt(cols[2]));
      console.log("Hex = " + hex)
      this.setState({
          color: hex,
          textColor: textColor
      });
    });
  }

  render() {
    return (
      <div>
          <Tabs
              onChange={this.handleChange}
              value={this.state.slideIndex}
          >
              <Tab label="Home" value={0} />
              <Tab label="Alarms" value={1} />
              <Tab label="Customise" value={2} />
          </Tabs>
          <SwipeableViews
              index={this.state.slideIndex}
              onChangeIndex={this.handleChange}
          >
              <div style={styles.slide}>
                  <Paper style={styles.paperStyle} zDepth={3}>
                      <SnackbarNote name="Find BlinkStick" description="Connected to" />
                      <RaisedButton label="Blink" onClick={this.doPythonBlink} secondary={true} />
                      <div className="color-div">
                          <div className="color-circle" style={{backgroundColor: this.state.color}}>
                              <p className="color-text" style={{color: this.state.textColor}}>Current Colour: </p>
                              </div>
                              </div>
                              </Paper>
                              </div>
              <div style={styles.slide}>
                  Alarms
              </div>
              <div style={styles.slide}>
                  Customise
              </div>
          </SwipeableViews>
      </div>
    );
  }
}
