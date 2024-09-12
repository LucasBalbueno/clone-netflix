import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.nav`
    width: 100%;
    height: 10%;

    display: flex;
    justify-content: space-between;

    background-color: black;

    .LogoCategorys {
        display: flex;
        align-items: center;

        img {
            width: 10rem;
            margin: 0 1rem 0 2rem;
        }
    
        ul {
            display: flex;
        }
    }


    .SearchProfile {
        display: flex;
        align-items: center;

        .SearchBar {
            margin-right: 1rem;

            input {
                padding: .4rem;
                width: 15rem;
                border-radius: 20px 0 0 20px;
                border: 2px solid rgb(229, 9, 20);
                background-color: rgba(0, 0, 0, 0.7);
                color: white;
            }

            button {
                padding: .5rem;
                border-radius: 0 20px 20px 0;
                border: none;
                font-size: 14px;
                background-color: rgb(229, 9, 20);
                font-weight: bold;
                color: white;
                cursor: pointer;
            }
        }

        img {
            width: 2.5rem;
            border-radius: 6px;
            margin-right: 2rem;
        }
    }
`;

export const LinkCategory = styled(Link)`
    color: white;
    font-size: 14px;
    margin-right: 1rem;
`;