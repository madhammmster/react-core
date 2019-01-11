import React, { Component } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';

class Fader extends Component {
    render() {        
        return (
            <Dimmer active={this.props.isVisible} >
                <Loader>Loading</Loader>
            </Dimmer>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isVisible: state.fader.isVisible
    }
}

export default connect(mapStateToProps)(Fader);
