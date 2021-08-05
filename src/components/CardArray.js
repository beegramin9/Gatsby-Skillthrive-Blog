import React from 'react';
import {CardArrayWrapper} from '../styles';
import { H1, P} from '../styles';
export const CardArray = ({children}) => {
    return (
        <CardArrayWrapper>
            {children}
        </CardArrayWrapper>
    )
}

