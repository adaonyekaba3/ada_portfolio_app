import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span} from './HeaderStyles';

const Header = () =>  (
  <div>
    <Container>
      <Div1>
        <Link href="/">
          <a style={{display: "flex", alignItems: "center", color: "white", marginBottom: 20}}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#about">
            <NavLink>About Me</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#technologies">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com">
         <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://linkedin.com">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillMail size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  </div>
);

export default Header;
