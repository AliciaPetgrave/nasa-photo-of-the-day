import React, {useState, useEffect} from "react";
import "./App.css";
import Axios from "axios";
import Title from "./Components/Title";
import Date from "./Components/Date"
import Photo from "./Components/Photo"
import Description from "./Components/Description"
import Copyright from "./Components/Copyright"
import styled from "styled-components"


const Titlestyle = styled.h1`
    display:flex;
    justify-content:center;
    padding:20px 0;
`;

const Container = styled.div`
    font-family: 'Source Sans Pro', sans-serif;
    background-color: #333333;
    color:#f9fcfb;
    display:flex;
    flex-direction:column;
    justify-content:center;
`;

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
    <Container>
      <Titlestyle>
        NASA Photo of the Day 🚀!
      </Titlestyle>
      <Photo photo={data}/>
      <Title data = {data}/>
      <Date mydate={data}/>
      <Description desc={data}/>
      <Copyright copy={data}/>
    </Container>
  );
}

export default App;
