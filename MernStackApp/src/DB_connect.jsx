import React,{useState,useEffect} from "react";
function DB_connect() {
   const[formsData,setFormData]=useState({
    name:"",
    email:"",
    message:""
   });
   const[status,setStatus]=useState(
    {
        type:'',
        mgs:''
    }
   );
   const[loading,setLoading]=useState(false);
   const handleInputData=(e)=>{
    const{name,value}=e.target;
    setFormData(
        prev=>({
            ...prev,
            [name]:value
        })
    );


   };
   const handleSubmit=async(e)=>{
    e.preventDefault();
    setLoading(true);
    setStatus({
        type:'',
        mgs:''
   });
    try{
        const response=await fetch("http://localhost:5000/api/contact",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formsData)
        });
        const data=await response.json();
        if(response.ok){
            setStatus({
                type:"success",
                mgs:"form submitted successfully"
            });
            setFormData({
                name:"",
                email:"",
                message:""
            });
        }else{
            setStatus({
                type:"failure",
                mgs:data.message
            });
        }
    }catch(error){
       setStatus({
            type:"error",
            mgs:"coudnt connect to localhost"
        });
    }finally{
        setLoading(false);
    }
  
   };
   

     return(
        <>
        <div>
            <h1>send message</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label><br/>
                <input type="text" name="name" value={formsData.name} required onChange={handleInputData} /><br/>
                <label>Email:</label><br/>
                <input type="email" name="email" value={formsData.email} required onChange={handleInputData} /><br/>
                <label>Message:</label><br/>
                <input type="text" name="message" value={formsData.message} required onChange={handleInputData} /><br/>
                <button type="submit" disabled={loading}>{loading ? "sending..." : "Send"}</button>
            </form>
        </div>
        </>
    )
}
export default DB_connect;
