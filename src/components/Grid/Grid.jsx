import { GridContainer } from './Grid.style';

export const Grid = props => {
	return (
		<GridContainer>
			{props.children}
		</GridContainer>
	);
}