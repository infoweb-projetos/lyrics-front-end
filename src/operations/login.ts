import { api } from '@/lib/axios';
import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function login(username: string, password: string, request?: NextRequest) {
    const headers = {'Content-Type': 'application/json'}
    const response = await api.post('/users/login', {username, password}, {headers}).then(() => {
        //window.location.reload();
    })
    // const {token} = response.
    // const redirectURL = new URL('/', request?.url)
    
    // return NextResponse.redirect(redirectURL, {
    //     headers: {
    //         'Set-Cookie': `token=${token}; Path=/; max-age=259200`
    //     }
    // })
}