import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    thumbnail: {
        width: '100%',
        height: 'auto',
    }
})

const Thumbnail = (props) => {
    const classes = useStyles();
    const {
        src,
    } = props;

    return (
        <img
            src={src}
            alt="logo" 
            className={classes.thumbnail}
            {...props}
        />
    )
}

export default Thumbnail;