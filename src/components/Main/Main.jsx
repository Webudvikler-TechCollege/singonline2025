import { MainContainer } from './Main.style'

export const Main = ({ area, children }) => {
  return (
	<MainContainer $area={area}>
		{children}
	</MainContainer>
  )
}
