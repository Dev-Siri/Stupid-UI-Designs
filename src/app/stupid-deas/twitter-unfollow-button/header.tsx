export default function Header() {
  return (
    <header className="flex items-center gap-8 p-2 border-b border-b-gray-200">
      <button
        type="button"
        className="cursor-pointer duration-200 hover:bg-gray-300 p-2 rounded-full"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" height={24} width={24}>
          <g>
            <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path>
          </g>
        </svg>
      </button>
      <div className="mt-1">
        <p className="text-xl leading-none font-bold">ilia 🐈‍⬛.php</p>
        <p className="text-sm font-medium text-gray-500">7,706 Tweets</p>
      </div>
    </header>
  );
}
