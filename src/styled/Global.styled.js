import { createGlobalStyle } from "styled-components"
import { Reset } from "./Mixins.styled"
import { FormMixin } from "./Form.styled"

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		font-family: ${(props) => props.theme.fonts[0]};
		color: ${(props) => props.theme.colors.primary};
	}

	body {
		background-color: ${(props) => props.theme.colors.primary};
		${Reset};
	}

	h1 {
		color: ${(props) => props.theme.colors.primary};
		font-family: ${(props) => props.theme.fonts[0]};
		font-size: ${(props) => props.theme.fontsizes.l};
		margin-block: 0.8rem;
	}

	h2 {
		color: ${(props) => props.theme.colors.primary};
		font-family: ${(props) => props.theme.fonts[0]};
		font-size: 1.5rem;
		margin-block: 0rem;
		margin-bottom: 0rem;
	}

	h4 {
		color: ${(props) => props.theme.colors.primary};
		font-family: ${(props) => props.theme.fonts[0]};
		font-size: 1rem;
		margin-block: 0rem;
	}

	pre {
		font-family: ${(props) => props.theme.fonts[2]};
		font-size: 1.1rem;
	}	

	a {
		text-decoration: none;
		color: ${(props) => props.theme.colors.primary};
		
		&:hover {
			color: ${(props) => props.theme.colors.secondary};
		}
	}

	.back {
		font-size: 0.8rem;

	}

	${FormMixin}

	@media print {
		header, footer, nav, .back {
			display: none !important;
		}

		* {
			border: 0px none  !important;
		}
	}		

`
export { GlobalStyle, Reset }