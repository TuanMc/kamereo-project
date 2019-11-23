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
    const { originalData, openEditModal, handleCloseModal, handleUpdateStoreInfo } = props
    const [districts, setDistricts] = useState(null);
    const [cities, setCities] = useState(null);
    const [data, setData] = useState({
        id: "",
        logoUrl: "",
        name: "",
        address: "",
        district: {
            id: "",
            name: ""
        },
        city: {
            id: "",
            name: ""
        },
        phone: "",
        redInvoice: {
            name: "",
            address: "",
            district: "",
            city: "",
            zipCode: "",
            taxCode: ""
        }
    });

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
        setData(JSON.parse(JSON.stringify(originalData)))
    }, [openEditModal])

    const handleChange = (event, key = null) => {
        const target = event.target
        const value = event.value
        const name = target.name
        let newFormData = { ...data }
        if (key !== null) {
            newFormData[key][name] = value
        } else {
            newFormData[name] = value
        }
        setData(newFormData)
    }

    return (
        <Dialog
            open={openEditModal}
            onClose={handleCloseModal}
            maxWidth="md"
            fullWidth={true}
            aria-labelledby="scroll-dialog-title"
        >
            <DialogTitle id="scroll-dialog-title">
                <EditOutlinedIcon style={{ color: '#219249' }} /> <b> Edit Store Profile</b>
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
                                    id="name"
                                    name="name"
                                    label="Store Name"
                                    placeholder="Name"
                                    onChange={handleChange}
                                    value={data.name}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item md={6}>
                                <CustomInput
                                    id="address"
                                    name="address"
                                    label="Store Address"
                                    placeholder="Address"
                                    onChange={handleChange}
                                    value={data.address}
                                />
                            </Grid>
                            <Grid item md={3}>
                                <CustomSelect
                                    id="district1"
                                    name="district"
                                    label="District"
                                    onChange={handleChange}
                                    value={data.district && data.district.id}
                                    options={districts}
                                />
                            </Grid>
                            <Grid item md={3}>
                                <CustomSelect
                                    id="city1"
                                    name="city"
                                    label="City"
                                    onChange={handleChange}
                                    value={data.city && data.city.id}
                                    options={cities}
                                />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item md={12}>
                                <CustomInput
                                    id="phone"
                                    name="phone"
                                    label="Phone #"
                                    placeholder="Phone number"
                                    onChange={handleChange}
                                    value={data.phone}
                                />
                            </Grid>
                        </Grid>

                        <h4>RED INVOICE INFO.</h4>
                        <Grid container>
                            <Grid item md={12}>
                                <CustomInput
                                    id="redInvoice_name"
                                    name="name"
                                    label="Company Name"
                                    placeholder="Company Name"
                                    onChange={(e) => handleChange(e, 'redInvoice')}
                                    value={data.redInvoice && data.redInvoice.name}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item md={6}>
                                <CustomInput
                                    id="redInvoice_address"
                                    name="address"
                                    label="Store Address"
                                    placeholder="Address"
                                    onChange={(e) => handleChange(e, 'redInvoice')}
                                    value={data.redInvoice && data.redInvoice.address}
                                />
                            </Grid>
                            <Grid item md={3}>
                                <CustomSelect
                                    id="district2"
                                    name="district"
                                    label="District"
                                    onChange={(e) => handleChange(e, "redInvoice")}
                                    options={districts}
                                />
                            </Grid>
                            <Grid item md={3}>
                                <CustomSelect
                                    id="city2"
                                    name="city"
                                    label="City"
                                    onChange={(e) => handleChange(e, "redInvoice")}
                                    options={cities}
                                />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item md={12}>
                                <CustomInput
                                    id="redInvoice_tax_code"
                                    name="taxCode"
                                    label="MST"
                                    placeholder="Tax code"
                                    onChange={(e) => handleChange(e, 'redInvoice')}
                                    value={data.redInvoice && data.redInvoice.taxCode}
                                />
                            </Grid>
                        </Grid>

                        <Grid container style={{ marginTop: '20px' }}>
                            <Grid item md={12}>
                                <CustomButton
                                    style={{ backgroundColor: '#219249', color: "white" }}
                                    fullWidth
                                // onClick={handleUpdateStoreInfo}
                                >
                                    Save
                                </CustomButton>
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