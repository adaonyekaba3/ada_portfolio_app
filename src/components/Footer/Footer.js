import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { Section, SectionTitle } from '../../styles/GlobalComponents';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <Section>
        <SectionTitle>Contact me, I'm happy to connect.</SectionTitle>
      </Section>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel: 973-525-6930">973-525-6930</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:adaonyekaba3@gmail.com">adaonyekaba3@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>The world is my oyster. I will no longer be afraid! </Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://linkedin.com">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillMail size="3rem" />
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
