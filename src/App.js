import React, {useEffect, useState} from "react";
import Login from "./Login";
import './App.css';
import { tokenFromURL } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = tokenFromURL();
    
    window.location.hash = "";

    const accessToken = hash.access_token;

    if (accessToken) {
      setToken(accessToken);

      spotify.setAccessToken(accessToken);

      spotify.getMe().then((loggedUser) => {
        console.log("user: ", loggedUser);
      })
    }
  }, []);

  return (
    <div className="app">  
    {
      token ? (
        <Player/>
      ) : (
        <Login/>
      )
    }

    </div>
  );
}

export default App;
