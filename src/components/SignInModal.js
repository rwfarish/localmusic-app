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

export default function SignInModal({
  setSignedInUser,
  openSignIn,
  handleCloseSignIn,
}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log(username, password);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/get-users-by-username", {
        username: username,
      })
      .then((result) => setSignedInUser(result.data[0].username))
      .catch((error) => console.log(error));
    handleCloseSignIn();
  };
  return (
    <div>
      <Modal
        open={openSignIn}
        onClose={handleCloseSignIn}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              value={username}
              placeholder="enter a username"
              onChange={({ target }) => setUsername(target.value)}
            />
            <div>
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                value={password}
                placeholder="enter a password"
                onChange={({ target }) => setPassword(target.value)}
              />
            </div>
            <button type="submit">Sign In</button>
          </form>
        </div>
      </Modal>
    </div>
  );
}
