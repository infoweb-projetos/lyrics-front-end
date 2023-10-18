import { api } from '@/lib/axios';

export async function createUser(username: string, name: string, email: string, password: string) {
    await api.post('/users', { username, name, email, password}).then(() => {
        location.replace("/signin");
    })
}