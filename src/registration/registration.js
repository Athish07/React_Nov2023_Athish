// Registration.js

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, TextField, Button, Grow, Slide } from '@material-ui/core';
import './registration.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    padding: theme.spacing(3),
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));

const Registration = () => {
  const classes = useStyles();

  return (
   <body className='bg'>
    <div className={classes.root}>
      <Container component="main" maxWidth="xs">
        <Grow in={true} timeout={1000}>
          <div className={classes.formContainer}>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <Slide direction="down" in={true} timeout={1000}>
              <form className={classes.form}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="email"
                  label="Email Address"
                  type="email"
                  id="email"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submitButton}
                  href='/login'
                >
                  Register
                </Button>
              </form>
            </Slide>
          </div>
        </Grow>
      </Container>
    </div>
    </body>
  );
};

export default Registration;
