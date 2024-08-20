import { Route, Routes } from "react-router-dom"
import VenueList from "./pages/Venues/List"

import React from 'react'
import Home from "./pages/Home"

const Router = () => {
  return (
        <Routes>
            <Route index path="/" element={<Home/>}/> 
            <Route path="venues" element={<VenueList/>}/> 
        </Routes>
    )
}

export default Router