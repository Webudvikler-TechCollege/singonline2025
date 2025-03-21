import { LoaderStyled } from './Loader.style'

export const Loader = () => {
    return (
        <LoaderStyled>
            <div className="spinner"></div>
            <p>Loading...</p>
        </LoaderStyled> 
    );
};