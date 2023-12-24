import Link from "next/link";
import LogoutButton from "@/components/Logout";

export default function Home() {
    return (
        <div>
            <p>Página de apresentação do projeto</p> <br />
            <Link href="/signin">Login</Link> <br />
            <Link href="/dashboard">Dashboard</Link> <br />
        </div>
    )
}