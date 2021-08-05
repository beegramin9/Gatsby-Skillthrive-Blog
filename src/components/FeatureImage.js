import React from "react";
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from "gatsby";
import { FeatureImageWrapper } from "../styles";

export const FeatureImage = ({fixed}) => {
    const data = useStaticQuery(graphql`
        query {
            imageSharp( fixed: {originalName: {eq: "blog2.jpg"}}) {
                fixed (width: 2048, quality: 90) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    `)


    return (
        <FeatureImageWrapper>
            <Img fixed={fixed ? fixed : data.imageSharp.fixed}
                style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                }}/>
        </FeatureImageWrapper>
    )
}