function toggleDarkMode() {
  const html = document.querySelector("html")!;

  html.classList.toggle("dark");
}

export function Toggle() {
  return (
    <label className="flex justify-between group items-center p-2">
      <input
        type="checkbox"
        className="appearance-none peer"
        onClick={toggleDarkMode}
      />
      <span className="w-24 h-8 flex items-center flex-shrink-0 bg-gray-300 dark:bg-dark-second-black rounded-full after:w-14 after:h-8 after:bg-main-black dark:after:bg-main-white after:rounded-full ease-in-out after:duration-200 peer-checked:after:translate-x-10 group-hover:after:translate-x-1 group-hover:peer-checked:after:translate-x-9" />
    </label>
  );
}
