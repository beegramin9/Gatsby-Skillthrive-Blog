import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

export const ButtonWrapper = styled(props => <Link {...props}/>)`
    padding: .5rem .75rem;
    background-color: ${props => props.theme.colors.main1};
    border-radius: .5rem;
    color: ${props => props.theme.colors.light1};
    font-weight: 700;
    font-size: 0.875rem;
    width: fit-content;
    transition: filter .3s ease;
    cursor: pointer;
    text-decoration: none;
    &:hover,
    &:focus {
        filter: brightness(110%)
    }
`