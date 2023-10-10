import React, { useState,useEffect } from 'react';
import Countdown from './Componets/Countdown';
import CountdownForm from './Componets/CountdownForm';
import Modal from './Componets/Modal';
import { Button ,Grid } from '@mui/material';
import axios from 'axios';


function App() {
  const [countdowns, setCountdowns] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  async function handleAddCountdown(data) {
    try {
      const response = await axios.post('https://localhost:7088/api/Countdown', data);
      setCountdowns([...countdowns, response.data]);
    } catch (error) {
      console.error("Error adding a new countdown", error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://localhost:7088/api/Countdown');
        setCountdowns(response.data);
      } catch (error) {
        console.error("Error fetching the countdowns", error);
      }
    }

    fetchData();
  }, []);

  function handleRemoveCountdown(indexToRemove) {
    const newCountdowns = countdowns.filter(
      (_, index) => index !== indexToRemove
    );
    setCountdowns(newCountdowns);
  }

  return (
    <div className="App">
      <h1>Countdown App</h1>
      <Button variant="contained" color="primary" onClick={() => setModalOpen(true)}>
        Add Countdown
      </Button>
      <CountdownForm 
        onAdd={handleAddCountdown}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
     <Grid container spacing={3}>
{countdowns.map((countdown, index) => (
  <Grid item xs={3} sm={6} md={6} key={index}>
    <Countdown
      index={index}
      {...countdown}
      onRemove={handleRemoveCountdown}
    />
  </Grid>
))}
</Grid>
    </div>
  );
}




export default App;