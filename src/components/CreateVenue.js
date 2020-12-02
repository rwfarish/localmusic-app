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

export default function CreateVenue({
  signedInUser,
  openCreateVenue,
  handleCloseCreateVenue,
}) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const [place, setPlaceName] = useState("");
  const [address, setAddress] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [venuepic, setVenuePic] = useState(""); 

  const handleCreateVenue = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/createvenue", {
        place: place,  
        address: address, 
        neighborhood: neighborhood,
        venuepic: venuepic,
      })
      .then((result) =>
        window.location= ""
      )
      .catch((error) => console.log(error));
      handleCloseCreateVenue();
  };

  return (
    <div>
      <Modal
        open={openCreateVenue}
        onClose={handleCloseCreateVenue}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <form onSubmit={(e) => handleCreateVenue(e)}>
            <p>Add a Venue</p>
            <div>
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                value={place}
                placeholder="venue name here"
                onChange={({ target }) => setPlaceName(target.value)}
              />
            </div>
            <div>
              <label htmlFor="address">Address: </label>
              <input
                type="text"
                value={address}
                placeholder="venue address"
                onChange={({ target }) => setAddress(target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="neighborhood">Neighborhood: </label>
              <input
                type="text"
                value={neighborhood}
                placeholder="Charleston neighborhood"
                onChange={({ target }) => setNeighborhood(target.value)}
              />
            </div>
            <div>
              <label htmlFor="venuepic">Photo/Logo: </label>
              <input
                type="text"
                value={venuepic}
                placeholder="image address here"
                onChange={({ target }) => setVenuePic(target.value)}
              />
            </div>
            <button type="submit">Submit Venue!</button>
          </form>
        </div>
      </Modal>
    </div>
  );
}