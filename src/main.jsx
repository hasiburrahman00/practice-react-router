import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
    createBrowserRouter,
    Router,
    RouterProvider
} from 'react-router-dom'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import Home from './components/home/Home.jsx'
import ErrorPage from './components/error/ErrorPage.jsx'
import Persons from './components/Perosns/Persons.jsx'
import PersonDetails from './components/personDetails/PersonDetails.jsx'


// create a router : 
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About ></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/persons',
                element: <Persons></Persons>,
                loader: () => fetch('https://jsonplaceholder.typicode.com/users'),

            },
            {
                path: 'person/:personId',
                element: <PersonDetails></PersonDetails>,
                loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.personId}`)
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    },

])


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>

        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </React.StrictMode>,
)
