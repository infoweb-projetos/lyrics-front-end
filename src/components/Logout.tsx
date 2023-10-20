'use client'

import { logout } from "@/operations/logout"

export default function LogoutButton(){
    return <button onClick={logout}>Logout</button>
}