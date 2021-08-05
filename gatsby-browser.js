import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from './src/themes/theme';
import { MDXProvider } from '@mdx-js/react';
import { Table } from './src/components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body, html {
        font-family: ${props => props.theme.fonts.main};
        height: 100%;
        background-color: ${props => props.theme.colors.light};
    }
`

const components = {
    table: Table,
}

export const wrapRootElement = ({ element }) => (
    <MDXProvider components={components}>
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
                {element} {/* => will be the final React application */}
        </ThemeProvider>
    </MDXProvider>
);