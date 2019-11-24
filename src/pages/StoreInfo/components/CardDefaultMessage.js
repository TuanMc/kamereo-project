import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Card,
    CardContent,
} from "@material-ui/core";
import TextArea from '../../../components/TextArea';
import CustomCheckbox from '../../../components/CustomCheckBox';
import CustomButton from '../../../components/CustomButton';

const useStyles = makeStyles(theme => ({
    defaultMessage: {
        width: '100%',
    },
    checkBoxArea: {
        paddingTop: '5px'
    },
    cardFooter: {
        paddingTop: '20px',
        paddingBottom: '20px',
    },
}));

const CardDefaultMessage = (props) => {
    const classes = useStyles();

    const handleChange = () => {}

    return (
        <Card className={classes.defaultMessage}>
            <CardContent>
                <p>DELIVERY DEFAUL MESSAGE</p>
                <Grid container>
                    <Grid item md={1} className={classes.checkBoxArea}>
                        <CustomCheckbox />
                    </Grid>
                    <Grid item md={11}>
                        <TextArea
                            id="text1"
                            name="text1"
                            placeholder="Write your message"
                            rows={1}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item md={1} className={classes.checkBoxArea}>
                        <CustomCheckbox />
                    </Grid>
                    <Grid item md={11}>
                        <TextArea
                            id="text2"
                            name="text2"
                            placeholder="Write your message"
                            rows={1}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item md={1} className={classes.checkBoxArea}>
                        <CustomCheckbox />
                    </Grid>
                    <Grid item md={11}>
                        <TextArea
                            id="text3"
                            name="text3"
                            placeholder="Write your message"
                            rows={1}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item md={1} className={classes.checkBoxArea}>
                        <CustomCheckbox />
                    </Grid>
                    <Grid item md={11}>
                        <TextArea
                            id="text4"
                            name="text4"
                            placeholder="Write your message"
                            rows={1}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item md={12} className={classes.cardFooter}>
                        <CustomButton
                            style={{ width: '20%' }}
                        >
                            Update
                        </CustomButton>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default CardDefaultMessage;
