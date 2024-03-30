/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

interface iUnveiling {
    image : any,
}

const UnveilingImages:React.FC<iUnveiling> = ({image}) => {
  return (
    <div className="w-[260px] h-[360px] flex justify-center items-center ml-[12px]">
        <img className="w-full" src={image} alt="" />
    </div>
  )
}

export default UnveilingImages