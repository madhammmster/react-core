import React from 'react';
import { Select, Form } from 'semantic-ui-react';

const SelectFieldAdapter = ({ input, meta, ...rest }) => {
    return (
        <Form.Field>
            <Select
                {...rest}
                {...input}
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

export default SelectFieldAdapter;