import { FunctionComponent, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { Stack } from './Stack';
import { Container } from './Container';

interface FooterProps extends HTMLAttributes<HTMLDivElement> {}

const StyledFooter = styled.footer`
  background: var(--grey-100);
  width: 100%;
  align-items: center;
  padding: 40px;
  font-size: 14px;
`;

const Footer: FunctionComponent<FooterProps> = ({ ...props }) => {
  return (
    <StyledFooter {...props}>
      <Container>
        <Stack direction="column" spacing={0}>
          <h4>Impressum</h4>
          <Stack direction="row" spacing={16}>
            <Stack direction="column" spacing={4} width="20%">
              <span>vertical cloud solution GmbH</span>
              <span>Kasinostraße 60</span>
              <span>64293 Darmstadt</span>
            </Stack>
            <Stack direction="column" spacing={4} width="20%">
              <span>Telefon: +49 6151 7877 744</span>
              <span>info@vc-solution.de</span>
            </Stack>
            <Stack direction="column" spacing={4} width="20%">
              <span>
                Inhaltlich verantwortlich nach § 6 MDStV: Patrick Pötzsch
              </span>
            </Stack>
            <Stack direction="column" spacing={4} width="20%">
              <span>Registergericht: </span>
              <span>Amtsgericht Darmstadt 3</span>
              <span>Handelsregister-Nummer: HR9256</span>
              Darmstadt
            </Stack>
            <Stack direction="column" spacing={4} width="20%">
              <span>USt-IdNr.: DE291460489</span>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </StyledFooter>
  );
};

export { Footer };
