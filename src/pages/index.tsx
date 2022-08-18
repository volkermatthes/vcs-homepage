import styled from 'styled-components';
import Logo from '../images/vcs_logo.svg';

import { Stack } from '../components/Stack';
import { Footer } from '../components/Footer';
import { Container } from '../components/Container';

import Icon1 from '../images/icon_1.svg';
import Icon2 from '../images/icon_2.svg';
import Icon3 from '../images/icon_3.svg';
import '../base.css';
import React from 'react';

const StyledWrapper = styled.main`
  padding: 40px 24px 80px 24px;
`;

const StyledTitle = styled.h1`
  font-size: 40px;
  line-height: 56px;
  font-weight: 500;
`;

const StyledButton = styled.a`
  display: inline-flex;
  height: 54px;
  align-items: center;
  padding: 0 16px;
  font-size: 16px;
  background: var(--primary-300);
  border-radius: var(--border-radius);
  color: var(--white);
  text-decoration: none;
  &:hover {
    background: var(--primary-400);
  }
`;

const StyledParagraph = styled.p`
  color: var(--grey-200);
`;

const StyledHeaderImage = styled.div`
  width: 100%;
  height: 500px;
  background-image: url('/office_image.jpg');
  background-size: cover;
  background-position: center;
  border-radius: var(--border-radius);
  filter: drop-shadow(0px 20px 40px rgba(0, 0, 0, 0.25));
`;

const StyledInfoItem = styled.div`
  width: 33.33%;
  padding: 16px;
  display: flex;
  font-size: 26px;
  align-items: center;
  justify-content: center;
  height: 200px;
  border: 1px solid var(--grey-100);
  border-radius: var(--border-radius);
  flex-direction: column;
  gap: 16px;
  text-align: center;
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  border-radius: var(--border-radius);
`;

const StyledName = styled.div`
  font-weight: 500;
  font-size: 16px;
`;
const StyledPosition = styled.div`
  font-size: 14px;
`;

const StyledStack = styled(Stack)<{ bottom: number }>`
  margin-bottom: ${(props) => props.bottom}px;
  @media only screen and (max-width: 800px) {
    margin-bottom: 0;
  }
`;

export default function Home() {
  return (
    <React.Fragment>
      <StyledWrapper>
        <Container>
          <Logo />
          <Stack
            direction="row"
            spacing={24}
            alignItems="center"
            style={{ margin: `80px 0` }}
          >
            <Stack>
              <StyledTitle>
                Your all-in-one HR software – Create an engaging workplace for
                frontline workers
              </StyledTitle>
            </Stack>
            <Stack direction="column" spacing={0}>
              <StyledParagraph>
                Stress & frustiges Planen war gestern! Mit <b>gastromatic</b>
                {` `}
                wird die Dienstplanung zum Selbstläufer, der Wirtschaftlichkeit
                und Mitarbeiterzentrierung verbindet.
              </StyledParagraph>
              <StyledButton href="https://www.gastromatic.com" target="_blank">
                Get started
              </StyledButton>
            </Stack>
          </Stack>
          <StyledHeaderImage />
          <StyledTitle style={{ marginTop: `80px`, textAlign: `center` }}>
            About us
          </StyledTitle>
          <Stack direction="row" spacing={32}>
            <StyledInfoItem>
              <Icon1 />
              Founded in 2013
            </StyledInfoItem>
            <StyledInfoItem>
              <Icon2 />
              Located in Darmstadt
            </StyledInfoItem>
            <StyledInfoItem>
              <Icon3 />
              90 employees
            </StyledInfoItem>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            spacing={32}
            style={{ marginTop: `80px` }}
          >
            <Stack spacing={16} direction="column">
              <StyledStack direction="column" spacing={8} bottom={180}>
                <StyledImage src="/flo.jpg" alt="flo portrait" />
                <Stack direction="column" alignItems="flex-start" spacing={4}>
                  <StyledName>Florian Klima</StyledName>
                  <StyledPosition>CEO & Founder</StyledPosition>
                </Stack>
              </StyledStack>
            </Stack>
            <Stack spacing={16} direction="column">
              <Stack direction="column" spacing={8}>
                <StyledImage src="/patrick.jpg" alt="patrick portrait" />
                <Stack direction="column" alignItems="flex-start" spacing={4}>
                  <StyledName>Patrick Pötzsch</StyledName>
                  <StyledPosition>CEO & Founder</StyledPosition>
                </Stack>
              </Stack>
            </Stack>
            <Stack spacing={16} direction="column">
              <Stack direction="column" spacing={8}>
                <StyledImage src="/peter.jpg" alt="peter portrait" />
                <Stack direction="column" alignItems="flex-start" spacing={4}>
                  <StyledName>Peter Macherey</StyledName>
                  <StyledPosition>Founder</StyledPosition>
                </Stack>
              </Stack>
              <Stack direction="column" spacing={8}>
                <StyledImage src="/tristan.jpg" alt="tristan portrait" />
                <Stack direction="column" alignItems="flex-start" spacing={4}>
                  <StyledName>Tristan Reifert</StyledName>
                  <StyledPosition>Founder</StyledPosition>
                </Stack>
              </Stack>
            </Stack>
            <Stack spacing={16} direction="column">
              <StyledStack direction="column" spacing={8} bottom={80}>
                <StyledImage src="/dominik.jpg" alt="dominik portrait" />
                <Stack direction="column" alignItems="flex-start" spacing={4}>
                  <StyledName>Dominik Kantner</StyledName>
                  <StyledPosition>Founder</StyledPosition>
                </Stack>
              </StyledStack>
            </Stack>
          </Stack>
        </Container>
      </StyledWrapper>
      <Footer />
    </React.Fragment>
  );
}
