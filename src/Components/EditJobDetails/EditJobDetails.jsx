import EditJobs from "../EditJobs/EditJobs";


    const inputFeld = [{
        title:"Your Job Title",
        logo: "Your Logo Link",
        companyName:"your Company Name",
        posstion:"Your Job Posstion",
        despription:"Your Job Despription",
        address:"Address",
        contact:"Contact",
        sallery:"Sallery",

    }]
const EditJobDetails = () => {
    return (
        <div>
            {
                inputFeld.map((lable, index)=> <EditJobs
                 key={index.toString()} 
                 lable={lable}
                 heading="Edit Your Job Details"
                 buttoName={"Edit Jobs"}
                 />)
            }
        </div>
    );
};

export default EditJobDetails;