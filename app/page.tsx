import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link
        className="px-8 py-4 bg-blue-500 rounded-full text-white hover:bg-blue-300"
        href="/first"
      >
        First page
      </Link>
      <Link
        className="px-8 py-4 bg-blue-500 rounded-full text-white hover:bg-blue-300"
        href="/second"
      >
        Second page
      </Link>
    </>
  );
}
