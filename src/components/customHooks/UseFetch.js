// import { useEffect, useState } from "react";

// function useFetch(url) {

//     const [data,setData]= useState(null);
//     const [loading,setLoading]= useState(true);
//     const [error,setError]=useState(null);

//     useEffect(() => {
//       fetch(url)
//         .then(response=>{
//             return response.json();
//         })
//         .then(finalData=>{
//             setData(finalData);
//             setLoading(false);
//         })
//         .catch(err=>{
//             setError(err);
//             setLoading(false);
//         })
      
//     }, [url])
    
//     return{ data , loading , error}
// }

// export default useFetch




import React, {useState, useEffect, useCallback} from "react"


const useFetch = (url) =>{
    const [data,setData]= useState(null);
    const [loading,setLoading]= useState(true);
    const [error,setError]= useState(null);

    const fetchData= useCallback(async () => {
        setLoading(true);
        try{
            const response= await fetch(url);
            if(!response.ok){
                throw new Error("Some Error Has Occur");
            }
            const result= await response.json();
            setData(result);
            setError(null)
        }
        catch(err) {
            setError(err.message);
        }
        finally{
            setLoading(false);
        }
    },[url]);

    useEffect(()=>{
        fetchData();
    },[fetchData])
    return {data , loading , error};
}

export default useFetch