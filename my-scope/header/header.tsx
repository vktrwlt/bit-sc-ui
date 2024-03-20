import styled from 'styled-components';

import { typography, TypographyProps } from 'styled-system';

export type HeaderProps = TypographyProps;

export const Header = styled.div<HeaderProps>`
  ${typography}
`;
