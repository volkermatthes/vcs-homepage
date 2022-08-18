import { FunctionComponent, HTMLAttributes } from 'react';
import styled from 'styled-components';

interface StackProps extends HTMLAttributes<HTMLDivElement> {
  spacing?: number;
  direction?: 'row' | 'column';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
  width?: string;
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
}

const StyledStack = styled.div<StackProps>`
  display: flex;
  width: ${({ width }: StackProps): string => width};
  flex-direction: ${({ direction }: StackProps): string => direction};
  align-items: ${({ alignItems }: StackProps): string => alignItems};
  justify-content: ${({ justifyContent }: StackProps): string =>
    justifyContent};
  gap: ${({ spacing }: StackProps): number => (spacing ? spacing * 1 : 0)}px;
  @media only screen and (max-width: 800px) {
    flex-direction: column !important;
    width: 100% !important;
  }
`;

const Stack: FunctionComponent<StackProps> = ({ children, ...rest }) => {
  return <StyledStack {...rest}>{children}</StyledStack>;
};

Stack.defaultProps = {
  direction: `column`,
  spacing: 0,
  alignItems: `flex-start`,
  justifyContent: `flex-start`,
};

export { Stack };
