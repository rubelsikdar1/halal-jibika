
import SingleJobList from "../JobsComponents/SingleJobList/SingleJobList";
import Style from "./YourPost.module.css"
import { useEffect, useState } from "react";
import axios from "axios";




const YourPost = () => {
 
    const [jobs,setJobs]= useState([]);
    useEffect(()=>{
        axios.get("http://localhost:9000/jobs")
        .then((res)=> setJobs(res.data))
        .catch((error)=> console.log(error))
    },[])
    const jobData = jobs.filter((job)=>job.id > 3);

    const editHandaler = (id)=>{
        const filterdata = jobs.filter((value)=> value.id !==  id.id);
        
    }
    const deletesHandaler = (id)=>{
        console.log(id)
       axios.delete(`http://localhost:9000/jobs/${id.id}`)
       .then(res=> console.log('Post deleted'))
        
    }

    return (
        <div>
            <div className={Style.jobBody}>
            <h1 className={Style.header}>All JOBS</h1>
            <h4 className={Style.header}>Total Jobs Avelable : {jobData.length}</h4>
            <div className= "container">
                <div className={Style.MainContainer}>
                    <div className={Style.showLIst}>
                        {
                            jobData.map((jobs)=><SingleJobList key={jobs.id} jobs={jobs} btn={true} edit={editHandaler} delet={deletesHandaler} />)
                        }
                    </div>
                    <div className={Style.RightSidebar}>
                        {/* <div className={Style.box}>
                            <h2> Your job Post</h2>
                            <hr />
                            <Link><button  className={Style.btn}>Your posted jobs list </button></Link>
                            <Link to= "/"><button  className={Style.btn}>New job post </button></Link>
                            <Link to="/favorite"><button  className={Style.btn}> Your Favorite jobs({favorite.length}) </button></Link>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default YourPost;