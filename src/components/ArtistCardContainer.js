import React, {useState, useEffect} from 'react'; 
import ArtistCard from "./ArtistCard"; 
import "../styles/artistcard.css"; 
import axios from 'axios'




export default function ArtistCardContainer() {
    const [artists, setArtists] = useState([]);
    useEffect(()=>{
        (async function() {
          const response = await axios.get("http://localhost:4000/artists")
          setArtists(response.data.reverse())
        })()
    },[]); 
    return (
        <>
        <div className="artistCardContainer">
            {artists.map(artistObj=><ArtistCard artistProp={artistObj}/>)}
        </div>
        </>
    )
}