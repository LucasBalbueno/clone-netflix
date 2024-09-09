import { LinkStyled } from './style';

export const ButtonLogin = ({to, text, fontSize, width}) => {
    return (
        <LinkStyled to={to} fontSize={fontSize} width={width} >
            {text}
        </LinkStyled>
    )
};