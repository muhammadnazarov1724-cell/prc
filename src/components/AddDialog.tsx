import { useAtom } from 'jotai'
import React from 'react'
import { addUserAtom } from '../store/jotai'

export default function AddDialog({open,setOpen}) {

    let [,addUser] = useAtom(addUserAtom)

    const addNewUser = (e) => {
        e.preventDefault()
        const newUser = {
            name: e.target.name.value,
            age: e.target.age.value,
            status: e.target.status.value == true,
            id: Date.now()
        }
        addUser(newUser)
        setOpen(!open)
        e.target.reset()
    }

  return (
    <dialog open={open}>
        <form onSubmit={(e) => addNewUser(e)}>
            <input type="text" name="name" placeholder='Name...' required />
            <input type="number" name="age" placeholder='Age...' required />
            <select name="status">
                <option value="true">Active</option>
                <option value="false">Inactive</option>
            </select>
            <button type='submit'>Add</button>
            <button type='button' onClick={()=> setOpen(!open)}>Close</button>
        </form>
    </dialog>
  )
}
