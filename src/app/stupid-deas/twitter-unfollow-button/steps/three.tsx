import Image from "next/image";
import { useState } from "react";

interface Props {
  done(): void;
}

const twitterFolks = [
  {
    name: "Shubham",
    username: "aShubhamz",
    isFollowed: false,
    isVerified: false,
  },
  {
    name: "Chandler",
    username: "bitcrshr",
    isFollowed: false,
    isVerified: true,
  },
  {
    name: "Joshua",
    username: "CreeCoder",
    isFollowed: false,
    isVerified: true,
  },
  {
    name: "luna",
    username: "ImLunaHey",
    isFollowed: false,
    isVerified: true,
  },
  {
    name: "Joseph DeWeese 🇺🇲",
    username: "InclinedTactics",
    isFollowed: false,
    isVerified: true,
  },
  {
    name: "Julio Jimenez",
    username: "LispDev",
    isFollowed: false,
    isVerified: true,
  },
  {
    name: "Shreyas mididoddi",
    username: "Shreyassanthu77",
    isFollowed: false,
    isVerified: false,
  },
  {
    name: "Stuart Yee",
    username: "StuartYee_Dev",
    isFollowed: false,
    isVerified: false,
  },
];

export default function StepThree({ done }: Props) {
  const [peopleToFollow, setPeopleToFollow] = useState(twitterFolks);

  const follow = (username: string) =>
    setPeopleToFollow((prevPeopleToFollow) => {
      const copy = [...prevPeopleToFollow];

      for (let i = 0; i < copy.length; i++) {
        if (copy[i].username === username) copy[i].isFollowed = true;
      }

      return copy;
    });

  return (
    <div className="h-48 overflow-auto">
      <div className="p-4">
        <p>You must follow everyone on this list to continue</p>
      </div>
      <ul>
        {peopleToFollow.map(({ name, username, isFollowed, isVerified }) => (
          <li className="flex p-4" key={username}>
            <Image
              src={`/twitter-folks/${username}.jpg`}
              alt={username}
              height={60}
              width={60}
              className="rounded-full"
            />
            <div className="ml-2">
              <div className="flex items-center gap-1">
                <p className="font-bold text-lg">{name}</p>
                {isVerified && (
                  <svg
                    viewBox="0 0 22 22"
                    aria-label="Verified account"
                    role="img"
                    className="text-twitter-blue"
                    height={20}
                    width={20}
                  >
                    <g>
                      <path
                        d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                )}
              </div>
              <p className="text-sm text-gray-500 leading-none">@{username}</p>
            </div>
            <button
              type="button"
              className={`ml-auto font-bold border border-twitter-blue h-fit p-3 px-5 rounded-full ${
                isFollowed
                  ? "bg-transparent text-twitter-blue"
                  : "bg-twitter-blue text-white"
              }`}
              onClick={() => follow(username)}
            >
              {isFollowed ? "Following" : "Follow"}
            </button>
          </li>
        ))}
      </ul>
      {peopleToFollow.every((person) => person.isFollowed) && (
        <button type="button" onClick={done} className="p-4 text-gray-500">
          Continue
        </button>
      )}
    </div>
  );
}
