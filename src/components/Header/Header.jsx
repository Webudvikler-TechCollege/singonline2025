import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png';
import { HeaderContainer } from './Header.style'

export const Header = ({ area }) => {
  return (
	<HeaderContainer $area={area}>
		<Link to="/"><img src={Logo} alt="SingOnline" /></Link>
	</HeaderContainer>
  )
}