import useDarkMode from "../useDarkMode";

export default function ToggleDarkMode() {
  const { toggleDarkMode, isDarkMode } = useDarkMode();

  return (
    <div
      onClick={toggleDarkMode}
      className="relative w-14 h-8 rounded-3xl bg-slate-300 dark:bg-zinc-700 flex items-center cursor-pointer ml-2 transition-colors duration-300"
      title={isDarkMode ? "Светлая тема" : "Тёмная тема"}
      style={{ minWidth: 56 }}
    >
      <div
        className={`absolute top-1 transition-all duration-300 rounded-full w-6 h-6 bg-blue-500 ${isDarkMode ? "left-1" : "right-1"}`}
      />
      <span className="absolute left-2 text-yellow-400 text-lg select-none">
        ☀️
      </span>
      <span className="absolute right-2 text-gray-200 text-lg select-none">
        🌙
      </span>
    </div>
  );
}
