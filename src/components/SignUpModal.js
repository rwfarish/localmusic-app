import React, { useState } from "react";
import axios from "axios";
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

export default function SignUpModal({
  setSignedInUser,
  openSignUp,
  handleCloseSignUp,
}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);

  const [newusername, setNewusername] = useState("");
  const [about, setAbout] = useState("");
  const [photo, setPhoto] = useState("");

//   console.log(newusername, about, photo);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/createuser", {
        username: newusername,
        about: about,
        photo: photo,
      })
      .then((result) => setSignedInUser(result.data.username))
      .catch((error) => console.log(error));
    handleCloseSignUp();
  };
  return (
    <div>
      <Modal
        open={openSignUp}
        onClose={handleCloseSignUp}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              value={newusername}
              placeholder="create a username"
              onChange={({ target }) => setNewusername(target.value)}
            />
            <div>
              <label htmlFor="about">About: </label>
              <textarea
                type="about"
                value={about}
                placeholder="Tell us about yourself"
                onChange={({ target }) => setAbout(target.value)}
              />
            </div>
            <div>
              <label htmlFor="photo">Profile picture: </label>
              <input
                type="text"
                value={photo}
                placeholder="Submit an image url"
                onChange={({ target }) => setPhoto(target.value)}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </Modal>
    </div>
  );
}
