import useSWR from 'swr';

import { getRequest } from '@/utils/requests';
import { PeopleDataType } from '@/utils/types';

export const usePeople = (
    page: number,
    searchKey: string,
    searchText: string,
) => {
    return useSWR<PeopleDataType>(['people', page, searchKey], () =>
        getRequest(`https://swapi.dev/api/people`, {
            page: page,
            search: searchText,
        }),
    );
};
