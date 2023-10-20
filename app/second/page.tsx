import "@/styles/second.css";
import Link from "next/link";

export default function FirstPage() {
  return (
    <>
      <div id="other">Hello other</div>
      <Link
        className="px-8 py-4 bg-blue-500 rounded-full text-white hover:bg-blue-300"
        href="/first"
      >
        First page
      </Link>
    </>
  );
}
