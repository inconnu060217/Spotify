import "./App.css";
import React from "react";
import {Switch, Route } from "react-router-dom";
import { Navigation, Genres, Albums, Acceuil, Artistes, Detail_album, Detail_artists, Detail_genre } from "./components";

function App() {
  return (
    <div className="App">
      <div className="Nav-bar">
        <Navigation />
      </div>
      <div className="main-content">
        <Switch>
          <Route path="/" exact>
            <Acceuil />
          </Route>
          <Route path="/albums" exact>
            <Albums />
          </Route>
          <Route path="/genres" exact>
            <Genres />
          </Route>
          <Route path="/artistes" exact>
            <Artistes />
          </Route>
          <Route path="/detail_album">
            <Detail_album />
          </Route>
          <Route path='/detail_artist'>
            <Detail_artists />
          </Route>
          <Route path='/detail_genre'>
            <Detail_genre />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
