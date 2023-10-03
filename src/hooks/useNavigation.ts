import { useEffect, useState } from 'react';

import { PeopleDataType } from '@/utils/types';

export const useNavigation = (data: PeopleDataType) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (data?.count) {
            setCount(Math.ceil(data?.count / 10));
        }
    }, [data]);

    return {
        count,
    };
};
