export default function Home() {
  return (
    <main style={{ padding: 40, maxWidth: 1100, margin: "0 auto" }}>
      <h1 style={{ marginTop: 0 }}>Typer Premier League</h1>
      <p style={{ opacity: 0.8 }}>
        Typuj wyniki meczów, zbieraj punkty i walcz o miejsce w rankingu.
      </p>

      <div
        style={{
          marginTop: 20,
          padding: 18,
          borderRadius: 16,
          border: "1px solid rgba(255,255,255,0.12)",
          background: "rgba(255,255,255,0.06)",
        }}
      >
        <h2 style={{ marginTop: 0 }}>Start</h2>
        <ol style={{ lineHeight: 1.8, opacity: 0.9 }}>
          <li>Załóż konto w zakładce Rejestracja</li>
          <li>Zaloguj się</li>
          <li>Wejdź w Typowanie i ustaw swoje typy</li>
          <li>Sprawdzaj Ranking</li>
        </ol>
      </div>
    </main>
  );
}
