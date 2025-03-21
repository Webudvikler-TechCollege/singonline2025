import styled from 'styled-components'
import { Reset } from '../../Styled/Mixins.style'

export const FooterContainer = styled.footer`
	grid-area: ${props => props.$area};

	border-top: solid 1px ${props => props.theme.colors.primary};
	margin-top: 1rem;
	padding-bottom: 1.5rem;
	padding-top: 1.5rem;
	display: grid;
	grid-template-columns: 4fr 4fr 4fr;
	font-size: 0.8rem;	

	@media screen and (max-width: 1024px) {
		grid-template-columns: 6fr 6fr;
		grid-gap: 1rem;
	}

	@media screen and (width < 768px) {
		grid-template-columns: 12fr;
		grid-gap: 1rem;
	}

	h2 {
		font-size: 1rem;
		text-transform: uppercase;
		color: ${props => props.theme.colors.primary};
		${ Reset }
	}

	address {
		font-style: normal;
	}

	svg {
		margin-right: 0.5rem;
	}	
`