import React, {useState} from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import SignInModal from '../components/SignInModal'; 
import SignUpModal from '../components/SignUpModal';
import CreateEvent from '../components/CreateEvent';
import CreateVenue from '../components/CreateVenue'; 
import CreateArtist from '../components/CreateArtist'; 
import HeaderPic from '../components/HeaderPic'; 
import EventCardContainer from '../components/EventCardContainer';
import ArtistCardContainer from '../components/ArtistCardContainer';
import VenueCardContainer from '../components/VenueCardContainer'; 
import "../styles/home.css"; 

export default function Home({signedInUser, setSignedInUser}) {
    const [openSignIn, setOpenSignIn] = useState(false);
    const [openSignUp, setOpenSignUp] = useState(false); 
    const [openCreateEvent, setOpenCreateEvent] = useState(false);
    const [openCreateVenue, setOpenCreateVenue] = useState(false); 
    const [openCreateArtist, setOpenCreateArtist] = useState(false); 
    const handleOpenSignIn = () => {
      setOpenSignIn(true);
    };
  
    const handleCloseSignIn = () => {
      setOpenSignIn(false);
    };
    const handleOpenSignUp = () => {
      setOpenSignUp(true);
    };
  
    const handleCloseSignUp = () => {
      setOpenSignUp(false);
    };

    const handleOpenCreateEvent = () => {
      setOpenCreateEvent(true);console.log(openCreateEvent); 
    };

    const handleCloseCreateEvent = () => {
      setOpenCreateEvent(false); 
    }

    const handleOpenCreateVenue = () => {
      setOpenCreateVenue(true); 
    }

    const handleCloseCreateVenue = () => {
      setOpenCreateVenue(false); 
    }

    const handleOpenCreateArtist = () => {
      setOpenCreateArtist(true); 
    }

    const handleCloseCreateArtist = () => {
      setOpenCreateArtist(false); 
    }

    return (
        <div>
            <Navbar handleOpenSignIn={handleOpenSignIn} handleOpenSignUp={handleOpenSignUp} handleOpenCreateEvent={handleOpenCreateEvent} handleOpenCreateVenue={handleOpenCreateVenue} handleOpenCreateArtist={handleOpenCreateArtist} signedInUser={signedInUser} setSignedInUser={setSignedInUser} />
            <CreateEvent openCreateEvent={openCreateEvent} handleCloseCreateEvent={handleCloseCreateEvent} setSignedInUser={setSignedInUser}/>
            <CreateVenue openCreateVenue={openCreateVenue} handleCloseCreateVenue={handleCloseCreateVenue} setSignedInUser={setSignedInUser}/>
            <CreateArtist openCreateArtist={openCreateArtist} handleCloseCreateArtist={handleCloseCreateArtist} setSignedInUser={setSignedInUser}/> 
            <SignInModal openSignIn={openSignIn} handleCloseSignIn={handleCloseSignIn} setSignedInUser={setSignedInUser}/>  
            <SignUpModal openSignUp={openSignUp} handleCloseSignUp={handleCloseSignUp} setSignedInUser={setSignedInUser}/>
            <HeaderPic /> 
            <ArtistCardContainer />
            <EventCardContainer />
            <VenueCardContainer /> 
        </div>
    )
}



