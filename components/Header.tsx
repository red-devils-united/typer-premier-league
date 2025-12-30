import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  const active = (path: string) => {
    return router.pathname === path ? "navLink active" : "navLink";
  };

  return (
    <header className="header">
      <div className="container headerInner">
        {/* LEWA STRONA: logo + nazwa + slogan */}
        <div className="brandWrap">
          <div className="logoBox" aria-label="Logo">
            {/* jeśli masz logo w /public/logo.png to możesz podmienić na:
                <img src="/logo.png" alt="Logo" className="logoImg" />
              */}
            <span className="logoBall">⚽</span>
          </div>

          <div className="brandTextWrap">
            <div className="brandTitle">Typer Premier League</div>
            <div className="brandTagline">Analizuj • Typuj • Wygrywaj</div>
          </div>
        </div>

        {/* PRAWA STRONA: menu */}
        <nav className="nav">
          <Link href="/" className={active("/")}>
            Home
          </Link>
          <Link href="/typowanie" className={active("/typowanie")}>
            Typowanie
          </Link>
          <Link href="/ranking" className={active("/ranking")}>
            Ranking
          </Link>
          <Link href="/logowanie" className={active("/logowanie")}>
            Logowanie
          </Link>
          <Link href="/rejestracja" className={active("/rejestracja")}>
            Rejestracja
          </Link>
        </nav>
      </div>
    </header>
  );
}
