import { InputStyled } from "./style";

export const Input = ({type, name, placeholderText, width, value, onChange}) => {
    return(
        <InputStyled
        type={type}
        name={name}
        placeholder={placeholderText}
        width={width}
        value={value}
        onChange={onChange}
      />
    )
}