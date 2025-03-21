import styled from "styled-components";

export const GridContainer = styled.div`
	display: grid;
	height: 100vh;
	grid-template-columns: ${props => props.theme.grid.mobile.primary.columns};
	grid-template-rows: ${props => props.theme.grid.mobile.primary.rows};
	grid-template-areas: ${props => props.theme.grid.mobile.primary.areas} !important;

	@media screen and (min-width: ${props => props.theme.grid.breakpoints.m}) {
		grid-template-columns: ${props => props.theme.grid.tablet.primary.columns};
		grid-template-rows: ${props => props.theme.grid.tablet.primary.rows};
		grid-template-areas: ${props => props.theme.grid.tablet.primary.areas} !important;		
	}

	@media screen and (min-width: ${props => props.theme.grid.breakpoints.l}) {
		grid-template-columns: ${props => props.theme.grid.desktop.primary.columns};
		grid-template-rows: ${props => props.theme.grid.desktop.primary.rows};
		grid-template-areas: ${props => props.theme.grid.desktop.primary.areas} !important;		
	}

	@media print { 
		grid-template-columns: ${props => props.theme.grid.print.columns};
		grid-template-rows: ${props => props.theme.grid.print.rows};
		grid-template-areas: ${props => props.theme.grid.print.areas} !important;		
	}
`