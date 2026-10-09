import React from 'react'

export default function InfoDialog({open, setInfo, user}) {
  return (
    <dialog open={open}>
        <h1>Info</h1>
        <h2>Name: {user.name}</h2>
        <h3>Age: {user.age}</h3>
        <button onClick={()=>setInfo(false)}>Close</button>
    </dialog>
  )
}
