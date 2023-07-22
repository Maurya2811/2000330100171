import { useEffect, useState } from "react";
import axios from 'axios';
// import dotenv from 'dotenv';



function App(){
  const [trainSchedule, setTrainSchedule] = useState([]);
  useEffect(() => {
    //fetchTrainSchedule();
  }, []);
  // const token = 'BearereyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTAwMTAzMTEsImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiODQyMTE5YTYtODRlNC00YTg1LWI5ODctM2U5MDE4MmM0MmMwIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjIwMDAzMzAxNDQifQ.dEXBoTms5EHYpHf7RHTd6yAaSN89PaUQZ76QcJFhgjQ'; // Replace with the actual token

  // axios.get('http://20.244.56.144/train/trains/?token_type=' + token)
  // .then(response => {
  //   // Handle the response
  //   console.log(response);
  // })
  // .catch(error => {
  //   console.log(error);
  //   // Handle errors
  // });
  const apiUrl = 'http://20.244.56.144/train/trains'; // Replace this with the actual API URL
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTAwMTEzNzksImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiODQyMTE5YTYtODRlNC00YTg1LWI5ODctM2U5MDE4MmM0MmMwIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjIwMDAzMzAxNDQifQ.hZbHgw8ffyg_BX3axn4h4qFZq7_aiu7duf-T3WWPcRQ'; // Replace this with the actual token

const requestOptions = {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${token}`
  }
};

let train =[];

fetch(apiUrl, requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Do something with the data
   setTrainSchedule(data);
    console.log(data);
  })
  .catch(error => {
    // Handle errors
    console.error('Fetch error:', error);
  });


  const fetchTrainSchedule = async () => {
    try {
      const response = await axios.get("http://20.244.56.144/train/trains/?token="+token);
      console.log(response.data);
      setTrainSchedule(response.data);
    } catch (error) {
      console.error('Error fetching train schedule:', error);
    }
  };
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Train Schedule</h1>
      </header>
      <main>
        <table>
          <thead>
            <tr>
              <th>Train Number</th>
              <th>Departure</th>
              <th>Arrival</th>
              <th>Destination</th>
            </tr>
          </thead>
           <tbody>

            {trainSchedule.map((array,index)=>{
              <div key={index}>
                
              </div>
            })}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default App;