import { api } from '@/lib/axios';

export async function login(username: string, password: string) {
    const response = await api.post('/users/login', {username, password})

    const token = response.data.accessToken

    const d = new Date();
    d.setTime(d.getTime() + (1*24*60*60*1000));

    const expires = "expires="+ d.toUTCString();

    document.cookie = `token=${token}; ${expires} `;
}