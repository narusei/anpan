import React from 'react';
import { useAuth } from '../../auth/AuthProvider';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import {
  Container,
  Button,
  CssBaseline,
  TextField,
  Typography,
  Grid,
  Box,
} from '@material-ui/core';

export type SignInPageComponentProps = {
  handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};

const Paper = styled.div`
  margin-top: ${(props) => props.theme.spacing(8)}px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  width: 100%;
  margin-top: ${(props) => props.theme.spacing(1)}px;
`;

const SubmitButton = styled(Button)`
  margin: ${(props) => props.theme.spacing(3, 0, 2)};
`;

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link to="/" color="inherit">
        Anpan
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export const SignInPageComponent = (
  props: SignInPageComponentProps
): JSX.Element => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper>
        <img
          src="/static/img/anpan-logo.svg"
          alt="anpan"
          title="anpan アンパン"
          width="50%"
          height="100%"
        ></img>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Form onSubmit={props.handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
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
            autoComplete="current-password"
          />
          <SubmitButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign In
          </SubmitButton>
          <Grid container justify="center">
            <Grid item>
              <Link to="/signup">{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
        </Form>
      </Paper>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export const SignInPage = (): JSX.Element => {
  const auth = useAuth();
  const history = useHistory();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = event.currentTarget.elements.namedItem(
      'email'
    ) as HTMLInputElement;
    const password = event.currentTarget.elements.namedItem(
      'password'
    ) as HTMLInputElement;
    auth.signin(email.value, password.value, history);
  };

  return (
    <SignInPageComponent
      handleSubmit={(e) => handleSubmit(e)}
    ></SignInPageComponent>
  );
};
