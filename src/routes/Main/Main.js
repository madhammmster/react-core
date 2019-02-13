import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Icon, Container, Button } from 'semantic-ui-react';

import { withFirebase } from '../../firebase';
import { withAuthentication } from '../../components/Session/Session';

import './Main.scss'

class Main extends Component {

    state = {
        data: []
    }

    componentDidUpdate() {
        const { user, firebase } = this.props;
        if (user) {

            firebase.database.collection('documents').doc(user.uid).collection('values')
                .onSnapshot((querySnapshot) => {
                    const data = [];
                    querySnapshot.forEach(function (doc) {
                        data.push(doc.data());
                    });
                    this.setState((state) => ({ ...state, data }))
                });
        }
    }

    signOut = () => {
        const { firebase } = this.props;
        firebase.signOut();

    }

    setDocument = () => {
        const { user, firebase } = this.props;
        firebase.database.collection('documents').doc(user.uid).collection('values').doc().set({
            test: 'test'
        })

    }

    render() {
        const { data } = this.state;
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

                    <Button onClick={this.setDocument}>dodaj dokument</Button>
                    {
                        data && data.map((doc) => {
                            return (
                                <div>{doc.test}</div>
                            )
                        })
                    }
                </Container>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.user.user
    }
}

export default withAuthentication(withFirebase(connect(mapStateToProps)(Main)));