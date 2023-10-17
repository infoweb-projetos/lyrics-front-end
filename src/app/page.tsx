import { cookies } from 'next/headers'
import Link from "next/link";
import SignIn from './(auth)/signin/page';

export default function Home() {
    return(
        <div>
            <p>Página de apresentação do projeto</p>
            <p>Esta pagina deve levar o usuário para a página de { <Link href="/signin">Login</Link> }</p><br />
            <Link href="/dashboard">Dashboard</Link>
        </div>
    )
}