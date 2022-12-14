import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import ProfileScreen from './screens/ProfileScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { auth } from "./firebase"
import { useDispatch, useSelector } from "react-redux"
import { login, logout, selectUser } from "./features/userSlice"


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // LOGGED IN
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      } else {
        // LOGGED OUT
        dispatch(logout())
      }
    })

    return unsubscribe;
  }, [dispatch])

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route path="/profile">
              <ProfileScreen />
            </Route>

            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
