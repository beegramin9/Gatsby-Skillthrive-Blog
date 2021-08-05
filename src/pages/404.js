import React from 'react';
import { graphql } from 'gatsby';
import { Container, Post, FeatureImage } from '../components';
//! Component Export 에러는 해당 파일의 Component 뿐만 아니라 import 해서 불러온 다른 파일의 컴포넌트에서도 발생할 수 있다.
import { H1 } from '../styles';


export default function notFound({data}) {
    const featureImage = data.imageSharp.fixed
    return (
        <Container>
            <FeatureImage fixed={featureImage}/>
            <Post>
                <H1 textAlign="center" margin="0 0 1rem 0">
                    Uh-oh... What you're looking for couldn't be found😑
                </H1>
            </Post>
        </Container>
    )
}

export const notFoundQuery = graphql`
    query NotFoundQuery {
        imageSharp(fixed: {originalName: {eq: "sadCat.jpg"}}) {
            fixed (width: 1920, quality: 90) {
                ...GatsbyImageSharpFixed
            }
        }
    }
`