import React from 'react'
import {
    TextField,
} from '@material-ui/core'
import {
    makeStyles
} from '@material-ui/core/styles'

const useStyles = makeStyles({
    inputLabel: {
        background: 'white'
    }
})

const TextArea = (props) => {
    const { disabled, label, value, onChange, rows } = props;
    const classes = useStyles()
    return (
        <TextField
            label={label ? label : ''}
            fullWidth
            value={ value ? value : '' }
            onChange={ onChange ? onChange : false }
            margin="normal"
            variant="outlined"
            InputLabelProps={{
                shrink: true,
                className:classes.inputLabel
            }}
            multiline={true}
            rows={ rows ? rows : 4 }
            rowsMax={ rows ? rows : 4}
            disabled={disabled}
            {...props}
        />
    )
}

export default TextArea