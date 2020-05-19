import React from 'react';
import { BrowserRouter as Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Navbar from './js/components/NavBar/NavBar';
import MainView from './js/components/MainView/MainView';
import SecondaryView from './js/components/SecondaryView/SecondaryView';
import LoginView from './js/components/LoginView/LoginView';
import SongView from './js/components/SongView/SongView';
import RegisterView from './js/components/RegisterView/RegisterView';
import PlaylistView from './js/components/PlaylistView/PlaylistView';
import FilteredView from './js/components/FilteredView/FilteredView';
import AddSongView from './js/components/AddSongView/AddSongView';
import CreatePlaylist from './js/components/CreatePlaylist/CreatePlaylist';

function App() {
    return (
      <BrowserRouter basename="/Songbook-Manager-API-front">
          <Navbar />
          <main>
              <Route path={["/", "/songs"]} component={MainView} exact />
              {/* <Route path="/tags" component={SecondaryView} exact/> */}
              <Route path="/categories" component={SecondaryView} exact/>
              <Route path="/playlists" component={SecondaryView} exact />
              <Route path="/songs/:songId" component={SongView} />
              <Route path="/add" component={AddSongView} exact/>
              <Route path="/login" component={LoginView} />
              <Route path="/register" component={RegisterView} />
              <Route path="/playlists/:playlistId" component={PlaylistView} />
              {/* <Route path="/tags/:filterName" component={FilteredView} /> */}
              <Route path="/categories/:filterName" component={FilteredView} />
              <Route path="/create" component={CreatePlaylist} />
              <Route path="/myPlaylists" component={SecondaryView} />
          </main>
      </BrowserRouter>
  );
}

export default App;