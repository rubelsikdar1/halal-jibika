import { useContext } from "react";
import Style from "./SingleJobList.module.css";
import { Link } from "react-router-dom";
import jobContext from "../../../Context/JobLIstContext/JobContext";
import { motion } from "framer-motion";

const SingleJobList = ({ jobs, btnToggle, btn, edit, delet }) => {
  // const btnToggle = false;
  const { setMoreDetails, setFavorite, favorite } = useContext(jobContext);

  const detailsHandaler = (jobs) => {
    setMoreDetails(jobs);
  };
  const AddFavoriteHandaler = (jobs) => {
    setFavorite((prev) => {
      return [...prev, jobs];
    });
  };

  const deleteFavoriteHandaler = (id) => {
    const filterdata = favorite.filter((value) => value.id !== id);
    setFavorite(filterdata);
  };



  return (
    <motion.div
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        // repeat: Infinity,
        repeatDelay: 1,
      }}
    >
      <div className={Style.mainBox}>

        <img className={Style.img} src={jobs?.logo} alt="" />
        <div className={Style.info}>
          <h3 className={Style.title}> {jobs?.title} </h3>
          <p className={Style.des}>
            <small>{jobs?.description}</small>
          </p>
          <div>
            <ul>
              <li className={Style.list}>Company Name : {jobs?.companyName}</li>
              <li className={Style.list}>Position : {jobs?.position}</li>
              <li className={Style.list}>loaction : Dhaka , Banglasesh</li>
              <li className={Style.list}>Sellary : 12500000 tk </li>
            </ul>
          </div>
          <div className={Style.buttonBox}>
            <Link to={"/apply"}>
              <button className={Style.btn}>Apply job </button>
            </Link>
            {btnToggle ? (
              <Link>
                <button
                  onClick={() => deleteFavoriteHandaler(jobs.id)}
                  className={Style.btn}
                >
                  Delete Favorite{" "}
                </button>
              </Link>
            ) : (
              <Link>
                <button
                  onClick={() => AddFavoriteHandaler(jobs)}
                  className={Style.btn}
                >
                  Add to Favorite{" "}
                </button>
              </Link>
            )}
            <Link to={"/jobdetails"}>
              <button
                onClick={() => detailsHandaler(jobs)}
                className={Style.btn}
              >
                More Details{" "}
              </button>
            </Link>
            {btn ? (
              <>
                <Link to={`/${jobs.id}`}>
                  <button onClick={() => edit(jobs)} className={Style.btn}>
                    Edit your Jobs{" "}
                  </button>
                </Link>
                <Link>
                  <button onClick={() => delet(jobs)} className={Style.btn}>
                    Delete your Job{" "}
                  </button>
                </Link>{" "}
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleJobList;
