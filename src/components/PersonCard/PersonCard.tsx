import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Skeleton,
    Typography,
} from '@mui/material';
import CustomModal from '@/components/CustomModal/CustomModal';
import { PeopleCardType } from '@/utils/types';

const PersonCard = ({ media, item }: PeopleCardType) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Card
                variant="outlined"
                sx={{
                    maxWidth: 250,
                    width: '100%',
                    height: '100%',
                }}
                onClick={() => setOpen(true)}
            >
                {!item ? (
                    <>
                        <Skeleton
                            variant="rectangular"
                            width={250}
                            height={175}
                        />
                        <CardContent>
                            <Skeleton />
                        </CardContent>
                    </>
                ) : (
                    <>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={media}
                            title={item.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                {item.name}
                            </Typography>
                        </CardContent>
                    </>
                )}
            </Card>
            {open && <CustomModal open={open} setOpen={setOpen} {...item} />}
        </>
    );
};

export default PersonCard;
