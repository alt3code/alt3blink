import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';

var $ = require('jquery');

const buttonStyle = {
  margin: 12,
};

export default class SnackbarNote extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.findBlinkStick = this.findBlinkStick.bind(this);

  }

  findBlinkStick() {
      $.get(window.location.href + 'find', (data) => {
        this.setState({
            manufacturer:data.manufacturer,
            description:data.description,
            serialNumber:data.serialNumber,
            color:data.color,
            name:data.name,
            info2:data.info2
        });
      });
  }

  handleClick() {
    this.findBlinkStick();
    this.setState({
      open: true,
    });
  };

  handleRequestClose() {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
          <RaisedButton
              onClick={this.handleClick}
              label={this.props.name}
              primary={true}
              style={buttonStyle}
          />
          
          <Snackbar
              open={this.state.open}
              message={this.props.description + " " + this.state.name}
              autoHideDuration={4000}
              onRequestClose={this.handleRequestClose}
          />
      </div>
    );
  }
}
