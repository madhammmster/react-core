import React from 'react';
import { Checkbox } from 'semantic-ui-react';

const CheckboxFieldAdapter = ({ input, meta }) => (
    <Checkbox        
        onChange={
            (event, data) => {
                const {checked} = data;             
                input.onChange(checked)
            }        
        }        
    />
)

export default CheckboxFieldAdapter;