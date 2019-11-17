import React, {
    useState,
    useEffect
} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Card,
    CardContent,
} from "@material-ui/core";
import CustomButton from '../../../components/CustomButton';
import Thumbnail from '../../../components/Thumbnail';
import StoreLogo from '../../../assets/images/StoreLogo.png';

const useStyles = makeStyles(theme => ({
    storeInfo: {
        maxWidth: 375,
    },
    cardRow: {
        marginTop: '10px',
        marginBottom: '5px',
    },
    cardFooter: {
        paddingTop: '20px',
        paddingBottom: '20px',
    },
    cardLabel: {
        color: '#C2C4C7'
    },
}));

const CardStoreInfo = (props) => {
    const classes = useStyles();
    const { handleOpenEditModal } = props

    return (
        <Card className={classes.storeInfo}>
            <Thumbnail
                src={StoreLogo}
                style={{
                    padding: '20px 10px',
                }}
            />
            <CardContent>
                {/* Basic info section */}
                <Grid container>
                    <Grid item md={12}>
                        <b>STORE INFO.</b>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid container className={classes.cardRow}>
                        <Grid item md={5}>
                            <span className={classes.cardLabel}>Name:</span>
                        </Grid>
                        <Grid item md={7}>
                            <span>K.O.I Thé.</span>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.cardRow}>
                        <Grid item md={5}>
                            <span className={classes.cardLabel}>Address:</span>
                        </Grid>
                        <Grid item md={7}>
                            <span>521 Hồ Tùng Mậu, D1, HCM</span>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.cardRow}>
                        <Grid item md={5}>
                            <span className={classes.cardLabel}>Phone#:</span>
                        </Grid>
                        <Grid item md={7}>
                            <span>(388) 886-944</span>
                        </Grid>
                    </Grid>
                </Grid>
                {/* End Basic Info section */}
                {/* Red Invoice Info section */}
                <Grid container style={{ marginTop: 16 }}>
                    <Grid item md={12}>
                        <b>RED INVOICE INFO.</b>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid container className={classes.cardRow}>
                        <Grid item md={5}>
                            <span className={classes.cardLabel}>Company Name:</span>
                        </Grid>
                        <Grid item md={7}>
                            <span>K.O.I Thé International Company</span>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.cardRow}>
                        <Grid item md={5}>
                            <span className={classes.cardLabel}>Address:</span>
                        </Grid>
                        <Grid item md={7}>
                            <span>9682 Wakehurst Avenue Arlington Heights, IL 60004</span>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.cardRow}>
                        <Grid item md={5}>
                            <span className={classes.cardLabel}>MST:</span>
                        </Grid>
                        <Grid item md={7}>
                            <span>P77744944</span>
                        </Grid>
                    </Grid>

                </Grid>
                {/* End Red Invoice Info section */}
                <Grid container>
                    <Grid item md={12} className={classes.cardFooter}>
                        <CustomButton
                            onClick={() => handleOpenEditModal()}
                            style={{ width: '100%' }}
                        >
                            Edit Profile
                        </CustomButton>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default CardStoreInfo;
