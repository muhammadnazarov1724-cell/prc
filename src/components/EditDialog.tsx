import { useAtom } from 'jotai'
import React from 'react'
import { editUserAtom } from '../store/jotai'

export default function EditDialog({open, onClose, user}) {

    let [,editUser] = useAtom(editUserAtom)
    if (!user) return null

    const update = (e) => {
        e.preventDefault()
        const edUser = {
            name: e.target.name.value,
            age: e.target.age.value,
            status: e.target.status.value,
            id: user.id
        }
        editUser(edUser)
        onClose()
    }

  return (
    <dialog open={open}>
        <form onSubmit={update}>
            <input type="text" name="name" placeholder='Name...' defaultValue={user.name}  />
            <input type="number" name="age" placeholder='Age...' defaultValue={user.age}  />
            <select name="status" defaultValue={user.status}>
                <option value="true">Active</option>
                <option value="false">Inactive</option>
            </select>
            <button type='submit'>Save</button>
            <button type='button' onClick={onClose}>Close</button>
        </form>
    </dialog>
  )
}
