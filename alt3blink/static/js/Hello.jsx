import React from "react";
import { Button, Grid, Row, Col } from "react-bootstrap";

var $ = require('jquery');

export default class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.doPythonBlink = this.doPythonBlink.bind(this);
    }

    doPythonBlink() {
      $.get(window.location.href + 'blink', (data) => {
        console.log("Blink!");
      });
    }

    render () {
        return (
            <Grid>
                <Row>
                    <Col md={7} mdOffset={5}>
                        <Button bsSize="large" bsStyle="danger" onClick={this.doPythonBlink}>
                            Blink!!
                        </Button>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
