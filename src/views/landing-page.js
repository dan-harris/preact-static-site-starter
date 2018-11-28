/* eslint-disable react/prefer-stateless-function */
import { Component, React } from 'preact';
import { CentreLogo } from '../components/centre-logo';
import { CentredContent } from '../components/centred-content';
import { ContentWrapper } from '../components/content-wrapper';
import { theme } from '../styles/danharris-io.theme';

/**
 * landing page view
 */
export default class LandingApp extends Component {
	render() {
		return (
			<ContentWrapper theme={theme}>
				<CentredContent>
					{/* initial centred logo + links */}
					<CentreLogo />
				</CentredContent>
			</ContentWrapper>
		);
	}
}
