import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
                display: flex;
                align-items: center;
                text-align: center;
                background-color: rgb(172, 172, 172);
                padding: .3rem;
                border-radius: 5px;
            }
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

export const LinkMovieDetails = styled(Link)`
    width: 100%;
    text-align: center;
    padding: .5rem 0;
    margin-top: 1rem;
    font-weight: bold;
    color: white;
    background-color: red;
`;

export const TextNotFound = styled.p`
    font-size: 40px;
    font-weight: bold;
    color: white;
    margin-top: 5rem;
    height: 100vh;
`;

export const MovieContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(15, 15, 15);
    
    .filmeDetails {
        display: flex;
        width: 70%;
        padding: 2rem;

        img {
            width: 300px;
        }
    }

    .DetailsText {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 3rem;
        color: white;

        h3 {
            font-size: 40px;
            font-weight: bold;
        }

        .NoteData {
            margin-bottom: 1rem;

            .NotePopularity {
                display: flex;
                gap: 1rem;
            }

            span {
                font-size: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 1rem;
                width: 1.5rem;
                border-radius: 5px;
                margin: 1rem 0;
                color: white;
                font-weight: bold;
            }

            span:nth-child(1) {
                background-color: green;
            }

            span:nth-child(2) {
                background-color: #FFC107;
            }

            p {
                font-size: 20px;
                font-weight: bold;
            }
        }

        p {
            font-size: 17px;
            text-align: justify;
        }
    }

    .elencoDetails {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        background-color: rgb(15, 15, 15);

        justify-content: center;
        padding: 3rem;
        gap: 5rem;
        
        .elencoCard {

            img {
                width: 10rem;
            }

            h4 {
                font-weight: bold;
                font-size: 18px;
                color: white;
                margin-top: .5rem;
                text-align: center;
            }
            
            h5 {
                font-size: 15px;
                color: white;
                margin-top: .5rem;
                text-align: center;    
            }
        }
    }

    @media screen and (max-width: 800px) {
        .filmeDetails {
            flex-direction: column;
            align-items: center;
        }
    }
`;