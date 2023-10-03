import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import { FilterRowType } from '@/utils/types';

const FilterRow = ({ searchText, setSearchText, setSearch }: FilterRowType) => {
    return (
        <Grid container spacing={2} columns={10} alignItems={'center'}>
            <Grid item xs={8}>
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
            <Grid item xs={1}>
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
            <Grid item xs={1}>
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
