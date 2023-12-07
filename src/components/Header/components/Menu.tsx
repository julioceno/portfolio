import { useState } from "react";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const genericHamburgerLine = `h-[.3rem] w-10 my-1 rounded-full bg-main-black dark:bg-main-white duration-300`;

  return (
    <button
      className="h-16 w-16 bg-gray-200 dark:bg-dark-second-black rounded-full flex flex-col justify-center items-center"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen && "rotate-45 translate-y-3 "
        }`}
      />
      <div className={`${genericHamburgerLine} ${isOpen && "opacity-0"}`} />
      <div
        className={`${genericHamburgerLine} ${
          isOpen && "-rotate-45 -translate-y-3"
        }`}
      />
    </button>
  );
}
