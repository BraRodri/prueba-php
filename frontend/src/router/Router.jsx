import { createBrowserRouter } from "react-router-dom"
import App from "../views/App"
import Record from "../views/Record"
import Layout from "../layouts/Layout"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <App />
            },
            {
                path: '/records',
                element: <Record />
            },
        ]
    }
])

export default router