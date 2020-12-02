import React from "react";
// import "../styles/eventcard.css";

export default function EventCard({eventProp}) {
  return (
    <div
      className="eventCard"
    >
      <div className="cardHeader">
        <div>
          <div className="eventName">{eventProp.name}</div>
          <div className="eventArtist">{eventProp.artist}</div>
          <div>{eventProp.venue}</div>
        </div>
      </div>
      <br />
      <div>{eventProp.date}</div>
      <div>
        {eventProp.description}
      </div>
      <div>
        Submitted by {eventProp.user}
      </div>
    </div>
  );
}
