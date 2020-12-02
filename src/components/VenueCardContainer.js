import React, {useState, useEffect} from 'react'; 
import VenueCard from "./VenueCard"; 
import "../styles/venuecard.css"; 
import axios from 'axios'

export default function VenueCardContainer() {
    const [venues, setVenues] = useState([]);
    useEffect(()=>{
        (async function() {
          const response = await axios.get("http://localhost:4000/venues")
          setVenues(response.data.reverse())
        })()
    },[]); 
    return (
        <div className="venueCardContainer" >
            {venues.map(venueObj=><VenueCard venueProp={venueObj}/>)}
        </div>
    )
}