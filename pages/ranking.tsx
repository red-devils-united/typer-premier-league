import Link from "next/link";

export default function Ranking() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Ranking</h1>
      <p>Tu będzie ranking użytkowników.</p>

      <p>
        <Link href="/">← Wróć na stronę główną</Link>
      </p>
    </main>
  );
}
