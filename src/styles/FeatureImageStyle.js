import styled from 'styled-components';

export const FeatureImageWrapper = styled.div`
    grid-column: 3 / span 10;
    grid-row: 2 / 6;
    overflow: hidden;
    position: relative; /* Image에 absolute position을 주기 위해서 */
    box-shadow: ${props => props.theme.shadows.shadow1};
    border-radius: 5px;
    @media ${props => props.theme.breakpoints.tablet} {
        /* grid-column: 2 / 8; */
    }
    @media ${props => props.theme.breakpoints.mobile} {
        /* grid-column: 2 / 8; */
    }
`