import React from "react";
import "./App.css";
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [topic, setTopic] = useState([]);
  const [currentTopic, setCurrentTopic] = useState(null);
  const openTopic = id => {
    setCurrentTopic(id);
  }
  const closeTopic = () => {
    setCurrentTopic(null);
  }
  useEffect(() => {
    const fetchPhotos = () => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(res => {
        console.log("Loaded!")
        console.log(res.data)
      })
      .catch(err => {
        console.error(err)
      })
    }
    fetchPhotos()
  },[])

  return (
    <div className="App">
      <h1>This is Nasa</h1>
      
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
