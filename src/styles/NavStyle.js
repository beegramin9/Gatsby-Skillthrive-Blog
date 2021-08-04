import styled from "styled-components";

export const NavWrapper = styled.nav`
    grid-column: 2 / span 12; /* 2번 라인에서 시작해서 12칸 */
    grid-row: 1 / 2;
    display: flex;
    align-items: center;

    & img {
        height: 30px;
    }

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    }
`;