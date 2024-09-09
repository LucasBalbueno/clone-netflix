import styled from 'styled-components';

import background from '../../../assets/images/background.jpg'

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 1;
    }

    > * {
        position: relative;
        z-index: 2;
    }
`;

export const HeaderLogin = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 7rem;
    height: 15%;

    img {
        width: 15rem;
    }
`;

export const ContainerLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Forms = styled.div`
    width: 30%;
    height: 70vh;
    background-color: rgba(0, 0, 0, 0.65);
    padding: 3rem 0;
    border-radius: 0.75rem 0.75rem 0 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .containerInputs {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
    
    h2 {
        font-size: 35px;
        font-weight: bold;
        color: white;
        margin: 0 0 1.5rem 3.5rem;
    }

    span {
        color: rgb(172, 172, 172);
    }

    .ButtonCode {
        background-color: rgba(172, 172, 172, 0.5);
        border-radius: 0.25rem;
        padding: 0.75rem 1rem;
        width: 73%;
        color: white;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
    }

    a {
        color: white;
    }

    .linkForgetPassword:hover {
        text-decoration: underline;
        color: rgb(172, 172, 172);
    }

    .chekboxInput {
        display: flex;
        color: white;
        margin: 1rem 0 0 4rem;

        > input {
            transform: scale(1.5);
            margin-right: 1rem;
        }
    }

    p {
        color: rgb(172, 172, 172);
        font-size: 13px;
        margin: 1rem 4rem 0 4rem;
    }

    p > a {
        color: blue;
    }

    p > a:hover {
        text-decoration: underline;
    }
`;