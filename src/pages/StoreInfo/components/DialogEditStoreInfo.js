/**
 * NOTES:
 * Address and City of red invoice will not have value or validation.
 */

import React, { useState, useEffect, useRef } from 'react'
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
    error: {
        fontSize: '12px',
        color: 'red',
        display: 'block',
        paddingLeft: '7px'
    },
}))

const errorList = {
    name: "",
    address: "",
    district: "",
    city: "",
    phone: "",
    redInvoice: {
        name: "",
        address: "",
        zipCode: "",
        taxCode: ""
    }
}

const DialogEditStoreInfo = (props) => {
    const classes = useStyles();
    const { originalData, openEditModal, handleCloseModal, handleUpdateStoreInfo } = props;
    const inputEl = useRef();
    const [districts, setDistricts] = useState(null);
    const [cities, setCities] = useState(null);
    const [errors, setErrors] = useState({});
    const [data, setData] = useState({
        id: "",
        logoUrl: "",
        name: "",
        address: "",
        district: "",
        city: "",
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
        setDistricts(["Quận 1", "Quận 2", "Quận 3", "Quận 4"]);
        setCities(["Hà Nội", "Tp.Hồ Chí Minh", "Đà Nẵng"]);
        setData(JSON.parse(JSON.stringify(originalData)))
        setErrors(JSON.parse(JSON.stringify(errorList)))
    }, [originalData, openEditModal])

    const handleChange = (event, key = null) => {
        const target = event.target
        const value = target.value
        const name = target.name

        let newFormData = { ...data }
        if (key !== null) {
            newFormData[key][name] = value
        } else {
            newFormData[name] = value
        }
        setData(newFormData)
    }

    const handleUploadClick = () => {
        inputEl.current.click();
    }

    const handleSaveClick = () => {
        if(handleValidation()) {
            handleUpdateStoreInfo(data);
            handleCloseModal();
        }
    }

    const handleValidation = () => {
        var error = JSON.parse(JSON.stringify(errorList));
        var isValid = true;

        for(let key in errors) {                                         // Validate Basic Info
            if (data[key] === "") {
                error[key] = "This field is required.";
                isValid = false;
            }
           
            if(key === "phone" && data[key] !== "") {                   // Phone validation
                if(!data[key].match(
                    /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/
                )) {
                    error[key] = "Incorrect format. Ex: (338) 886-9944"
                    isValid = false;
                }
            }
        }
        
        for(let key in errors.redInvoice) {                            // Validate Red Invoice
            if (data.redInvoice[key] === "") {
                error.redInvoice[key] = "This field is required.";
                isValid = false;
            }
        }

        setErrors(error);
        return isValid;
    }

    const handleRemove = () => {
        setData({
            ...data,
            logoUrl: ""
        })
    }

    const onLoadImage = (e) => {
        // Call axios to upload image to server
        // const formData = new FormData();
        // formData.append('image', e.target.files[0]);
        // const config = { headers: { 'content-type': 'multipart/form-data' } }		

        // try {
        // await axios.post(url, formData, config)
        // } catch (error) {
        // console.log(error.response)
        // }

        setData({
            ...data,
            logoUrl: URL.createObjectURL(e.target.files[0])
        })
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
                            src={data.logoUrl !== "" ? data.logoUrl : StoreLogo}
                            style={{
                                borderRadius: '20px',
                            }}
                        />
                        <Grid container style={{ marginTop: '20px' }}>
                            <Grid item md={2}></Grid>
                            <Grid item md={3}>
                                <Button
                                    className={classes.buttonRemove}
                                    onClick={handleRemove}
                                >
                                    Remove
                                    </Button>
                            </Grid>
                            <Grid item md={7}>
                                <input
                                    type="file"
                                    name="myImage"
                                    ref={inputEl}
                                    style={{ display: 'none' }}
                                    onChange={onLoadImage}
                                />
                                <CustomButton
                                    id='single'
                                    style={{ width: '100%' }}
                                    onClick={handleUploadClick}
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
                                <span className={classes.error}>{errors.name}</span>
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
                                <span className={classes.error}>{errors.address}</span>
                            </Grid>
                            <Grid item md={3}>
                                <CustomSelect
                                    id="district1"
                                    name="district"
                                    label="District"
                                    onChange={handleChange}
                                    value={data.district}
                                    options={districts}
                                />
                                <span className={classes.error}>{errors.district}</span>
                            </Grid>
                            <Grid item md={3}>
                                <CustomSelect
                                    id="city1"
                                    name="city"
                                    label="City"
                                    onChange={handleChange}
                                    value={data.city}
                                    options={cities}
                                />
                                <span className={classes.error}>{errors.city}</span>
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
                                <span className={classes.error}>{errors.phone}</span>
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
                                <span className={classes.error}>{errors.redInvoice && errors.redInvoice.name}</span>
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
                                <span className={classes.error}>{errors.redInvoice && errors.redInvoice.address}</span>
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
                                <span className={classes.error}>{errors.redInvoice && errors.redInvoice.taxCode}</span>
                            </Grid>
                        </Grid>

                        <Grid container style={{ marginTop: '20px' }}>
                            <Grid item md={12}>
                                <CustomButton
                                    style={{ backgroundColor: '#219249', color: "white" }}
                                    fullWidth
                                    onClick={handleSaveClick}
                                >
                                    Save
                                </CustomButton>
                            </Grid>
                            <Grid item md={12}>
                                <Button
                                    className={classes.buttonRemove}
                                    fullWidth
                                    style={{ margin: '0px' }}
                                    onClick={handleCloseModal}
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