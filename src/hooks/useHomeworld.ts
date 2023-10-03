import useSWR from 'swr';

import { getRequest } from '@/utils/requests';
import { Planet } from '@/utils/types';

export const useHomeworld = (homeWorld: string) => {
    return useSWR<Planet>(['homeWorld', homeWorld], () =>
        getRequest(homeWorld),
    );
};
