/* exports.createPages = async ({actions, graphql}) => {
    const {data} = await graphql`
        query {
            allMdx(sort: {fields: frontmatter___date, order: DESC}) {
                edges {
                    node {
                        frontmatter {
                            slug
                        }
                        id
                    }
                }
            }
        }
    `
    //* Create paginated pages for posts
    const postPerPage = 3;
    const totalNumOfPages = Math.ceil(data.allMdx.edge.length / postPerPage)
    Array.from({lenght: totalNumOfPages}).forEach((_, pageIndex) => {
        actions.createPages({
            path: i === 0 ? '/' : `/${pageIndex + 1}`,
            component: require.resolve("./src/templates/allPosts.js"),
            context: {
                limit: postPerPage,
                skip: pageIndex * totalNumOfPages,
                totalNumOfPages,
                currentPage: pageIndex + 1
            }
        })
    });

    //* Create single blog post
    data.allMdx.edges.forEach( edge => {
        const slug = edge.node.frontmatter.slug;
        const id = edge.node.id;
        actions.createPages({
            path: slug,
            component: require.resolve('./src/templates/singlePost.js'),
            context: {id}
        })
    });
};   */