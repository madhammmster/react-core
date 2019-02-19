import React from 'react';
import { Input, Form } from 'semantic-ui-react';

const TextFieldAdapter = ({ input, meta, ...rest }) => {    
    return (
        <Form.Field>
            <label>{rest.label}</label>
            <Input
                {...rest}
                {...input}
                label={undefined}
                onChange={
                    (event, data) => {
                        const { value } = data;
                        input.onChange(value);
                    }
                }
            />
        </Form.Field>
    )
}

export default TextFieldAdapter;