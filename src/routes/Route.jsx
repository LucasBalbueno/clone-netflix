import { createBrowserRouter } from "react-router-dom";

import { ErrorPage } from "../components/Pages/ErrorPage";
import { ProtectedRoute } from "../services/ProtectedRoute";

import { TelaInicial } from "../components/Pages/TelaInicial";
import { Login } from "../components/Pages/Login";
import { HomeMovies } from "../components/Pages/HomeMovies";

import { GenreMovies } from '../components/Movies/GenreMovies'
import { InitialMovies } from '../components/Movies/Initial'

export const route = createBrowserRouter([
    {
        path: '/',
        element: <TelaInicial />,
    },
    {
        path: '/auth',
        element: <Login />,
    },
    {
        path: '/movies',
        element: <ProtectedRoute><HomeMovies /></ProtectedRoute>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '',
                element: <InitialMovies />
            },
            {
                path: ':genre',
                element: <GenreMovies />
            }
        ]
    }
])