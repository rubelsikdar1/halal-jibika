import jobContext from "./JobContext";


const JobContextProvider = ({children}) => {


    
    return (
       <jobContext.Provider value={
        {

        }
       }>
            {children}
       </jobContext.Provider>
    );
};

export default JobContextProvider;