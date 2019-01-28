import React from 'react';
import { Input } from 'semantic-ui-react';

export const TextField = ({ input, meta, ...rest }) => (
    <Input
        onChange={
            (event, value) => input.onChange(value)
        }
        placeholder='test'
    />
)