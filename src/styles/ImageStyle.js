import styled from 'styled-components';

export const FeatureImageWrapper = styled.div`
    grid-column: 3 / span 10;
    grid-row: 2 / 6;
    overflow: hidden;
    position: relative; /* Image에 absolute position을 주기 위해서 */

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 10;

    }
`