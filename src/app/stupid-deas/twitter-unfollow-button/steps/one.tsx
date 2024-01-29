interface Props {
  cancel(): void;
  done(): void;
}

export default function StepOne({ done, cancel }: Props) {
  return (
    <div className="p-4 flex flex-col">
      Are you sure you want to unfollow iliaaamiri?
      <button
        type="button"
        onClick={cancel}
        className="p-2 rounded-full bg-twitter-blue text-white font-bold mt-2"
      >
        No
      </button>
      <button
        type="button"
        className="p-2 rounded-full text-gray-500 mt-2"
        onClick={done}
      >
        Yes
      </button>
    </div>
  );
}
