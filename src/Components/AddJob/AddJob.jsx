
import { useParams } from 'react-router-dom';
import EditJobs from './../EditJobs/EditJobs';

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

const AddJob = () => {
    const id = useParams();
    console.log(id)
    return (
        
        <div>
            {
                inputFeld.map((data, i)=><EditJobs
                 key={i.toString() }
                 lable={data}
                 heading={"Add your job"}
                 buttoName={"Add Job"}
                 />)
            }
            
        </div>
    );
};

export default AddJob;