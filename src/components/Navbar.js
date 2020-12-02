import React from "react";
import "../styles/navbar.css";
import VenuesDropdown from "./VenuesDropdown";
import LiveMusicDropdown from "./LiveMusicDropdown";
import ArtistsDropdown from "./ArtistsDropdown";

export default function Navbar({
  signedInUser,
  setSignedInUser,
  handleOpenSignIn,
  handleOpenSignUp,
  handleOpenCreateEvent,
  handleOpenCreateVenue, 
  handleOpenCreateArtist
}) {
  return (
    <div className="nav-container">
      <div class="logo">Chs Live</div>
      <nav>
        <ul className="nav-links">
          <LiveMusicDropdown handleOpenCreateEvent={handleOpenCreateEvent} />
          <VenuesDropdown handleOpenCreateVenue={handleOpenCreateVenue} />
          <ArtistsDropdown handleOpenCreateArtist={handleOpenCreateArtist}/>
        </ul>
      </nav>
      {signedInUser ? (
        <div className="sign-links">
          <li
            className="signIn-links"
            onClick={() => setSignedInUser(undefined)}
          >
            Sign Out
          </li>
        </div>
      ) : (
        <div className="sign-links">
          <li className="signIn-links" onClick={handleOpenSignUp}>
            Sign Up
          </li>
          <li className="signIn-links" onClick={handleOpenSignIn}>
            Sign In
          </li>
        </div>
      )}
    </div>
  );
}
