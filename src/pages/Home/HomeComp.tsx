// import React from 'react'

import Blog from "./Blog"
import Hero from "./Hero"
import Monthly from "./Monthly"
import Partners from "./Partners"
import Preferred from "./Preferred"
import Services from "./Services"
import Structure from "./Structure"
import Subscribe from "./Subscribe"
import Unveiling from "./Unveiling"
// import Values from "./Values"

const HomeComp = () => {
  return (
    <div>

        <Hero />
        <Services />
        {/* <Values /> */}
        <Preferred />
        <Structure />
        <Blog />
        <Unveiling />
        <Monthly />
        <Subscribe />
        <Partners />

    </div>
  )
}

export default HomeComp