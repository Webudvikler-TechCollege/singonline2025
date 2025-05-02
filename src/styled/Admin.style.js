import styled from 'styled-components'

export const AdminTable = styled.table`
	width: 100%;
	border-left: solid 1px #000;
	border-right: solid 1px #000;
	border-top: solid 1px #000;
	border-spacing: 0px;
	font-size: 0.9rem;

	td, th {
		padding: 0.3rem;
	}

	th {
		background-color: #000;
		color: #fff;	
		font-weight: normal;
		text-align: left;
	}	

	td {
		border-bottom: solid 1px #000;
		color: black;
	}
`

export const AdminForm = styled.form`
	div {
		min-width: 20rem;
		max-width: 50rem;
		display: grid;
		grid-template-columns: 1fr;
		margin-bottom: 20px;

		@media screen and (min-width: ${props => props.theme.grid.breakpoints.m}) {
			grid-template-columns: 2fr 10fr;
		}

		input, select, textarea {
			width: 100%;
			padding: 5px;
			font-size: 1rem;
		}

		textarea {
			font-family: ${(props) => props.theme.fonts[2]};
			height: 400px;
		}
	}

`