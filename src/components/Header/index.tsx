import { Menu, Toggle } from "./components";

function Header() {
  return (
    <header className="flex pt-10 justify-between">
      <Toggle />
      <Menu />
    </header>
  );
}

export { Header };
