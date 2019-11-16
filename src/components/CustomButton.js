import React from 'react'
import { makeStyles, Button } from '@material-ui/core'

const useStyles = makeStyles({
  button: {
    backgroundColor: '#E8EBF3',
  }
})

const CustomButton = (props) => {
  const classes = useStyles()

  return (
    <Button 
        variant="contained" 
        color="default" 
        size="large" 
        className={classes.button}
        {...props}
    >
        { props.children }
    </Button>
  )
}


export default CustomButton;