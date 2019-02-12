import React from 'react';
import { Input } from 'semantic-ui-react';

const TextFieldAdapter = ({ input, meta, ...rest }) => {
    // console.log(rest);
    return (
        <Input
            placeholder={rest.placeholder}
            icon={rest.icon}
            iconPosition={rest.iconPosition}
            type={rest.type}
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