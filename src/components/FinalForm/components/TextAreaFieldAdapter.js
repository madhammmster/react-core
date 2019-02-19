import React from 'react';
import { TextArea } from 'semantic-ui-react';

const TextFieldAdapter = ({ input, meta, ...rest }) => {
    return (
        <TextArea
            {...rest}
            {...input}
            onChange={
                (event, data) => {
                    const { value } = data;
                    input.onChange(value);
                }
            }
        />
    )
}

export default TextFieldAdapter;