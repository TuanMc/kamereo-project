import React, {
    useState,
    useEffect
} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import PageHeader from '../../components/PageHeader';
import {
    Grid,
    Card,
    CardContent,
    Dialog,
    DialogTitle,
    DialogContent
} from "@material-ui/core";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import TextArea from '../../components/TextArea';
import CustomCheckbox from '../../components/CustomCheckBox';
import CustomButton from '../../components/CustomButton';
import Thumbnail from '../../components/Thumbnail';
import StoreLogo from '../../assets/images/StoreLogo.png';

const useStyles = makeStyles(theme => ({
    storeInfo: {
        maxWidth: 375,
    },
    defaultMessage: {
        width: '100%',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    checkBoxArea: {
        paddingTop: '5px'
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
    buttonEditProfile: {
        width: '100%',
        backgroundColor: '#E8EBF3',
    },
    buttonUpdate: {
        width: '20%',
        backgroundColor: '#E8EBF3',
    },
}));

const StoreInfo = () => {
    const classes = useStyles();
    const [openEditModal, setOpenEditModal] = useState(false);

    const handleOpenEditModal = () => {
        setOpenEditModal(true);
    }
    const handleCloseModal = () => {
        setOpenEditModal(false);
    }

    return (
        <>
            <Grid container spacing={3}>
                <Grid item md={12}>
                    <PageHeader title="Store Information" />
                </Grid>
                {/* Store Info section */}
                <Grid item md={4}>
                    <Card className={classes.storeInfo}>
                        <Thumbnail src={StoreLogo} />
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
                                        className={classes.buttonEditProfile}
                                    >
                                        Edit Profile
                                </CustomButton>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                {/* End Store Info section */}
                {/* Default message section */}
                <Grid item md={8}>
                    <Card className={classes.defaultMessage}>
                        <CardContent>
                            <p>DELIVERY DEFAUL MESSAGE</p>
                            <Grid container>
                                <Grid item md={1} className={classes.checkBoxArea}>
                                    <CustomCheckbox />
                                </Grid>
                                <Grid item md={11}>
                                    <TextArea
                                        placeholder="Write your message"
                                        rows={1}
                                    />
                                </Grid>

                                <Grid item md={1} className={classes.checkBoxArea}>
                                    <CustomCheckbox />
                                </Grid>
                                <Grid item md={11}>
                                    <TextArea
                                        placeholder="Write your message"
                                        rows={1}
                                    />
                                </Grid>

                                <Grid item md={1} className={classes.checkBoxArea}>
                                    <CustomCheckbox />
                                </Grid>
                                <Grid item md={11}>
                                    <TextArea
                                        placeholder="Write your message"
                                        rows={1}
                                    />
                                </Grid>

                                <Grid item md={1} className={classes.checkBoxArea}>
                                    <CustomCheckbox />
                                </Grid>
                                <Grid item md={11}>
                                    <TextArea
                                        placeholder="Write your message"
                                        rows={1}
                                    />
                                </Grid>
                                <Grid item md={12} className={classes.cardFooter}>
                                    <CustomButton className={classes.buttonUpdate}>Update</CustomButton>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                {/* End Default message section */}
            </Grid>
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
                    <Grid container>
                        <Grid item md={4}>
                            <h4>Store Image</h4>
                        </Grid>
                        <Grid item md={8}>
                            <h4>Basic Info.</h4>
                        </Grid>
                    </Grid>
                </DialogContent>

            </Dialog>
        </>
    )
}

export default StoreInfo;