import React,{ useState } from 'react'
import Form from './component/Form/Form'
import Output from './component/Output/Output'
import { API, KEY } from './config'
import './App.css'



export default function App() {
  const [data, setData] = useState()
  const [val, setVal] = useState('')

  const searchWeatherBYCity = async(event) => {
    event.preventDefault()
    let url = API+val+KEY
    const req =await fetch(url)
    const res = await req.json()
    console.log(res);
    setData(res)
  }
  return (
    <div>
     <Form
     val={val}
     setVal={setVal}
     search={searchWeatherBYCity}

     />
     <Output
     weather={data}
  

     />

    </div>
  );
}


