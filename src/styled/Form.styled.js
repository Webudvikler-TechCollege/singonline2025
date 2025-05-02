import { css } from "styled-components";

export const FormMixin = css`
	form {
		div {
			margin-bottom: 0.8rem;
		}

		span {
			display: inline-block;
			vertical-align: top;
			color: red;
			margin-left: 0.5rem;
			margin-top: 0.5rem;
		}

	}

	label {
		display: inline-block;
		min-width: 8rem;
		padding-right: 0.5rem;
		padding-top: 0.5rem;
		vertical-align: top;
	}

	input, textarea, select {
		border: 1px solid rgba(90, 90, 90, 0.5);
		border-radius: 5px;
		height: 2.5rem;
		padding: 0.5rem;
		font-family: ${({ theme }) => theme.fonts[1]}
	}

	input, textarea {
		width: 80%;
		min-width: 300px;
		max-width: 600px;
	}

	textarea {
		min-height: 10rem;
	}

	/* Select box styling */
	select {
		appearance: none;
		background-color: #fff;
		border: 1px solid #ccc;
		padding: 0.6rem 2.5rem 0.6rem 1rem;
		font-size: 0.9rem;
		border-radius: 8px;
		outline: none;
		transition: border-color 0.3s ease, box-shadow 0.3s ease;
		background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 140 140' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='0,0 140,0 70,80' fill='%23666'/%3E%3C/svg%3E");
		background-repeat: no-repeat;
		background-position: right 1rem center;
		background-size: 0.8rem;
		cursor: pointer;

		&:focus {
	  		border-color: #888;
  			box-shadow: 0 0 0 3px rgba(100, 100, 255, 0.2);
		}
		
		&:disabled {
			background-color: #f5f5f5;
			color: #999;
			cursor: not-allowed;			
		}
	}

	.form-actions {
		margin-top: 1rem;
		margin-left: 8rem;
	}

	button {
		padding: 0.3rem;
		margin-right: 0.5rem;
		width: 100%;
		max-width: 8rem;
	}
`