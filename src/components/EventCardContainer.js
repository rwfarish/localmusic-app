import React, {useState, useEffect} from 'react'; 
import EventCard from "./EventCard"; 
import "../styles/eventcard.css"; 
import axios from 'axios';
import OutlinedCard from './OutlinedCard';

export default function EventCardContainer() {
    const [events, setEvents] = useState([]);
    useEffect(()=>{
        (async function() {
          const response = await axios.get("http://localhost:4000/events")
          setEvents(response.data.reverse())
        })()
    },[]); 
    return (
        <div className="cardContainer" >
            {events.map(eventObj=><OutlinedCard eventProp={eventObj}/>)}
            {/* {events.map(eventObj=><EventCard eventProp={eventObj}/>)} */}
        </div>
    )
}

