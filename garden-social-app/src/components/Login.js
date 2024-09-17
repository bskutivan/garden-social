import { useState } from 'react';
import { auth } from '../firebase'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    auth.signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log('User logged in:', userCredential.user);
      })
      .catch(error => {
        console.error('Error logging in:', error);
      });
  };

  return (
    <div>
      <h2>login</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;