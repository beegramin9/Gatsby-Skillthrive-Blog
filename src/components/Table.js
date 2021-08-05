import React from 'react';
import { TableWrapper } from '../styles';

export const Table = ({children}) => {
    return (
        <TableWrapper>
            <table>
                {children}
            </table>
        </TableWrapper>
    )
} 
//! MDX에게 기본 table 말고 이걸 쓰라고 말해야 한다.
//! gatsby-browser.js에서 가능하다.