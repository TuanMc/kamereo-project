import React, {
    useState,
    useEffect
} from 'react'
import PageHeader from '../../components/PageHeader';
import {
    Grid,
} from "@material-ui/core";
import DialogEditStoreInfo from './components/DialogEditStoreInfo';
import CardDefaultMessage from './components/CardDefaultMessage';
import CardStoreInfo from './components/CardStoreInfo';


const StoreInfo = () => {
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
                    <CardStoreInfo handleOpenEditModal={handleOpenEditModal} />
                </Grid>
                {/* End Store Info section */}
                {/* Default message section */}
                <Grid item md={8}>
                    <CardDefaultMessage />
                </Grid>
                {/* End Default message section */}
            </Grid>

            <DialogEditStoreInfo
                openEditModal={openEditModal}
                handleCloseModal={handleCloseModal}
            />
        </>
    )
}

export default StoreInfo;