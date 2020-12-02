import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "../styles/dropdown.css";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function SimplePopover({ handleOpenCreateArtist }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <li
        aria-describedby={id}
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Artists
      </li>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className="dropdown">
          <Typography className={classes.typography}>Browse Artists</Typography>
          <Typography
            className={classes.typography}
            onClick={handleOpenCreateArtist}
          >
            Submit an Artist
          </Typography>
        </div>
      </Popover>
    </div>
  );
}
