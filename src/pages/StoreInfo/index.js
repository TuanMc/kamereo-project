import React, {
    useState,
    useEffect
} from 'react'
import PageHeader from '../../components/PageHeader';
import {
    Grid,
} from "@material-ui/core";
import { connect } from 'react-redux';
import DialogEditStoreInfo from './components/DialogEditStoreInfo';
import CardDefaultMessage from './components/CardDefaultMessage';
import CardStoreInfo from './components/CardStoreInfo';

const StoreInfo = (props) => {
    const {
        storeInfo,
        errorMessage,
        onFetchStoreInfo,
        onUpdateStoreInfo
    } = props;
    const [openEditModal, setOpenEditModal] = useState(false);

    const handleOpenEditModal = () => {
        setOpenEditModal(true);
    }
    
    const handleCloseModal = () => {
        setOpenEditModal(false);
    }

    const handleUpdateStoreInfo = (formData) => {
        const update = JSON.parse(JSON.stringify(formData));
        onUpdateStoreInfo(update);
    }

    useEffect(() => {
        onFetchStoreInfo();
    }, [onFetchStoreInfo])

    useEffect(() => {
        if (errorMessage)
            alert(errorMessage)
    }, [errorMessage])

    return (
        <>
            <Grid container spacing={3}>
                <Grid item md={12}>
                    <PageHeader title="Store Information" />
                </Grid>
                {/* Store Info section */}
                <Grid item md={4}>
                    <CardStoreInfo handleOpenEditModal={handleOpenEditModal} data={storeInfo} />
                </Grid>
                {/* End Store Info section */}
                {/* Default message section */}
                <Grid item md={8}>
                    <CardDefaultMessage />
                </Grid>
                {/* End Default message section */}
            </Grid>

            <DialogEditStoreInfo
                originalData={storeInfo}
                openEditModal={openEditModal}
                handleCloseModal={handleCloseModal}
                handleUpdateStoreInfo={handleUpdateStoreInfo}
            />
        </>
    )
}

const mapStateToProps = states => {
    return {
        storeInfo: states.storeInfo.info,
        errorMessage: states.storeInfo.errorMessage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchStoreInfo: () => dispatch({ type: "STORE_INFO_FETCH_REQUESTED" }),
        onUpdateStoreInfo: (formData) => dispatch({ type: "STORE_INFO_UPDATE_REQUESTED", payload: formData })
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StoreInfo);