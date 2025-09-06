

export default function SideBar() {
  return (
    <div className="absolute w-64 h-screen bg-[#CA8787] text-white flex flex-col p-4">
      <ul className="space-y-4 w-full">
        <li className="flex items-center justify-between border-b border-white/40 pb-2">
          <span className="flex items-center gap-2">
            <span className="text-lg">＋</span>
            Add Account
          </span>
        </li>

        <li className="flex items-center justify-between border-b border-white/40 pb-2">
          <span className="flex items-center gap-2">
            <span className="text-lg">↓</span>
            Gold Jewellery
          </span>
        </li>

        <li className="flex items-center justify-between border-b border-white/40 pb-2">
          <span className="flex items-center gap-2">
            <span className="text-lg">↓</span>
            Silver Jewellery
          </span>
        </li>

        <li className="flex items-center justify-between border-b border-white/40 pb-2">
          <span className="flex items-center gap-2">
            <span className="text-lg">↓</span>
            Trending Collection
          </span>
        </li>

        <li className="flex items-center justify-between border-b border-white/40 pb-2">
          <span className="flex items-center gap-2">
            <span className="text-lg">↓</span>
            Gifts
          </span>
        </li>

        <li className="flex items-center justify-between border-b border-white/40 pb-2">
          <span className="flex items-center gap-2">
            <span className="text-lg">↓</span>
            Shop by Occasion
          </span>
        </li>

        {/* Login / Signup box */}
        <li className="mt-4">
          <button className="w-full flex items-center gap-2 border border-white bg-white text-gray-700 py-2 px-3 rounded-sm hover:bg-gray-100">
            <span className="text-lg">👤</span>
            Login / SignUp
          </button>
        </li>
      </ul>
    </div>
  );
}
