import { IconButtonStyled } from "./IconButton.styled"

export const IconButton = ({ icon, onClick, link, text }) => {  
  return (
    <IconButtonStyled as={link ? 'a' : 'button'} href={link} onClick={onClick}>
      <img src={icon} alt={text} />
    </IconButtonStyled>
  )
}
