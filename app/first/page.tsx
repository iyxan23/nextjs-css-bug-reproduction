import "@/styles/first.css";
import Link from "next/link";

export default function FirstPage() {
  return (
    <>
      <div id="elem">Hello world</div>

      <Link
        className="px-8 py-4 bg-blue-500 rounded-full text-white hover:bg-blue-300"
        href="/second"
      >
        Second page
      </Link>
    </>
  );
}
