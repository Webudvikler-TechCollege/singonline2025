import { ButtonContainer } from "./Button.style"

export const Button = ({children, event, type = 'submit'}) => {
	return (
		<ButtonContainer type={type} onClick={event}>
			{children}
		</ButtonContainer>
	)
}