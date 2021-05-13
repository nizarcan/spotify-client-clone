import React, {useEffect, useState} from "react";
import Login from "./Login";
import './App.css';
import { tokenFromURL } from "./spotify";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = tokenFromURL();
    
    window.location.hash = "";

    const accessToken = hash.access_token;

    if (accessToken) {
      setToken(accessToken);
    }
  }, []);

  return (
    <div className="app">  
    {
      token ? (
        <h1>Logged in.</h1>
      ) : (
        <Login/>
      )
    }

    </div>
  );
}

export default App;
