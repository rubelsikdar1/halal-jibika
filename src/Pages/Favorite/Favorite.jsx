import Style from "./Favorite.module.css";
import SingleJobList from './../../Components/JobsComponents/SingleJobList/SingleJobList';

const Favorite = () => {
    const jobData = [1,2,3];
    return (
        <div>
            <div className={Style.jobBody}>
            <h1 className={Style.header}>Your Favorite List job</h1>
            <h4 className={Style.header}>Total Favorite Jobs : {jobData.length}</h4>
            <div className= "container">
                <div className={Style.MainContainer}>
                    <div className={Style.showLIst}>
                        {
                            jobData.map((jobs)=><SingleJobList key={jobs.id} jobs={jobs} />)
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