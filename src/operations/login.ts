import { api } from '@/lib/axios';
import { NextRequest, NextResponse } from 'next/server';

export async function login(username: string, password: string, request?: NextRequest) {
    const response = await api.post('/users/login', {username, password})
    // const {token} = response.data
    // const redirectURL = new URL('/', request?.url)
    
    // return NextResponse.redirect(redirectURL, {
    //     headers: {
    //         'Set-Cookie': `token=${token}; Path=/; max-age=259200`
    //     }
    // })
}