import { InputStyled } from "./style";

export const Input = ({type, name, placeholderText, width}) => {
    return(
        <InputStyled type={type} name={name}  placeholder={placeholderText} width={width} />
    )
}