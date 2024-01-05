import { themeStore } from '../store';

function toggleDarkMode() {
  const html = document.querySelector('html')!;
  const isDarkMode = html.classList.contains('dark');

  themeStore.setDarkMode(isDarkMode ? 'light' : 'dark');
}

export function Toggle() {
  const html = document.querySelector('html')!;
  const isDarkMode = html.classList.contains('dark');

  return (
    <label className='flex justify-between group items-center cursor-pointer'>
      <input
        type='checkbox'
        className='appearance-none peer'
        onClick={toggleDarkMode}
        defaultChecked={isDarkMode}
      />
      <span className='w-16 md:w-24 h-6 md:h-8 flex items-center flex-shrink-0 bg-gray-300 dark:bg-dark-second-black rounded-full after:w-9 md:after:w-14 after:h-6 md:after:h-8 after:bg-main-black dark:after:bg-main-white after:rounded-full ease-in-out after:duration-200 peer-checked:after:translate-x-7 md:peer-checked:after:translate-x-10 md:group-hover:after:translate-x-1 md:group-hover:peer-checked:after:translate-x-9 9 bg-moon bg-1.2 md:bg-1.5 peer-checked:bg-sun bg-no-repeat bg-right-0.4 peer-checked:bg-left-0.4' />
    </label>
  );
}
