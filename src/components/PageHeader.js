import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    text: {
        color: '#79BB90',
        fontWeight: "bold"
    },
    underline: {
        backgroundColor: '#219249',
        width: '50px',
        height: '2px',
        marginTop: '10px'
    }
}));

export default function PageHeader(props) {
    const classes = useStyles();
    const {
        title
    } = props

    return (
        <>
            <Typography
                variant="h5"
                className={classes.text}
            >
                {title}
            </Typography>
            <div className={classes.underline} />
        </>
    )
}
