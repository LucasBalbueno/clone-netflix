import { LinkStyled } from './style';

export const ButtonLogin = ({text, fontSize, width}) => {
    return (
        <LinkStyled fontSize={fontSize} width={width} >
            {text}
        </LinkStyled>
    )
};