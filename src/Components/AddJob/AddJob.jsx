
// import { useParams } from 'react-router-dom';
// import EditJobs from './../EditJobs/EditJobs';
import { useEffect } from 'react';
import AddOrEdit from './../Header/Froms/AddOrEdit';
import { useForm } from "react-hook-form";
import { axios } from 'axios';

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
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    // useEffect(()=>{
    //     axios.get("")
    // },[])

    return (
        
        <div>
            {
                inputFeld.map((data, i)=><AddOrEdit
                 key={i.toString() }
                 lable={data}
                 heading={"Add your job"}
                 buttoName={"Add Job"}
                 handleSubmit={handleSubmit}
                 register={register}

                 />)
            }
            
        </div>
    );
};

export default AddJob;