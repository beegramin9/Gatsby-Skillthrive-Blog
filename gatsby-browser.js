//! gatsby-ssr.js와 gatsby-browser.js는 똑같아야 한다.
import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from './src/themes/theme';

import { MDXProvider } from '@mdx-js/react';
import { Table, Code } from './src/components';

import { preToCodeBlock } from "mdx-utils";
import "./language-tabs.css";

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
    pre: preProps => {
        const props = preToCodeBlock(preProps);
        // if there's a codeString and some props, we passed the test
        if (props) {
            return <Code {...props}/>
        }
        return <pre {...preProps}/>
    },
    wrapper: ({children}) => <>{children}</>
}

export const wrapRootElement = ({ element }) => (
    <MDXProvider components={components}>
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
                {element} {/* => will be the final React application */}
        </ThemeProvider>
    </MDXProvider>
);