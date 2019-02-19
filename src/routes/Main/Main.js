import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Header, Icon, Container, Button } from 'semantic-ui-react';

import { withFirebase } from '../../firebase';
import { withAuthentication } from '../../components/Session/Session';

import './Main.scss';

import DocumentsList from '../../components/DocumentsList/DocumentsList';

class Main extends Component {

    signOut = () => {
        const { firebase } = this.props;
        firebase.signOut();

    }

    render() {
        const { user } = this.props;

        return (
            <div className='route main-route' >
                <Container>
                    <Header as='h2' style={{ position: 'relative' }}>
                        <Icon name='home' />
                        <Header.Content>
                            Strona główna
                            <Header.Subheader>Strona główna demo aplikacji</Header.Subheader>
                        </Header.Content>
                        <div className='container-sign-out-button'>
                            <Link to='/document'>
                                <Button size='tiny' color='olive'>Dodaj dokument</Button>
                            </Link>
                            <Button size='tiny' onClick={this.signOut}>Wyloguj</Button>
                        </div>
                    </Header>
                    {user && <DocumentsList />}
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