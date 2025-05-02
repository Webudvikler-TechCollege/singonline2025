import styled from "styled-components"

export const LoginInfoStyled = styled.div`
	border-top: solid 1px #e4e4e4;
	margin-top: 2rem;
	margin-right: 1rem;
	font-size: ${props => props.theme.fontsizes.s};

    @media (max-width: ${({ theme }) => theme.grid.breakpoints.m}) {
		p {
			color: ${({ theme }) => theme.colors.light}
		}
	}
`