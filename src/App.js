import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile'
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';


function App() {
  const loggedIn=useSelector(state=>state.auth.isLoggedIn);
  return (<React.Fragment>
    <Header/>
    {!loggedIn?<Auth/>:
    <UserProfile/>}
    <Counter />
  </React.Fragment>
  );
}

export default App;
