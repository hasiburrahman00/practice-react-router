import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
    createBrowserRouter,
    Router,
    RouterProvider
} from 'react-router-dom'


// create a router : 
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/about',
        element: <div>This is about page </div>
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>

        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </React.StrictMode>,
)
