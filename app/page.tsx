import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold">Anders Sørensen</h1>

      <p className="mt-4 text-lg text-gray-700">
        Developer focused on React, React Native, and scalable app architecture.
      </p>

      <div className="mt-6 flex gap-4">
        <Link href="/projects" className="underline">
          View Projects
        </Link>

        <a href="mailto:your@email.com" className="underline">
          Contact
        </a>
      </div>
    </main>
  );
}