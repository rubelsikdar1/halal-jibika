
import Jobs from './../../Pages/Jobs/Jobs';
import { Outlet } from 'react-router-dom';


const YourPost = () => {
    return (
        <div>
            <Jobs/>
            <Outlet/>
        </div>
    );
};

export default YourPost;