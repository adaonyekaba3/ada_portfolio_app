import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row no padding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm Ada.
      </SectionTitle>
      <SectionText>
        A biomedical engineer turned software development enthusiast.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com' }>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;