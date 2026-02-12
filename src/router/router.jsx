import HomePage from '../pages/HomePage/HomePage'
import GalleryPage from '../pages/GalleryPage/GalleryPage'
import AboutPage from '../pages/AboutPage/AboutPage'
import ContactPage from '../pages/ContactPage/ContactPage'

import { createBrowserRouter } from 'react-router-dom'

import App from '../App'

const my_router = createBrowserRouter(
    [
        {
            element: <App />,
            children: [
                {
                    path: '/',
                    element: <HomePage />
                },
                {
                    path: '/about',
                    element: <AboutPage />
                },
                {
                    path: '/gallery',
                    element: <GalleryPage />
                },
                {
                    path: '/contact',
                    element: <ContactPage />
                }
            ]
        }
    ]
)

export default my_router