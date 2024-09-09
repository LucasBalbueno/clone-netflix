import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 6vh;
    background-color: #FFC107;
    display: flex;
    align-items: center;
    
    position: absolute;
    z-index: 3;
    top: 0;
    
    div {
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 0 5rem;

        p {
            font-weight: bold;
        }

        button {
            width: 2rem;
            background: none;
            border: none;
            cursor: pointer;
            font-weight: bold;
        }
    }
`;