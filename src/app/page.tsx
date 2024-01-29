import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center pt-10">
      <h1 className="text-6xl font-bold text-center [text-wrap:balance]">
        Welcome to Dev Siri&apos;s Collection of Stupid UI Design
      </h1>
      <p className="mt-4">The second best place on Earth (real)</p>
      <ul className="w-3/4 mt-4">
        <p className="self-start">Browse the stupidity on here:</p>
        <li className="mt-4">
          <Link
            href="/stupid-deas/twitter-unfollow-button"
            className="p-4 w-full"
          >
            Twitter Unfollow Button <br />
            <span className="ml-[18px] text-gray-700">
              You must fill in everything to proceed to unfollow
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
