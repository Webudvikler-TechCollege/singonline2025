import styled from "styled-components";

export const SongListItemContainer = styled.li`
	padding: 0.5rem;
	border-bottom: solid 1px aliceblue;
	list-style-type: none;
	display: grid;
	grid-template-columns: 5fr 5fr 2fr;

	&:hover {
		background-color: aliceblue;
	}

	div:last-child {
		text-align: right;

		a {
			margin-left: 0.5rem;
		}
	}

	* {
		//border: solid 1px #000;
	}
`