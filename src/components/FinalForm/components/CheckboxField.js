import React from 'react';
import { Checkbox } from 'semantic-ui-react';

export const CheckboxField = ({ input, meta }) => (
    <Checkbox        
        onChange={
            (event, value) => input.onChange(value)        
        }        
    />
)