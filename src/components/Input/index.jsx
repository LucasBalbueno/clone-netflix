import { InputStyled } from "./style";

export const Input = ({type, name, placeholderText}) => {
    return(
        <InputStyled type={type} name={name}  placeholder={placeholderText} />
    )
}