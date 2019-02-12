import React from 'react';
import { Form as FinalForm, Field as FinalField } from 'react-final-form';
import { Button } from 'semantic-ui-react';

import TextFieldAdapter from '../../components/TextFieldAdapter';

import './RegisterForm.scss'

class RegisterForm extends React.Component {

    render() {
        const { onSubmit } = this.props;
        return (
            <FinalForm
                onSubmit={onSubmit}
                render={({ handleSubmit }) =>
                    (
                        <form className='register-form' onSubmit={handleSubmit}>
                            <div className='container-field'>
                                <FinalField
                                    name='email'
                                    placeholder='email'
                                    icon='user' 
                                    iconPosition='left'
                                    component={TextFieldAdapter}
                                />
                            </div>
                            <div className='container-field'>
                                <FinalField
                                    name='password'
                                    type='password'
                                    icon='key'
                                    iconPosition='left'
                                    placeholder='hasło'
                                    component={TextFieldAdapter}
                                />
                            </div>
                            <div className='container-field'>
                                <FinalField
                                    name='secondPassword'
                                    type='password'
                                    icon='key'
                                    iconPosition='left'
                                    placeholder='powtórz hasło'
                                    component={TextFieldAdapter}
                                />
                            </div>
                            <div className='container-login-button'>
                                <Button type='submit'  color='blue'>zarejestruj się</Button>
                            </div>
                        </form>
                    )
                }

            />


        )
    }
}

export default RegisterForm;