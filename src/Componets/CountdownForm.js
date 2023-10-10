import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

function CountdownForm({ onAdd, open, onClose }) {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
  
    function handleSubmit(event) {
      event.preventDefault();
      onAdd({ title, date });
      setTitle('');
      setDate('');
      onClose();
    }
  
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Add a new countdown</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            
          />
          <TextField
            margin="dense"
   
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
  
  export default CountdownForm;