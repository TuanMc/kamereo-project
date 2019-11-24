import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
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
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
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

const CustomSelect = (props) => {
    const classes = useStyles();
    const { label, name, value, options, onChange, id, disabled, error } = props;

    return (
        <FormControl fullWidth className={classes.margin}>
            <InputLabel shrink className={classes.inputLabel} htmlFor={id ? id : "custom-select"}>{label}</InputLabel>
            <NativeSelect
                id={id ? id : "custom-select"}
                name={name}
                value={value ? value : ''}
                onChange={onChange ? onChange : false}
                error={error}
                disabled={disabled}
                input={<BootstrapInput fullWidth />}
                {...props}
            >
                <option value="" />
                {
                    options.map(option => <option key={option} value={option}>{option}</option>)
                }
            </NativeSelect>
        </FormControl >
    )
}

export default CustomSelect;
