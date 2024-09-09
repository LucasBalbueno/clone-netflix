import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
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