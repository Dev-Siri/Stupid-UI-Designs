import Image from "next/image";
import Header from "./header";
import UnfollowButton from "./unfollow-button";

export default function TwitterUnfollowButton() {
  return (
    <article className="flex flex-col items-center justify-center">
      <section className="h-screen w-1/2 border-x border-x-gray-200">
        <Header />
        <Image
          src="https://pbs.twimg.com/profile_banners/1370297679050276865/1682535536/1500x500"
          alt="User Banner"
          height={500}
          width={1500}
          priority
        />
        <div className="flex">
          <Image
            src="/twitter-folks/iliaaamiri.jpg"
            alt="User Image"
            height={150}
            width={150}
            className="rounded-full ml-4 -mt-20 duration-200 border-4 border-gray-400 z-50 opacity-95 cursor-pointer hover:opacity-90"
          />
          <div className="ml-auto p-4">
            <UnfollowButton />
          </div>
        </div>
        <div className="ml-4 mt-4">
          <p className="font-bold text-2xl">ilia 🐈‍⬛.php</p>
          <p className="text-gray-600">@iliaaamiri</p>
        </div>
      </section>
    </article>
  );
}
