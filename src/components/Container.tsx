import { FunctionComponent, HTMLAttributes } from 'react';
import styled from 'styled-components';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

const StyledContainer = styled.div`
  width: 100%;
  @media (min-width: 1004px) {
    width: var(--container-width);
    margin: 0px auto;
  }
`;

const Container: FunctionComponent<ContainerProps> = ({
  children,
  ...rest
}) => {
  return <StyledContainer {...rest}>{children}</StyledContainer>;
};

export { Container };
