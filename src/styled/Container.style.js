import styled from 'styled-components'

export const ContainerStyle = styled.section`
border: solid 1px #000;
	background-color: ${props => props.theme.colors.light};
	width: 100%;
	min-height: 100vh;
	height: 100%;
	max-width: ${props => props.$maxwidth}px;
	margin: 0 auto;
	padding: 0rem 1rem;		
	overflow: auto;

	@media screen and (min-width: ${props => props.theme.grid.breakpoints.m}) {
		padding: 1.5rem 2.3rem 0 2.3rem;
	}

	@media print {
		overflow: visible;
	}		
`

