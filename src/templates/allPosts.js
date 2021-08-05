import React from 'react';
import { graphql } from 'gatsby';
import { Container, CardArray, Card, FeatureImage, Pagination } from '../components';
import { H1, P } from '../styles';

const allPosts = ({pageContext, data}) => {
    const {currentPage, totalNumOfPages} = pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === totalNumOfPages;
    const prevPage = currentPage - 1 === 1? "/" : `/${currentPage - 1}`  
    const nextPage = `/${currentPage + 1}`
    const posts = data.allMdx.edges

    return (
        <Container>
            <FeatureImage/>
            <CardArray>
                <H1 textAlign="center" margin="0 0 1rem 0">
                    What is Lorem Ipsum?
                </H1>
                <P textAlign="center" color='dark2'>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </P>
                {posts.map( post => (
                    <Card
                    key={post.node.frontmatter.slug}
                    date={post.node.frontmatter.date}
                    title={post.node.frontmatter.title}
                    excerpt={post.node.frontmatter.excerpt}
                    slug={post.node.frontmatter.slug}
                    />
                ))}
            </CardArray>
            <Pagination
            isFirst={isFirst}
            isLast={isLast}
            prevPage={prevPage}
            nextPage={nextPage}
            />
        </Container>
    )
}

export default allPosts;


export const pageQuery = graphql`
    query AllPostsQuery($skip: Int!, $limit: Int!) {
        allMdx(sort: {fields: frontmatter___date, order: DESC}, skip: $skip, limit: $limit) {
            edges {
                node {
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        slug
                        title
                        excerpt
                    }
                }
            }
        }
    }
`