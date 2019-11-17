import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles';
import {
    Grid,
    Button,
    Dialog,
    DialogTitle,
    DialogContent
} from "@material-ui/core";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CustomButton from '../../../components/CustomButton';
import Thumbnail from '../../../components/Thumbnail';
import StoreLogo from '../../../assets/images/StoreLogo.png';
import CustomInput from '../../../components/CustomInput';
import CustomSelect from '../../../components/CustomSelect';

const useStyles = makeStyles(() => ({
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
    buttonRemove: {
        margin: 1
    },
    buttonUpload: {
        color: '#E8EBF3'
    }
}))

const DialogEditStoreInfo = (props) => {
    const classes = useStyles();
    const { openEditModal, handleCloseModal } = props
    const [districts, setDistricts] = useState(null);
    const [cities, setCities] = useState(null);

    useEffect(() => {
        setDistricts([
            {
                id: 1,
                value: "Quận 1"
            },
            {
                id: 2,
                value: "Quận 2"
            },
            {
                id: 3,
                value: "Quận 3"
            },
            {
                id: 4,
                value: "Quận 4"
            },
        ])

        setCities([
            {
                id: 1,
                value: "Hà Nội"
            },
            {
                id: 2,
                value: "TP.Hồ Chí Minh"
            },
        ])
    }, [])

    return (
        <Dialog
            open={openEditModal}
            onClose={handleCloseModal}
            maxWidth="md"
            fullWidth={true}
            aria-labelledby="scroll-dialog-title"
        >
            <DialogTitle id="scroll-dialog-title">
                <EditOutlinedIcon /> <b> Edit Store Profile</b>
            </DialogTitle>
            <DialogContent dividers={true}>
                <Grid container spacing={3}>
                    <Grid item md={5}>
                        <h4>STORE IMAGE</h4>
                        <Thumbnail
                            src={StoreLogo}
                            style={{
                                borderRadius: '20px',
                            }}
                        />
                        <Grid container style={{ marginTop: '20px' }}>
                            <Grid item md={2}></Grid>
                            <Grid item md={3}>
                                <Button
                                    className={classes.buttonRemove}
                                >
                                    Remove
                                    </Button>
                            </Grid>
                            <Grid item md={7}>
                                <CustomButton
                                    style={{ width: '100%' }}
                                >
                                    Upload Image
                                    </CustomButton>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={7}>
                        <h4>BASIC INFO.</h4>
                        <Grid container>
                            <Grid item md={12}>
                                <CustomInput
                                    label="Store Name"
                                    placeholder="Name"
                                    value="K.O.I Thé."
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item md={6}>
                                <CustomInput
                                    label="Store Address"
                                    placeholder="Address"
                                />
                            </Grid>
                            <Grid item md={3}>
                                <CustomSelect
                                    id="district1"
                                    name="district1"
                                    label="District"
                                    options={districts}
                                />
                            </Grid>
                            <Grid item md={3}>
                                <CustomSelect
                                    id="city1"
                                    name="city1"
                                    label="City"
                                    options={cities}
                                />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item md={12}>
                                <CustomInput
                                    label="Phone #"
                                    value="(338) 866-9944"
                                />
                            </Grid>
                        </Grid>

                        <h4>RED INVOICE INFO.</h4>
                        <Grid container>
                            <Grid item md={12}>
                                <CustomInput
                                    label="Company Name"
                                    value="K.O.I Thé International Company"
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item md={6}>
                                <CustomInput
                                    label="Store Address"
                                    placeholder="Address"
                                />
                            </Grid>
                            <Grid item md={3}>
                                <CustomSelect
                                    id="district2"
                                    name="district2"
                                    label="District"
                                    options={districts}
                                />
                            </Grid>
                            <Grid item md={3}>
                                <CustomSelect
                                    id="city2"
                                    name="city2"
                                    label="City"
                                    options={cities}
                                />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item md={12}>
                                <CustomInput
                                    label="MST"
                                    value="(338) 866-9944"
                                />
                            </Grid>
                        </Grid>

                        <Grid container style={{ marginTop: '20px' }}>
                            <Grid item md={12}>
                                <CustomButton fullWidth>Save</CustomButton>
                            </Grid>
                            <Grid item md={12}>
                                <Button
                                    className={classes.buttonRemove}
                                    fullWidth
                                    style={{ margin: '0px' }}
                                >
                                    Cancel
                                    </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    )
}

export default DialogEditStoreInfo;