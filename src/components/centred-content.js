import styled from 'preact-emotion';
import { media } from '../styles/danharris-io.theme';

/**
 * style wrappers
 */
export const CentredContent = styled('div')`
  margin: auto auto;

  ${media.md`
    width: 700px;
  `};
`;
