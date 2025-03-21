import styled from "styled-components"
import { Reset } from "../../styled/Mixins.style"

export const LoginFormContainer = styled.div`
	background: #333;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	margin: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	
	form {
		background-color: ${props => props.theme.colors.light};
		border: 1px solid ${props => props.theme.colors.primary};
		border-radius: 0.5rem;
		padding: 2rem 3rem;

		.input-group {
			display: flex;
			padding: 0.5rem 0 0.5rem 0;
		}

		label {
			width: 7rem;
		}

		h3 {
			${Reset}
		}

		.error {
			display: block;
			font-size: 0.8rem;
			color: red;
		}
	} 
`
