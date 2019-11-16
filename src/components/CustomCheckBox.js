import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';


const CustomCheckbox = withStyles({
    root: {
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})(props => <Checkbox color="default" {...props} />);

export default CustomCheckbox;

