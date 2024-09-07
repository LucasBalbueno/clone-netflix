import styled from 'styled-components';

export const InputStyled = styled.input`
    padding: 1rem;
    color: rgb(172, 172, 172);
    background: transparent;
    border: 2px solid rgb(55, 55, 55);
    border-radius: 0.25rem;

    font-size: 17px;
    width: ${props => props.width};
    line-height: 1.5rem;

    &:focus {
        border-color: white;
        outline: none;
        transition: all .5s;
    }
`;