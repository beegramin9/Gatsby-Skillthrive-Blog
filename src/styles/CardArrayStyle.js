import styled from "styled-components";

export const CardArrayWrapper = styled.main`
    grid-column: 4 / span 8;
    grid-row: 3 / span 5;
    background-color: ${props => props.theme.colors.light2};
    padding: ${props => 
    `${props.theme.spacings.Large} ${props.theme.spacings.xLarge}`};
    box-shadow: ${props => props.theme.shadows.shadow1};
    border-radius: 5px;
    position: relative;
    z-index: 10;
    
    @media ${props => props.theme.breakpoints.tablet} {
        padding: ${props => 
        `${props.theme.spacings.small} ${props.theme.spacings.medium}`};
    }
    @media ${props => props.theme.breakpoints.mobile} {
        padding: ${props => 
        `${props.theme.spacings.xxSmall} ${props.theme.spacings.xSmall}`};
    }
`
