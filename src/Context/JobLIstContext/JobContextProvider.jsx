import { useState } from "react";
import jobContext from "./JobContext";


const JobContextProvider = ({children}) => {
    const [moreDetails, setMoreDetails] = useState({});
    const [favorite, setFavorite] = useState([]);

    

    

    return (
       <jobContext.Provider value={
        {
            setMoreDetails,
            moreDetails,
            setFavorite,
            favorite,

        }
       }>
            {children}
       </jobContext.Provider>
    );
};

export default JobContextProvider;