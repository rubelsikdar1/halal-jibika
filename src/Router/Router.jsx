import { createBrowserRouter } from "react-router-dom";
import App from './../App';
import Home from './../Pages/Home/Home';
import About from './../Pages/About/About';
import Contact from './../Pages/Contact/Contact';
import Favorite from './../Pages/Favorite/Favorite';
import Jobs from './../Pages/Jobs/Jobs';
import ErrorPage from './../Pages/ErrorPage/ErrorPage';
import SingUp from './../Pages/Singup/SingUp';



const routes = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children:[
            {
                path:"",
                element: <Home/>
            },
            {
                path:"home",
                element: <Home/>
            },
            {
                path:"about",
                element: <About/>
            },
            {
                path:"contact",
                element: <Contact/>
            },
            {
                path:"favorite",
                element: <Favorite/>
            },
            {
                path:"jobs",
                element: <Jobs/>
            },
            {
                path:"jobs",
                element: <Jobs/>
            },
            {
                path:"login",
                element: <SingUp/>
            },
        ]

    },
    {
        path:"*",
        element: <ErrorPage/>
    }
]);

export default routes;