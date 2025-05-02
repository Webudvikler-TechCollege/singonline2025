import styled from 'styled-components'
import { Reset } from '../../styled/Mixins.styled'

export const IconButtonStyled = styled.button`
	${Reset};
	box-sizing: border-box;
	border: 1px solid rgba(0, 0, 0, 0.2);
	filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.25));
	border-radius: 299px;
	width: 2.5rem;
	height: 2.5rem;
	background-color: ${({ theme }) => theme.colors.light};
	cursor: pointer;
	margin-left: 0.5rem;

	img {
		margin-top: 0.1rem;
		width: 20px;
		height: 20px;
	}

	&:hover {
		background: ${(props) => props.theme.colors.secondary};
	}
`