// import React from 'react'

import { Outlet } from "react-router-dom"
import { Footer, Header } from "../components/block"

const OfferLayout = () => {
  return (
    <div className="bg-white">
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default OfferLayout