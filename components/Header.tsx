import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const isActive = (path: string) => router.pathname === path;

  return (
    <header className="topbar">
      <div className="topbarInner">
        <Link href="/" className="brand">
          <span className="logoWrap">
            <Image src="/logo.png" alt="Typer Premier League" width={34} height={34} />
          </span>
          <span className="brandText">
            <span className="brandTitle">Typer Premier League</span>
            <span className="brandSubtitle">Analizuj • Typuj • Wygrywaj</span>
          </span>
        </Link>

        <nav className="nav">
          <Link className={isActive("/") ? "active" : ""} href="/">Home</Link>
          <Link className={isActive("/typowanie") ? "active" : ""} href="/typowanie">Typowanie</Link>
          <Link className={isActive("/ranking") ? "active" : ""} href="/ranking">Ranking</Link>
          <Link className={isActive("/logowanie") ? "active" : ""} href="/logowanie">Logowanie</Link>
          <Link className={isActive("/rejestracja") ? "active" : ""} href="/rejestracja">Rejestracja</Link>
        </nav>
      </div>
    </header>
  );
}
