import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

export function Seo({description, keywords, title, image, url, author}) {
    return (
        <StaticQuery
            query={detailsQuery}
            render={data => {
                const metaDescription = description || data.site.siteMetadata.description;
                const metaKeywords = keywords || ['gatsby blog', 'gatsby MDX blog']
                const metaTitle = title || data.site.siteMetadata.title;
                const metaImage = image || data.site.siteMetadata.image;
                const metaUrl = url || data.site.siteMetadata.url;
                const metaAuthor = author || data.site.siteMetadata.author;

                return (
                    <Helmet
                    title={title}
                    meta={[
                        {
                            name: 'description',
                            content: metaDescription
                        },
                        {
                            property: 'og:description',
                            content: metaDescription
                        },
                        {
                            property: 'og:title',
                            content: metaTitle
                        },
                        {
                            property: 'og:type',
                            content: 'website'
                        },
                        {
                            property: 'og:image',
                            content: metaImage
                        },
                        {
                            property: 'og:url',
                            content: metaUrl
                        },
                    ].concat(
                        metaKeywords && metaKeywords.lenght > 0 ? {
                            name: 'keywords',
                            content: metaKeywords.join(', ')
                        } : []
                    )}>

                    </Helmet>
                )
            }}
            >
            
        </StaticQuery>
    )
}

const detailsQuery = graphql`
    query DefaultSEOQuery {
        site {
            siteMetadata {
                title
                description
                author
                image
            }
        }
    }
`