interface Props {
  cancel(): void;
}

export default function StepFive({ cancel }: Props) {
  return (
    <div className="p-4">
      <p>This is the final step.</p>
      <p>are you sure you want to unfollow?</p>
      <div className="flex gap-2 mt-2">
        <button
          type="button"
          className="bg-gray-200 rounded-md p-2 px-5"
          onClick={cancel}
        >
          No
        </button>
        <button
          type="button"
          className="bg-gray-200 rounded-md p-2 px-5"
          onClick={cancel}
        >
          No
        </button>
        <button
          type="button"
          className="bg-gray-200 rounded-md p-2 px-5"
          onClick={cancel}
        >
          No
        </button>
        <button
          type="button"
          className="bg-gray-200 rounded-md p-2 px-5"
          onClick={cancel}
        >
          No
        </button>
        <button
          type="button"
          className="bg-gray-200 rounded-md p-2 px-5"
          onClick={cancel}
        >
          No
        </button>
        <button
          type="button"
          className="bg-gray-200 rounded-md p-2 px-5"
          onClick={cancel}
        >
          No
        </button>
      </div>
      <div className="flex mt-4">
        <button
          type="button"
          className="text-xs text-gray-200 ml-auto"
          onClick={() =>
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
          }
        >
          yes
        </button>
      </div>
    </div>
  );
}
