import styled from 'preact-emotion';
import { media } from '../styles/danharris-io.theme';

/**
 * outer content wrapper
 */
export const ContentWrapper = styled('div')`
  height: 100%;
  max-width: 100%;
  color: ${props => props.theme.color.white};

  ${media.xs`
    margin-left: 10px;
    margin-right: 10px;    
  `};
`;
