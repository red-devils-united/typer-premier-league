import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const active = (path: string) => (router.pathname === path ? "active" : "");

  return (
    <header className="header">
      <div className="headerInner">
        <Link href="/" className="brand">
          <div className="logo" aria-hidden="true">⚽</div>
          <div className="brandText">
            <div className="brandTitle">Typer Premier League</div>
            <div className="brandSub">Predict • Points • Leaderboard</div>
          </div>
        </Link>

        <nav className="nav">
          <Link className={active("/")} href="/">Home</Link>
          <Link className={active("/typowanie")} href="/typowanie">Typowanie</Link>
          <Link className={active("/ranking")} href="/ranking">Ranking</Link>
          <Link className={active("/logowanie")} href="/logowanie">Logowanie</Link>
          <Link className={active("/rejestracja")} href="/rejestracja">Rejestracja</Link>
        </nav>
      </div>
    </header>
  );
}
