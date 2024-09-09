import { createBrowserRouter } from "react-router-dom";

import { ErrorPage } from "../components/Pages/ErrorPage";

import { TelaInicial } from "../components/Pages/TelaInicial";
import { Login } from "../components/Pages/Login";
import { HomeMovies } from "../components/Pages/HomeMovies";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <TelaInicial />,
    },
    {
        path: '/auth',
        element: <Login />
    },
    {
        path: '/movies',
        element: <HomeMovies />
    }
])