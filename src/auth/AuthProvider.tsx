import React, { useEffect, useState, createContext, useContext } from 'react';
import firebase from 'firebase';
import * as H from 'history';

type User = firebase.User;

type authContextType = {
  currentUser: User | null | undefined;
  signin: (
    email: string,
    password: string,
    history: H.History
  ) => Promise<void>;
  signup: (
    email: string,
    password: string,
    history: H.History
  ) => Promise<void>;
  signout: () => Promise<void>;
};

type authProviderType = {
  children: React.ReactNode;
};

function createCtx<ContextType>() {
  const ctx = createContext<ContextType | undefined>(undefined);
  function useCtx() {
    const c = useContext(ctx);
    if (!c) throw new Error('useCtx must be inside a Provider with a value');
    return c;
  }
  return [useCtx, ctx.Provider] as const;
}

const useAuthContext = (): authContextType => {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(
    undefined
  );

  const signin = async (
    email: string,
    password: string,
    history: H.History
  ) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      history.push('/my-list');
    } catch (error) {
      alert(error);
    }
  };
  const signup = async (
    email: string,
    password: string,
    history: H.History
  ) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      history.push('/my-list');
    } catch (error) {
      alert(error);
    }
  };
  const signout = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  return { currentUser, signin, signup, signout };
};

export const [useAuth, SetAuthProvider] = createCtx<authContextType>();

export const AuthProvider = (props: authProviderType): JSX.Element => {
  const auth = useAuthContext();
  return <SetAuthProvider value={auth}>{props.children}</SetAuthProvider>;
};
