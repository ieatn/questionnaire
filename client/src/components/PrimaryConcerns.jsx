import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useForm } from '../contexts/FormContext'; // Assuming FormContext is in the same directory

function PrimaryConcerns() {
  const { concerns, setConcerns } = useForm(); // Consume the FormContext
  // const [concerns, setConcerns] = useState(['']);

  const handleAddInput = () => {
    setConcerns([...concerns, '']);
  };

  const handleInputChange = (index, value) => {
    const newConcerns = [...concerns];
    newConcerns[index] = value;
    setConcerns(newConcerns);
  };

  return (
    <div style={{ width: '50%', margin: 'auto' }}>
      {concerns.map((concern, index) => (
        <TextField
          key={index}
          label={`Primary Concern ${index + 1}`}
          value={concern}
          onChange={(e) => handleInputChange(index, e.target.value)}
          fullWidth
          margin="normal"
        />
      ))}
      <Button onClick={handleAddInput} variant="contained" color="primary">
        +
      </Button>
    </div>
  );
}

export default PrimaryConcerns;
