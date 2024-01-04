import { createBrowserRouter } from "react-router-dom";
import App from './../App';
import Home from './../Pages/Home/Home';
import About from './../Pages/About/About';
import Contact from './../Pages/Contact/Contact';
import Favorite from './../Pages/Favorite/Favorite';
import Jobs from './../Pages/Jobs/Jobs';
import ErrorPage from './../Pages/ErrorPage/ErrorPage';
import SingUp from './../Pages/Singup/SingUp';
import JobDetails from './../Pages/Jobs/JobDetails/JobDetails';
import JobApplication from './../Components/JobApplication/JobApplication';
import EditJobDetails from './../Components/EditJobDetails/EditJobDetails';
import YourPost from "../Components/YourPost/YourPost";
import AddJob from './../Components/AddJob/AddJob';




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
                path:"jobs/add",
                element: <Jobs/>,
            },

            {
                path:"login",
                element: <SingUp/>
            },
            {
                path:"jobdetails",
                element: <JobDetails/>
            },
            {
                path:"apply",
                element:<JobApplication/>
            },
            {
                path:"editjob",
                element:<EditJobDetails/>
            },
            {
                path:"yourpost",
                element:<YourPost/>
            },
            {
                path:"yourpost/:id",
                element:<YourPost/>
            },
            // {
            //     path:"newpost",
            //     element:
            // },
            {
                path:"addjob",
                element:<AddJob/>
            }
         
        ]

    },
    {
        path:"*",
        element: <ErrorPage/>
    }
]);

export default routes;