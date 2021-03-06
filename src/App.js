import React, {useEffect, useState} from "react";
import Login from "./Login";
import './App.css';
import { tokenFromURL } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import {DataLayerValue} from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = DataLayerValue();

  useEffect(() => {
    const hash = tokenFromURL();
    
    window.location.hash = "";

    const accessToken = hash.access_token;

    if (accessToken) {

      dispatch({
        type: 'SET_TOKEN',
        token: accessToken
      });

      // setToken(accessToken);     

      spotify.setAccessToken(accessToken);

      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists
        });
      });
      
      spotify.getPlaylist("37i9dQZEVXcM3kEpwI4HJk").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      });
    }
  }, []);

  return (
    <div className="app">  
    {
      token ? (
        <Player spotify={spotify}/>
      ) : (
        <Login/>
      )
    }

    </div>
  );
}

export default App;
