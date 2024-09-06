import styled from 'styled-components';

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgb(20, 20, 20);

    .footerContent {
        width: 60%;
    }

    .redesSociais{
        margin: 2rem 0 .5rem 0;

        svg {
            margin-right: 2rem;

        }
    }

    .listaLinks{
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
        font-size: 13px;

        li {
            margin: .8rem 0;
        }
    }

    .codeService {
        border: 2px solid rgb(123, 123, 123);;
        padding: 0.5rem;
        margin: 1rem 0 1rem 0;
        font-size: 13px;
    }

    .textFooter {
        margin: 1.5rem 0 1rem 0;
        color: rgb(123, 123, 123);;
        font-size: 13px;
    }
`;