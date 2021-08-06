import React from 'react';
import { graphql } from 'gatsby';
import { Container, CardArray, Card, FeatureImage, Pagination, Seo } from '../components';
import { H1, P } from '../styles';
import { GrGatsbyjs } from "react-icons/gr";

const allPosts = ({pageContext, data}) => {
    const {currentPage, totalNumOfPages} = pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === totalNumOfPages;
    const prevPage = currentPage - 1 === 1? "/" : `/${currentPage - 1}`  
    const nextPage = `/${currentPage + 1}`
    const posts = data.allMdx.edges

    

    return (
        <Container>
            <Seo/>
            <FeatureImage/>
            <CardArray>
                <H1 textAlign="center" margin="1rem 0 2rem 0">
                    $Blog/Developer/Wontae
                </H1>
                <P textAlign="center" color='dark2'>
                    This blog is 🔨made⚡ with Gatsby
                    {'\u00A0'}<GrGatsbyjs size="1.125rem" color="#633194"/>{'\u00A0'}
                    <br/>
                    at <span style={{fontStyle: 'italic'}}>'$HOME/Wontae_Room'</span>{'\u00A0'}😄
                </P>
                {posts.map( post => 
                    (<Card
                    key={post.node.frontmatter.slug}
                    date={post.node.frontmatter.date}
                    title={post.node.frontmatter.title}
                    excerpt={post.node.frontmatter.excerpt}
                    slug={post.node.frontmatter.slug}
                    /* 앞에 페이지 떼고, 슬러그만 잘 들어오는데, 왜지? */
                    />)
                )}
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