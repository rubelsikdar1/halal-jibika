
import Style from "./SingleJobList.module.css";
import { Link } from 'react-router-dom';



const SingleJobList = ({jobs}) => {
    console.log(jobs);

    return (
        <div>
            <div className={Style.mainBox}>
                <img className={Style.img} src={jobs?.logo} alt="" />
                <div className={Style.info}>
                    <h3 className={Style.title}> {jobs?.title} </h3>
                    <p className={Style.des}><small>{jobs?.description}</small></p>
                    <div>
                        <ul>
                            <li className={Style.list}>Company Name : {jobs?.companyName}</li>
                            <li className={Style.list}>Position :  {jobs?.position}</li>
                            <li className={Style.list}>loaction :  Dhaka , Banglasesh</li>
                            <li className={Style.list}>Sellary : 12500000 tk </li>
                        </ul>
                    </div>
                    <div className={Style.buttonBox}>
                        <Link><button className={Style.btn}>Apply job </button></Link> 
                        <Link><button className={Style.btn}>Add to Favorite </button></Link> 
                        <Link><button className={Style.btn}>More Details </button></Link> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleJobList;