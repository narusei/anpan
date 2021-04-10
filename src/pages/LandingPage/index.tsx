import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

export const LandingPage: React.FC = () => {
  return (
    <div>
      <h2>landing</h2>
      <div>
        <Button
          component={Link}
          to="/signin"
          variant="contained"
          color="primary"
        >
          Sign In
        </Button>
        <Button
          component={Link}
          to="/signup"
          variant="contained"
          color="primary"
        >
          Sign In
        </Button>
      </div>
    </div>
  );
};
