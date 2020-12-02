import React, { useState } from "react";
import axios from "axios";
import "../styles/create.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  export default function CreateArtist({
    signedInUser,
    openCreateArtist,
    handleCloseCreateArtist,
  }) {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);

    const [artistname, setArtistName] = useState(""); 
    const [streaming, setStreaming] = useState(""); 
    const [social, setSocial] = useState(""); 
    const [genre, setGenre] = useState(""); 
    const [photo, setPhoto] = useState(""); 

    const handleCreateArtist = (e) => {
        e.preventDefault(); 
        axios
         .post("http://localhost:4000/createartist", {
             artistname: artistname, 
             streaming: streaming, 
             social: social, 
             genre: genre, 
             photo: photo,
         })
         .then((result) => 
         window.location= ""
         )
         .catch((error) => console.log(error)); 
         handleCloseCreateArtist(); 
    }; 

    return (
        <div>
          <Modal
            open={openCreateArtist}
            onClose={handleCloseCreateArtist}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <div style={modalStyle} className={classes.paper}>
              <form onSubmit={(e) => handleCreateArtist(e)}>
                <p>Add an Artist</p>
                <div>
                  <label htmlFor="name">Name: </label>
                  <input
                    type="text"
                    value={artistname}
                    placeholder="enter artist name"
                    onChange={({ target }) => setArtistName(target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="streaming">Streaming Link: </label>
                  <input
                    type="text"
                    value={streaming}
                    placeholder="enter streaming link here"
                    onChange={({ target }) => setStreaming(target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="neighborhood">Social/Website Link: </label>
                  <input
                    type="text"
                    value={social}
                    placeholder="enter social or web link"
                    onChange={({ target }) => setSocial(target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="genre">Genre: </label>
                  <input
                    type="text"
                    value={genre}
                    placeholder="enter artist genre"
                    onChange={({ target }) => setGenre(target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="photo">Photo: </label>
                  <input
                    type="text"
                    value={photo}
                    placeholder="image address here"
                    onChange={({ target }) => setPhoto(target.value)}
                  />
                </div>
                <button type="submit">Submit Artist!</button>
              </form>
            </div>
          </Modal>
        </div>
      );
    }