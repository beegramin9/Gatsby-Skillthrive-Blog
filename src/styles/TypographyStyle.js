import styled from "styled-components";


/* Seems like it'd be cleaner if above are specified objects for font sizes, 
line height and other sizes ie. 
`const fontSizes = { medium: "1.125rem", small: "1rem", xSmall: "0.875rem",  
"default": "1.125rem" }` and accessed with 
`font-size: ${props => fontSizes[props.size] || fontSizes["default"]}`.
Just alternative. */

const fontSizes = { medium: "1.125rem", small: "1rem", 
                    xSmall: "0.875rem", default: "1.125rem"}
const lineHeight = { medium: "1.4375rem", small: "1.375rem", 
                    xSmall: "1.125rem", default: "1.4375rem"}

export const P = styled.p`
    margin: ${props => props.margin? props.margin : 0};
    font-size : ${props => fontSizes[props.size] || fontSizes['default']};
    line-height: ${props => lineHeight[props.size] || lineHeight['default']};;
    text-decoration: ${props => props.textDecoration ? props.textDecoration : "none"};
    //* gatsby-config에서 400, 700이란 특정 값을 import했기 때문에 사용가능
    font-weight: ${props => props.bold ? 700 : 400 };
    color: ${props => {
        const selectedColor = props.color ? props.color : 'dark1'
        return props.theme.colors[selectedColor]
    }};
    text-align: ${props => props.textAlign ? props.textAlign : 'none' };
`;

export const H1 = styled.h1`
    font-size: 2.25rem;
    line-height: 2.5rem;
    color: ${props => {
        const selectedColor = props.color ? props.color : 'dark1'
        return props.theme.colors[selectedColor]
    }};
    font-weight: 400;
    text-align: ${props => props.textAlign ? props.textAlign : 'none' };
    margin: ${props => props.margin? props.margin : 0};
`

export const H2 = styled.h2`
    font-size: 1.5rem;
    line-height: 1.875rem;
    color: ${props => {
        const selectedColor = props.color ? props.color : 'dark1'
        return props.theme.colors[selectedColor]
    }};
    font-weight: 400;
    text-align: ${props => props.textAlign ? props.textAlign : 'none' };
    margin: ${props => props.margin? props.margin : 0};
`