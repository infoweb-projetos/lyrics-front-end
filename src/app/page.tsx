import Link from "next/link";

export default function Home() {
    return(
        <div>
            <p>Página de apresentação do projeto</p> <br />
            <Link href="/signin">Login</Link> <br />
            <Link href="/dashboard">Dashboard</Link>
        </div>
    )
}