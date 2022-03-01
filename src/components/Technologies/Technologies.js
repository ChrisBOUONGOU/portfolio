import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
    <Section id="tech">
        <SectionDivider />
        <SectionTitle>Compétences techniques</SectionTitle>
        <SectionText>
            J&apos;ai travaillé avec une gamme de technologies dans le monde
            du développement Web. Du Front-End au Design
        </SectionText>
        <List>
            <ListItem>
                <DiReact size='3rem' />
                <ListContainer>
                    <ListTitle>Front-End</ListTitle>
                    <ListParagraph>
                        Expériences avec <br />
                        React, Vue, Angular, Next
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiFirebase size='3rem' />
                <ListContainer>
                    <ListTitle>Back-End</ListTitle>
                    <ListParagraph>
                        Expériences avec <br />
                        Symfony, Express
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiZend size='3rem' />
                <ListContainer>
                    <ListTitle>UI/UX</ListTitle>
                    <ListParagraph>
                        Expériences avec <br />
                        des outils comme Figma, Illustrator
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
);

export default Technologies;
