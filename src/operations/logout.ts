import { NextResponse } from 'next/server'
 
export async function logout() {
    let response = await NextResponse.next()
    console.log(await response.cookies.getAll())
    await response.cookies.delete('token')
}