import SingleJobList from "../../Components/JobsComponents/SingleJobList/SingleJobList";
import Style from "./Jobs.module.css";

const Jobs = () => {
    return (
        <div className={Style.jobBody}>
            <h1 className={Style.header}>All JOBS</h1>
            <div className= "container">
                <div className={Style.MainContainer}>
                    <div className={Style.showLIst}>
                        <SingleJobList/>
                    </div>
                    <div className={Style.RightSidebar}>
                        <SingleJobList/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;