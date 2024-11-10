import React from 'react'

function Button(props: { textName: string} ) {
  return (
    <>
      <button className='bg-[#80b65e] p-[.66rem_3rem_.66rem_3rem] rounded-[.5rem] text-[1rem] text-[#111] font-bold hover:bg-[#c7e9b2]'>{props.textName}</button>
    </>
  )
}

export default Button