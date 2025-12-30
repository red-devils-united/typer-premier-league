import Link from "next/link";

export default function Typowanie() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Typowanie</h1>
      <p>Tu będzie typowanie meczów Premier League.</p>

      <p>
        <Link href="/">← Wróć na stronę główną</Link>
      </p>
    </main>
  );
}
