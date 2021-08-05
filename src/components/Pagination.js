import React from 'react';
import { PaginationWrapper, PaginationButton } from '../styles';

export const Pagination = ({isFirst, isLast, prevPage, nextPage}) => {
    return (
        <PaginationWrapper isFirst={isFirst} isLast={isLast}>
            <PaginationButton to={prevPage}>Previous Page</PaginationButton>
            <PaginationButton to={nextPage}>Next Page</PaginationButton>
        </PaginationWrapper>
    )
}