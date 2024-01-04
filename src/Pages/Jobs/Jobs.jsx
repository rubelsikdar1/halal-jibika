import { useContext, useEffect, useState } from "react";
import SingleJobList from "../../Components/JobsComponents/SingleJobList/SingleJobList";
import Style from "./Jobs.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import jobContext from './../../Context/JobLIstContext/JobContext';

const Jobs = () => {
    const [jobData, serJobData]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:9000/jobs')
        .then(res=> serJobData(res.data))
    },[]);

    const {favorite} = useContext(jobContext)
    console.log(favorite)

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
                        <div className={Style.box}>
                            <h2> Your job Post</h2>
                            <hr />
                            <Link><button  className={Style.btn}>Your posted jobs list </button></Link>
                            <Link to= "/"><button  className={Style.btn}>New job post </button></Link>
                            <Link to="/favorite"><button  className={Style.btn}> Your Favorite jobs({favorite.length}) </button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;