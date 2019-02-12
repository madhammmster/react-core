import React, { Component } from 'react';
import { Header, Icon, Container, Button } from 'semantic-ui-react';

import { withFirebase } from '../../firebase';
import { withAuthentication } from '../../components/Session/Session';

import './Main.scss'

class Main extends Component {


    signOut = () => {
        const { firebase } = this.props;
        firebase.signOut();

    }

    render() {
        return (
            <div className='route main-route' >
                <Container>
                    <Header as='h2' style={{ position: 'relative' }}>
                        <Icon name='home' />
                        <Header.Content>
                            Main Route
                    <Header.Subheader>Main route in application</Header.Subheader>
                        </Header.Content>
                        <div className='container-sign-out-button'>
                            <Button onClick={this.signOut}>Wyloguj</Button>
                        </div>
                    </Header>


                </Container>
            </div>
        );
    }
}


export default withAuthentication(withFirebase(Main));