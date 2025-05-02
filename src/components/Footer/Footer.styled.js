import styled from 'styled-components'
import { Reset } from '../../styled/Mixins.styled'

export const FooterStyled = styled.footer`
	grid-area: ${props => props.$area};
	background-color: ${props => props.theme.colors.dark};
	display: grid;
	padding: 1rem 2rem;
	grid-template-columns: 4fr 4fr 4fr;
	font-size: 0.8rem;	

	h2 {
		font-size: 1rem;
		text-transform: uppercase;
		color: ${props => props.theme.colors.light};
		${ Reset }
	}

	address {
		font-style: normal;
	}

	svg {
		margin-right: 0.5rem;
	}	
`