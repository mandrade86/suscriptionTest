import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <h2 className="text-center text-3xl text-blue-500">
        Page not found
      </h2>
      <p>
        Go back to{" "}
        <Link href="/" className="underline">
          Home
        </Link>
      </p>
    </main>
  );
}
