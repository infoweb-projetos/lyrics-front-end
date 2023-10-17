import { api } from '@/lib/axios';

export async function login(username: string, password: string) {
        await api.post('/users/login', { username, password}).then(() => {
            // window.location.reload();
        })
}