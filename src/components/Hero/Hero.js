import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle main center>
                Bienvenue dans <br />
                Mon portfolio personnel
            </SectionTitle>
            <SectionText>
                Développeur Full Stack
            </SectionText>
            <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
        </LeftSection>

    </Section>
);
export default Hero;