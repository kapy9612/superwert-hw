import React, { ChangeEvent, useEffect, useState } from 'react';

import { Grid, Pagination, Typography } from '@mui/material';

import FilterRow from '@/components/FilterRow/FilterRow';
import PersonCard from '@/components/PersonCard/PersonCard';
import { useNavigation } from '@/hooks/useNavigation';
import { usePeople } from '@/hooks/usePeople';
import { Person } from '@/utils/types';

function PeopleLayout() {
    const [page, setPage] = useState(1);
    const [searchText, setSearchText] = useState('');
    const [searchKey, setSearchKey] = useState('');
    const [isSearch, setIsSearch] = useState(false);

    const people = usePeople(page, searchKey, searchText);

    const { count } = useNavigation(people.data!);

    useEffect(() => {
        if (isSearch) {
            setPage(1);
            setSearchKey(searchText);
            setIsSearch(false);
        }
    }, [isSearch, searchText]);

    if (people.error) {
        return (
            <Typography>An error occurred, please refresh the page.</Typography>
        );
    }

    return (
        <>
            <Typography variant={'h2'}>Superwert SWAPI homework</Typography>
            <FilterRow
                searchText={searchText}
                setSearchText={setSearchText}
                setIsSearch={setIsSearch}
            />
            <Grid container spacing={2} columns={{ xs: 4, sm: 6, md: 10 }}>
                {(people.isLoading
                    ? Array.from(new Array(10))
                    : people.data?.results!
                ).map((item: Person, index: number) => (
                    <Grid item xs={2} key={index}>
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
                onChange={(_event: ChangeEvent<unknown>, value: number) => {
                    setPage(value);
                }}
                disabled={people.isLoading}
            />
        </>
    );
}

export default PeopleLayout;
