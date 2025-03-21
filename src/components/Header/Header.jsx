import { Link } from 'react-router-dom'
import { HeaderContainer } from './Header.style'

export const Header = ({ area }) => {
  return (
	<HeaderContainer $area={area}>
		<Link to="/">SingOnline</Link>
	</HeaderContainer>
  )
}
