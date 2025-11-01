import { useState } from 'react'
import './App.css'
import useFetch from './components/customHooks/UseFetch'

function App() {
  
  const url= 'https://api.escuelajs.co/api/v1/products';
  const {data, loading, error}= useFetch(url);
  
    if(loading){
    return <h2>Loading please wait..</h2>
    }

  if(error){
    return <h2>Error : Please check your connection </h2>
    }

return (
   <>
      <h1>This is my first fetch website</h1>
   </>
 )
}
export default App

