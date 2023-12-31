import { useEffect, useState } from "react";
import SingleJobList from "../../Components/JobsComponents/SingleJobList/SingleJobList";
import Style from "./Jobs.module.css";
import axios from "axios";

const Jobs = () => {
    const [jobData, serJobData]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:9000/jobs')
        .then(res=> serJobData(res.data))
    },[]);

    return (
        <div className={Style.jobBody}>
            <h1 className={Style.header}>All JOBS</h1>
            <h4 className={Style.header}>Total Jobs Avelable : {jobData.length}</h4>
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
    );
};

export default Jobs;