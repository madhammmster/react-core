import React, { Component } from 'react';
import { Form as FinalForm, Field as FinalField } from 'react-final-form';
import { Form } from 'semantic-ui-react';
import { TextField } from '../../components/FinalForm/components/TextField';
import { CheckboxField } from '../../components/FinalForm/components/CheckboxField';

class App extends Component {

    handleSubmit = (values) => {
        console.log('values', values);
    }

    render() {
        return (
            <div className='route app-route' >
                <div>
                    Main Route
                </div>
                <br/>           <br/>           <br/>           
                <FinalForm
                    onSubmit={this.handleSubmit}
                    render={
                        ({ handleSubmit, submitting, pristine, form, values}) => (
                            <Form onSubmit={handleSubmit}>                                

                                <FinalField
                                    name='textField'
                                    component={TextField}
                                />

                                <FinalField 
                                    name='checkboxField'
                                    component={CheckboxField}
                                    label='test'
                                />

                                <div className="buttons">
                                    <button type="submit" disabled={submitting || pristine}>Submit</button>                                    
                                </div>

                                <pre>{JSON.stringify(values, 0, 2)}</pre>
                            </Form>
                        )
                    }
                />
            </div>
        );
    }
}


export default App;