import Style from "./Favorite.module.css";
import SingleJobList from './../../Components/JobsComponents/SingleJobList/SingleJobList';
import { useContext } from "react";
import jobContext from "../../Context/JobLIstContext/JobContext";

const Favorite = () => {
    const {favorite} = useContext(jobContext);
    return (
        <div>
            <div className={Style.jobBody}>
            <h1 className={Style.header}>Your Favorite List job</h1>
            <h4 className={Style.header}>Total Favorite Jobs : {favorite.length}</h4>
            <div className= "container">
                <div className={Style.MainContainer}>
                    <div className={Style.showLIst}>
                        {
                            favorite.map((jobs)=><SingleJobList key={jobs.id} jobs={jobs} btnToggle={true} />)
                        }
                    </div>
                    <div className={Style.RightSidebar}>
                        
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Favorite;