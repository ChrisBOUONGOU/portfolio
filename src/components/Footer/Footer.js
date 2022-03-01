import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
    return (
        <FooterWrapper>
            <LinkList>
                <LinkColumn>
                    <LinkTitle>Téléphone</LinkTitle>
                    <LinkItem href="tel:0773380993">0773380993</LinkItem>
                </LinkColumn>
                <LinkColumn>
                    <LinkTitle>Email</LinkTitle>
                    <LinkItem href="mailto:chrisbouk@outlook.fr">chrisbouk@outlook.fr</LinkItem>
                </LinkColumn>
            </LinkList>
            <SocialIconsContainer>
                <CompanyContainer>
                    <Slogan>La curiosité précède le savoir</Slogan>
                </CompanyContainer>

                <SocialIcons href="https://github.com/ChrisBOUONGOU">
                    <AiFillGithub size="3rem" />
                </SocialIcons>
                <SocialIcons href="https://www.linkedin.com/in/chris-boukongou-265ab11ab/">
                    <AiFillLinkedin size="3rem" />
                </SocialIcons>
            </SocialIconsContainer>
        </FooterWrapper>
    );
};

export default Footer;
