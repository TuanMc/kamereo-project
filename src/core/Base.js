import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Sidebar from './Sidebar';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../routes/Routes';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        paddingTop: theme.spacing(16),
        paddingRight: theme.spacing(4),
        paddingLeft: theme.spacing(4),
    },
    toolbar: theme.mixins.toolbar
}));

export default function Base() {
    const classes = useStyles();

    return (
        <Router>
            <div className={classes.root}>
                <CssBaseline />
                {/* Header */}
                <Header />
                {/* Sidebar */}
                <Sidebar />

                {/* Body section */}
                <div className={classes.content}>
                    <Routes />
                </div>
            </div>
        </Router>
    )
}
