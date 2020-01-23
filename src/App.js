import React, {useState, useEffect} from "react";
import "./App.css";
import Axios from "axios";
import Title from "./Components/Title";
import Date from "./Components/Date"
import Photo from "./Components/Photo"
import Description from "./Components/Description"
import Copyright from "./Components/Copyright"


function App() {
  //state
  const [data, setData] = useState([])


  //axios
  useEffect(() => {
    Axios.get("https://api.nasa.gov/planetary/apod?api_key=V25rvOdlQ8aR9LLN3XXc8dKhWDtLTqoJQAGZUU1o")
    .then(response => {
      console.log(response)
      setData(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <div className="App">
      <h1>
        NASA Photo of the Day 🚀!
      </h1>
      <Photo photo={data}/>
      <Title data = {data}/>
      <Date mydate={data}/>
      <Description desc={data}/>
      <Copyright copy={data}/>
    </div>
  );
}

export default App;
