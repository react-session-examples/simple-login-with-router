import React, { useState } from 'react'

import UserDetails from '../../components/dashboard/UserDetails';
import useUserDetails from '../../hooks/useUserDetails';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [result, setLoginResult] = useState('');
  const [userDetails, setUserDetails] = useState(null);
  const [isFetchingUser, setAsFetchingUser] = useState(false);
  const fetchUserDetails = useUserDetails();
  const navigate = useNavigate();

  const login = () => {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: userName,
        password: password,
        expiresInMins: 30
      }),
    })
      .then(async (response) => {
        const data = await response.json();
        if (data.message) {
          setLoginResult('Invalid Login');
          setUserDetails(null);
          return;
        }

        setLoginResult('Success');
        setAsFetchingUser(true);
        fetchUserDetails().then(data => {
          // setUserDetails(data);
          // setAsFetchingUser(false);
          navigate('dashboard');
        });
      })
      .catch(() => {
        setLoginResult('Invalid Login');
        setUserDetails(null);
      });
  };

  return <>
    <h1>Welcome to Simple Login Screen</h1>
    <input type="text" name="username" onChange={event => {
      setUsername(event.target.value);
    }} placeholder="User name" value={userName} />
    <input type="password" name="password" placeholder="Password" onChange={event => {
      setPassword(event.target.value);
    }} value={password} />
    <input type="submit" value="Login" onClick={login} />

    <div>
      <h3>{result}</h3>
    </div>
    {isFetchingUser && (<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
      <div
        style={{
          width: '40px',
          height: '40px',
          border: '4px solid #ccc',
          borderTop: '4px solid #3498db',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }}
      />
      <p>Loading user details...</p>
    </div>
    )}
    <UserDetails details={userDetails} />
  </>
}

export default Login;