import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useSWR from 'swr';
import { getRequest } from '@/utils/requests';
import { CircularProgress } from '@mui/material';
import { CustomModalType } from '@/utils/types';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const CustomModal = ({
    open,
    setOpen,
    name,
    height,
    mass,
    birth_year,
    films,
    homeworld,
}: CustomModalType) => {
    const homeworldData = useSWR<any>(['homeworld', homeworld], () =>
        getRequest(homeworld),
    );
    const handleClose = () => setOpen(false);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {name}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                    Height: {height}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                    Mass: {mass}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                    Birth year: {birth_year}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                    Film count: {films.length}
                </Typography>
                {homeworldData.isLoading && !homeworldData.error ? (
                    <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                        Homeworld data is loading...{' '}
                        <CircularProgress size={12} />
                    </Typography>
                ) : !homeworldData.error ? (
                    <>
                        <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                            Homeworld: {homeworldData.data?.name}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                            Homeworld terrain: {homeworldData.data?.terrain}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                            Homeworld climate: {homeworldData.data?.climate}
                        </Typography>
                    </>
                ) : (
                    <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                        Error when loading homeworld details.
                    </Typography>
                )}
            </Box>
        </Modal>
    );
};

export default CustomModal;
