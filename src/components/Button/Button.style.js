import styled from 'styled-components'
import { Reset } from '../../styled/Mixins.style'

export const ButtonContainer = styled.button`
	${Reset}
	background: ${(props) => props.theme.colors.primary};
	border: none;
	box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
	color: white;
	cursor: pointer;
	font-weight: bold;
	padding: 10px 20px;
	text-align: center;
	text-decoration: none;

	&:hover {
		background: ${(props) => props.theme.colors.secondary};
	}
`