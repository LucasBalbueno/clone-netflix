import styled from 'styled-components';

// SUBSTITUIR POR LINK REACT ROUTER
export const LinkStyled = styled.a`
    font-size: ${props => props.fontSize};
    width: ${props => props.width};
    background-color: rgb(229, 9, 20);
    border-radius: 0.25rem;
    padding: 0.75rem 1rem;
    font-weight: bold;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;