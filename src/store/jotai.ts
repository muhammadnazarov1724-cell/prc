import { atom } from "jotai";
import { data } from "react-router-dom";

export let dataAtom = atom([
    {
        name: 'Ali',
        age: 13,
        status: true,
        id: 1
    },
    {
        name: 'Tolib',
        age: 14,
        status: false,
        id: 2
    },
])

export let deleteUserAtom = atom(null,(get,set,id) => {
    set(dataAtom, get(dataAtom).filter(el => el.id != id))
})

export let addUserAtom = atom(null,(get,set,user:any)=> {
    set(dataAtom, [...get(dataAtom),user])
})

export let editUserAtom = atom(null,(get,set,user:any) => {
    set(dataAtom, get(dataAtom).map(el => el.id === user.id ? user : el))
})