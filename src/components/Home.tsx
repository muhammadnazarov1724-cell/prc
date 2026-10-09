import { useAtom } from 'jotai'
import React, { useState } from 'react'
import { dataAtom, deleteUserAtom } from '../store/jotai'
import AddDialog from './AddDialog'
import EditDialog from './EditDialog'
import InfoDialog from './InfoDialog'

export default function Home() {

    let [data] = useAtom(dataAtom)
    let [,deleteUser] = useAtom(deleteUserAtom)
    let [open, setOpen] = useState(false)
    let [editOpen, setEditOpen] = useState(false)
    let [info, setInfo] = useState(false)
    let [search, setSearch] = useState('')
    const [status, setStatus] = useState('all')

const filterData = data?.filter((el: any) => {
    const matchesSearch = el.name.toLowerCase().includes(search.toLowerCase())

   const matchesStatus =
  status === 'all' ||
  (status === 'active' && el.status === true) ||
  (status === 'inactive' && el.status === false);

    return matchesSearch && matchesStatus
  })

  return (
    <>
    <input placeholder='Search by name...' value={search} 
    onChange={(e)=> setSearch(e.target.value)}/>
<select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
    <button onClick={()=> setOpen(true)}>+ Add User</button>
    <div style={{display: 'flex', justifyContent: 'center', marginTop: '25px', gap: '30px'}}>
        {filterData && filterData.map((el) => {
            return <div key={el.id} style={{border: '1px solid #ccc', padding: '55px', borderRadius: '20px', width: '100px'}}>
                <h2>{el.name}</h2>
                <h3>{el.age}</h3>
                <p>{el.status ? 'Active' : 'Inactive'}</p>
                <button onClick={()=> deleteUser(el.id)}>Delete</button>
                <button onClick={()=> setEditOpen(el)}>Edit</button>
                <button onClick={()=> setInfo(el)}>Info</button>
            </div>
        })}
    </div>
    <AddDialog open={open} setOpen={setOpen}/>
    <EditDialog open={editOpen} onClose={()=> setEditOpen(null)} user={editOpen}/>
    <InfoDialog open={info} setInfo={setInfo} user={info}/>
    </>
  )
}
