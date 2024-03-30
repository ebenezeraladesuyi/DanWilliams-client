/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

interface iUnveiling2 {
    image : any,
}

const UnveilingImg:React.FC<iUnveiling2> = ({image}) => {
  return (
    <div className="w-[260px] h-[260px] flex justify-center items-center ml-[12px]">
        <img className="w-full" src={image} alt="" />
    </div>
  )
}

export default UnveilingImg