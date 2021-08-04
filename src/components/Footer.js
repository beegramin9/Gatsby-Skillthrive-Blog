import React from 'react';
import { useStaticQuery ,graphql} from 'gatsby';
import { FooterWrapper, FooterSocialWrapper , FooterSocialIcons } from '../styles';

export const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            portfolio: file(relativePath: {eq: "portfolio.svg"}) {
                publicURL
            }
            github: file(relativePath: {eq: "github.svg"}) {
                publicURL
            }
            instagram: file(relativePath: {eq: "instagram.svg"}) {
                publicURL
            }
            linkedin: file(relativePath: {eq: "linkedin.svg"}) {
                publicURL
            }
        }
    `)

    return (
        <FooterWrapper>
            <FooterSocialWrapper>
                <FooterSocialIcons>
                    <a href="https://www.wontaechoi.tech/" target="_blank" rel="noopener norefer">
                        <img src={data.portfolio.publicURL} alt="Portfolio logo"/>
                    </a>
                    <a href="https://github.com/beegramin9/" target="_blank" rel="noopener norefer">
                        <img src={data.github.publicURL} alt="Github logo"/>
                    </a>
                    <a href="https://www.instagram.com/beestron9/" target="_blank" rel="noopener norefer">
                        <img src={data.instagram.publicURL} alt="Instagram logo"/>
                    </a>
                    <a href="https://www.linkedin.com/in/wontae-choi-917259209" target="_blank" rel="noopener norefer">
                        <img src={data.linkedin.publicURL} alt="Linkedin logo"/>
                    </a>
                </FooterSocialIcons>
                <p>ⓒ 2021 Company. All right reserved</p>
            </FooterSocialWrapper>
        </FooterWrapper>
    )
}