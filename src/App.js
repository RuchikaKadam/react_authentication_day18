//App.js
import "./App.css";
import {app, provider} from "./Firebase";

import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from "firebase/auth";

function App() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState({});

  const auth = getAuth();

  async function handleSubmit() {
    try{
      const result = await createUserWithEmailAndPassword(auth, email, password);
      alert("new User created");      
  }
  catch(err) {
    alert(err.message)
  }
}
  async function handleSignIn() {
    try{
      const result = await signInWithEmailAndPassword(auth, email, password);
    alert("User signed in");
    setUser({
      email: result.user.email,
      uid: result.user.uid,
    })
    }
    catch(err) {
      alert(err.message)
    }
  }
  async function signInWithGoogle(){
    try{
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      alert("User signed in with google")
    }catch (err){
      console.log(err);
      alert(err.message);
    }
  }
 async function logout() {
  try{
    const result = await signOut(auth);
    console.log(result);
    setUser({});
    alert("User Signed out");
  }
  catch(err) {
    console.log(err);
    alert(err.message);
  }
 }

  return (
    < div className="App"
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      height: "80vh",
    }}>
      <div className="onediv">
        <p>Email: {user.email}</p><br/>
        <p>Uid: {user.uid}</p><br/>
        <button onClick={logout}>Logout</button>
      </div>
      <div className="onediv">
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
        />
        <br />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        />
        <br />
        <button type="submit" onClick={handleSubmit}>
          Sign Up
        </button>
      </div>
      <div className="onediv">
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
        />
        <br />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        />
        <br />
        <button type="submit" onClick={handleSignIn}>
          Sign in
        </button>
      </div>
      <div className="onediv">
        <button onClick={ signInWithGoogle}>Sign up with Google</button>
      </div>
    </div>
  );
}

export default App;
