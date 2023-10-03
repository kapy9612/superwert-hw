import React from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import { FilterRowType } from '@/utils/types';

const FilterRow = ({ searchText, setSearchText, setSearch }: FilterRowType) => {
    return (
        <Grid container spacing={2} columns={10} alignItems={'center'}>
            <Grid item xs={10} sm={6}>
                <TextField
                    id="outlined-basic"
                    label="Search in names"
                    variant="outlined"
                    size={'small'}
                    fullWidth
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </Grid>
            <Grid item xs={5} sm={2}>
                <Button
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    fullWidth
                    onClick={() => {
                        setSearchText('');
                        setSearch(true);
                    }}
                >
                    Delete
                </Button>
            </Grid>
            <Grid item xs={5} sm={2}>
                <Button
                    variant="contained"
                    endIcon={<SearchIcon />}
                    fullWidth
                    onClick={() => setSearch(true)}
                >
                    Search
                </Button>
            </Grid>
        </Grid>
    );
};

export default FilterRow;
