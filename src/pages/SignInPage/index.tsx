import React from 'react';
import { useAuth } from '../../auth/AuthProvider';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import {
  Container,
  Avatar as MuiAvatar,
  Button,
  CssBaseline,
  TextField,
  Typography,
} from '@material-ui/core';
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons';

const Paper = styled.div`
  margin-top: ${(props) => props.theme.spacing(8)}px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LockAvator = styled(MuiAvatar)`
  margin: ${(props) => props.theme.spacing(1)}px;
  background-color: ${(props) => props.theme.palette.secondary.main};
`;

const Form = styled.form`
  width: 100%;
  margin-top: ${(props) => props.theme.spacing(1)}px;
`;

const SubmitButton = styled(Button)`
  margin: ${(props) => props.theme.spacing(3, 0, 2)};
`;

export const SignInPage: React.FC = () => {
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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper>
        <LockAvator>
          <LockOutlinedIcon />
        </LockAvator>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Form onSubmit={handleSubmit} noValidate>
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
        </Form>
        <Link to="/signup">{"Don't have an account? Sign Up"}</Link>
      </Paper>
    </Container>
  );
};
