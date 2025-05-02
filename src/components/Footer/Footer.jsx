import { FooterStyled } from "./Footer.styled"

export const Footer = ({ area }) => {
  return (
    <FooterStyled $area={area}>
      <div>
        <h2>SingOnline</h2>
      </div>
    </FooterStyled>
  )
}
