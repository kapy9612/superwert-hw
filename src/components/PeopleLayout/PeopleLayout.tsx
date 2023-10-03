import React, { ChangeEvent, useEffect, useState } from 'react';
import { Grid, Pagination, Typography } from '@mui/material';
import useSWR from 'swr';
import { getRequest } from '@/utils/requests';
import PersonCard from '@/components/PersonCard/PersonCard';
import { PeopleDataType } from '@/utils/types';
import FilterRow from '@/components/FilterRow/FilterRow';

function PeopleLayout() {
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(0);
    const [searchText, setSearchText] = useState('');
    const [searchKey, setSearchKey] = useState('');
    const [search, setSearch] = useState(false);

    const people = useSWR<PeopleDataType>(['people', page, searchKey], () =>
        getRequest(`https://swapi.dev/api/people`, {
            page: page,
            search: searchText,
        }),
    );

    useEffect(() => {
        if (people.data?.count) {
            setCount(Math.ceil(people.data?.count / 10));
        }
    }, [people.data]);

    useEffect(() => {
        if (search) {
            setPage(1);
            setSearchKey(searchText);
            setSearch(false);
        }
    }, [search]);

    if (people.error) {
        return <>An error occurred, please refresh the page.</>;
    }

    const handleChange = (_event: ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return (
        <>
            <Typography variant={'h2'}>Superwert SWAPI homework</Typography>
            <FilterRow
                searchText={searchText}
                setSearchText={setSearchText}
                setSearch={setSearch}
            />
            <Grid container spacing={2} columns={10}>
                {(people.isLoading
                    ? Array.from(new Array(10))
                    : people.data?.results!
                ).map((item: any, index: number) => (
                    <Grid item md={2} xl={2} key={index}>
                        <PersonCard
                            item={item}
                            media={`https://picsum.photos/id/${
                                index + 1
                            }/250/175`}
                        />
                    </Grid>
                ))}
            </Grid>
            <Pagination
                count={count}
                hideNextButton={people.data?.next === null}
                hidePrevButton={people.data?.previous === null}
                page={page}
                onChange={handleChange}
                disabled={people.isLoading}
            />
        </>
    );
}

export default PeopleLayout;
