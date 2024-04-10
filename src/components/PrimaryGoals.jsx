import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function Goals() {
  const [goals, setGoals] = useState(['']);

  const handleAddInput = () => {
    setGoals([...goals, '']);
  };

  const handleInputChange = (index, value) => {
    const newGoals = [...goals];
    newGoals[index] = value;
    setGoals(newGoals);
  };

  return (
    <div style={{ width: '50%', margin: 'auto' }}>
      {goals.map((goal, index) => (
        <TextField
          key={index}
          label={`Goal ${index + 1}`}
          value={goal}
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

export default Goals;
