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

export default function CreateEvent({
  signedInUser,
  openCreateEvent,
  handleCloseCreateEvent,
}) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [venue, setVenue] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleCreateEvent = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/createevent", {
        name: name,
        artist: artist,
        venue: venue,
        date: date,
        description: description,
        user: signedInUser,
      })
      .then((result) =>
      window.location = ""
      )
      .catch((error) => console.log(error));
      handleCloseCreateEvent();
  };

  return (
    <div>
      <Modal
        open={openCreateEvent}
        onClose={handleCloseCreateEvent}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <form onSubmit={(e) => handleCreateEvent(e)}>
            <p>Add a Show</p>
            <div>
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                value={name}
                placeholder="event name here"
                onChange={({ target }) => setName(target.value)}
              />
            </div>
            <div>
              <label htmlFor="artist">Artist: </label>
              <input
                type="text"
                value={artist}
                placeholder="artist name here"
                onChange={({ target }) => setArtist(target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="venue">Venue: </label>
              <input
                type="venue"
                value={venue}
                placeholder="venue name here"
                onChange={({ target }) => setVenue(target.value)}
              />
            </div>
            <div>
              <label htmlFor="description">Description: </label>
              <textarea
                type="description"
                value={description}
                placeholder="describe the artist/event"
                rows="6"
                cols="35"
                maxlength="200"
                onChange={({ target }) => setDescription(target.value)}
              />
            </div>
            <div>
              <label htmlFor="date">Date: </label>
              <input
                type="date"
                value={date}
                placeholder="set date and time"
                onChange={({ target }) => setDate(target.value)}
              />
            </div>
            <button type="submit">Submit Event!</button>
          </form>
        </div>
      </Modal>
    </div>
  );
}
