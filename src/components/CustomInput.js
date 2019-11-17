import React from 'react'
import {
    fade,
    withStyles,
    makeStyles
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';


const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}))(InputBase);

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
    inputLabel: {
        color: '#C2C4C7'
    }
}));

const CustomInput = (props) => {
    const classes = useStyles();
    const { label, name, value, onChange, id, disabled, error } = props;

    return (
        <FormControl fullWidth className={classes.margin}>
            <InputLabel shrink className={classes.inputLabel} htmlFor={id ? id : 'bootstrap-input'}>
                {label}
            </InputLabel>
            <BootstrapInput
                id={id ? id : 'bootstrap-input'}
                name={name}
                fullWidth
                value={value ? value : ''}
                onChange={onChange ? onChange : false}
                disabled={disabled}
                error={error}
                {...props}
            />
        </FormControl>
    )
}

export default CustomInput;
