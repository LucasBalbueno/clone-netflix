import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: rgb(15, 15, 15);

    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    padding: 3rem 0 3rem 0;
`;

export const CardMovie = styled.div`
    margin: 2rem 1rem;
    position: relative;

    img {
        width: 200px;
        height: 100%;
        transition: all .3s;
    }

    &:hover img {
        transform: scale(1.3);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
    }
    
    .infos {
        margin-top: 0;
        width: 200px;
        height: auto;
        position: absolute;
        z-index: 1;
        display: none;

        background-color: rgb(25, 25, 25);
        transition: all .3s;

        h3 {
            color: white;
            font-size: 17px;
            text-align: center;
            margin-top: .5rem;
            font-weight: bold;
        }

        .textNote {
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: green;
                padding: .5rem;
                width: 1.5rem;
                border-radius: 5px;
                margin: .5rem 0;

            p {
                color: white;
                font-weight: bold;
            }
        }

        .genresTags {
            display: flex;
            gap: .5rem;

            span {
                background-color: rgb(172, 172, 172);
                padding: .3rem;
                border-radius: 5px;
            }
        }

        a {
            width: 100%;
            text-align: center;
            padding: .5rem 0;
            margin-top: 1rem;
            font-weight: bold;
            color: white;
            background-color: red;
        }
    }
    
    &:hover .infos {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform: scale(1.3);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
    }
`;