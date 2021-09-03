import React from 'react';
import { IconName } from "react-icons/ri";
import { DiCss3Full, DiFirebase, DiNodejs, DiNodejsSmall, DiPython, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Skills and Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of Technologies in the web development space from Back-end to Front-end Design.
      Add images icons of languages used: Python, C, React, Javascript, HTML5, css3, and Linux/Ubuntu.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="6rem" />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejsSmall size="6rem" />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size="6rem" />
        <ListContainer>
          <ListTitle>Python</ListTitle>
          <ListParagraph>
            Experience with <br />
            OOD and TDD
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCss3Full size="6rem" />
        <ListContainer>
          <ListTitle>css3</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML format content/ structure with React
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
