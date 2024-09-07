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
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 1;
    }

    > * {
        position: relative;
        z-index: 2;
    }
    `;

export const HeaderPaginaInicial = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 7rem;
    height: 15%;

    img {
        width: 15rem;
    }

    .buttonsHeader {
        display: flex;
        gap: 1rem;
    }

    .translatorHeader {
        background: transparent;
        border: 2px solid rgb(55, 55, 55);
        border-radius: 0.25rem;
        padding: 0.25rem 1rem;
        display: flex;
        align-items: center;
    }
    
    .translatorHeader img {
        width: 18px;
        height: 18px;
    }
    
    select {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
        border: none;
        background: transparent;
        color: white;
    }
    `;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 15%);
    
    
    .contentText {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: center;
        width: 50%;
        height: 60%;
        color: white;
    }
    
    h2 {
        font-size: 60px;
        font-weight: bold;
        line-height: 125%;
    }

    h3 {
        font-size: 20px;
        font-weight: bold;
    }

    .containerCadastro {
        display: flex;
        justify-content: center;
        gap: .5rem;
        margin-top: 1rem;
    }
`;